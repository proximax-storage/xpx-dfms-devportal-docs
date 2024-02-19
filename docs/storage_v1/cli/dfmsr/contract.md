---
id: contract
title: Interface with a Replicator Contract
sidebar_label: dfms-replicator contract
---

**WARNING**: The API is not stable yet and is subject to change.

## Description

Is command set implementing ContractReplicator which is a part of [DFMSR](../../getting_started/what_is.md) API which is responsible for creating and managing [SuperContracts](../../built_in_features/supercontract/overview.md) and their state, contracts, etc. The API extends [DFMS](../../getting_started/what_is.md) ContractClient API with features related to replicating [Drive](../../built_in_features/drive/overview.md) and accepting [Drive](../../built_in_features/drive/overview.md) contracts.

## Child commands

| Command                                                 | Description                                                                                                                        |
| :------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| [`dfms-replicator contract compose`](#dfms-replicator-contract-compose)     | compose new [Drive](../../built_in_features/drive/overview.md) Contract                                                            |
| [`dfms-replicator contract ls`](#dfms-replicator-contract-ls)               | lists all the [SuperContracts](../../built_in_features/supercontract/overview.md) in which Node participates as an owner or member |
| [`dfms-replicator contract get`](#dfms-replicator-contract-get)             | get Contract body of any [Drive](../../built_in_features/drive/overview.md) in the network                                         |
| [`dfms-replicator contract ammends`](#dfms-replicator-contract-ammends)     | subscribe for [Drive](../../built_in_features/drive/overview.md) Contract updates                                                  |
| [`dfms-replicator contract accept`](#dfms-replicator-contract-accept)       | accept [Drive](../../built_in_features/drive/overview.md) Contract                                                                 |
| [`dfms-replicator contract accepted`](#dfms-replicator-contract-accepted)   | subscribe for newly accepted [Drive](../../built_in_features/drive/overview.md) Contracts of the node                              |
| [`dfms-replicator contract invites`](#dfms-replicator-contract-invites)     | subscribe for [Drive](../../built_in_features/drive/overview.md) Contract invites                                                  |
| [`dfms-replicator contract accepting`](#dfms-replicator-contract-accepting) | automatically accept every received invitation                                                                                     |

---

## `dfms-replicator contract compose`

This command composes Contract for new [Drive](../../built_in_features/drive/overview.md) between current [DFMS](../../getting_started/what_is.md) node and multiple [DFMSR](../../getting_started/what_is.md) nodes with conditions to store `space` amount of data for `subscription` time period.

First of all, a Contract invitation is built from configured arguments and options. This invitation broadcasted throughout the network. Then, [Storage Replicator Nodes](../../roles/replicator.md) receive the invitation and decide to accept it or not. Their decision is based on the configured fields. The composing, at the same moment, awaits the configured amount of [Storage Replicator Nodes](../../roles/replicator.md) to accept invitations. If throughout 10 minutes the minimal amount of [Storage Replicator Nodes](../../roles/replicator.md) do not accept the invitation - composing fails. In another case, it succeeds. From that moment new [Drive](../../built_in_features/drive/overview.md) is considered to be created.

### Arguments

| Name         | Description               |
| :----------- | :------------------------ |
| **space**    | required space (in MB)    |
| **duration** | Drive duration (in month) |

### Options

| Name                                  | Description                                                                                                                                                                       |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **replicas(_r_)**                     | to set the amount of [Drive](../../built_in_features/drive/overview.md) replicas. One replica = one [Storage Replicator Node](../../roles/replicator.md#replicator). The default is 3          |
| **min-replicators(_mr_)**             | to set a minimum amount of joined [Storage Replicator Node](../../roles/replicator.md) for composing to succeed. The default is 3                                                              |
| **subscription-price(_p_)**           | to set a price in tokens for one subscription period. The default is `space` * `replicas`                                                                                         |
| **number-subscription-periods(_sn_)** | to set number of desired subscriptions. The default is 3                                                                                                                          |
| **percent-approvers(_pa_)**           | to set percent of [Storage Replicator Node](../../roles/replicator.md) needed to come up to consensus to proceed any [Drive](../../built_in_features/drive/overview.md) account related action |
| **private-key(_key_)**                | to set a custom private key to generate [Drive](../../built_in_features/drive/overview.md) account from                                                                           |
| **help**                              | to see description with examples                                                                                                                                                  |

### Examples

- _Create a new contract with the needed parameters:_

  ```shell
  $ dfms-replicator contract compose 1000 1 \        # size & duration
                  --replicas=5 \
                  --min-replicators=3 \
                  --billing-price=5000 \
                  --billing-period=1 \  
                  --percent-approvers=67
  {
    "drive": "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5",
    "owner": "080412200eb448d07c7ccb312989ac27aa052738ff589e2f83973f909b506b450dc5c4e2",
    "replicators": [
            "0804122068f50e10e5b8be2b7e9ddb687a667d6e94dd55fe02b4aed8195f51f9a242558b",
            "0804122073472a2e9dcea5c2a36eb7f6a34a634010391ec89e883d67360db16f28b9443c",
            "08041220d03918e35573c66578b5a0eed723fe2a46208783e13498751d9315115ca06d4b"
    ],
    "root": "QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn",
    "created": 741,
    "duration": 1,
    "space": 1000,
    "replicas": 5,
    "minReplicators": 3,
    "percentApprovers": 67,
    "billingPrice": 5000,
    "billingPeriod": 1
  }
  ```

---

## `dfms-replicator contract ls`

Lists all the [SuperContracts](../../built_in_features/supercontract/overview.md) in which Node participates as an owner or member.

### Examples

- _Get client drives:_

  ```shell
  $ dfms-replicator contract ls
  baegaajaiaqjca7fnnbv2od5i3uo2zdvruvp2uvbiaoqhnbwqv7tpy6qkbmip7622
  baegaajaiaqjcaedinbn4fbtawhvbgmuxv2uklfxabf5ughaii2jbp2vtw2z34cb5
  baegaajaiaqjcafssfchukjl77zijwpneyrv5wec7u4yj6f5fqiusqwlas5f4unpd
  baegaajaiaqjcah6g44hvl2dcdi7dt4bmlv6uus44eqemz7xdsyy7nrwvm5zormk7
  baegaajaiaqjcahzmkrwaftgj47wnao4xqtwjvlizj3ujhz7sd42jhnapjqkc3hmv
  baegaajaiaqjcan6rv7ozao7uujwruvm2savlnqyzrb2zq6w2kyvb3djluxnkwh4x
  baegaajaiaqjcapacmgyuibklcyxxpkae53fyqsi4fz2ijyfcugl5ze4nvnsscw7z
  baegaajaiaqjcat75mpp2lein7cpnu2lw6tho2fn22seasqpzentlnzwpuhz5a4s3
  baegaajaiaqjcatslsbbgzdzdx7pdcyawnyrefhsn3s6bwbunrp53xggsifs6yat7
  baegaajaiaqjcb47kcxrlqf2lef633v2biondhhje3pguoxtfj22rkkmyvlf43jxn
  baegaajaiaqjcb4c53l5t3gcnjehbgvkptb3gnw3qbwq5l2uzuzmarm5snihrz5s2
  ```

---

## `dfms-replicator contract get`

`get` prints a Contract body of any `drive` from the network. Takes it from local storage or fetches from the network.

### Arguments

| Name      | Description                                           |
| :-------- | :---------------------------------------------------- |
| **drive** | [Drive](../../built_in_features/drive/overview.md) ID |

### Examples

- _Get contact by Drive ID:_
  
  ```shell
  $ dfms-replicator contract get baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
  {
    "drive": "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5",
    "owner": "080412200eb448d07c7ccb312989ac27aa052738ff589e2f83973f909b506b450dc5c4e2",
    "replicators": [
            "0804122068f50e10e5b8be2b7e9ddb687a667d6e94dd55fe02b4aed8195f51f9a242558b",
            "0804122073472a2e9dcea5c2a36eb7f6a34a634010391ec89e883d67360db16f28b9443c",
            "08041220d03918e35573c66578b5a0eed723fe2a46208783e13498751d9315115ca06d4b"
    ],
    "root": "QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn",
    "created": 741,
    "duration": 1,
    "space": 1000,
    "replicas": 3,
    "minReplicators": 3,
    "percentApprovers": 67,
    "billingPrice": 5000,
    "billingPeriod": 1
  }
  ```

---

## `dfms-replicator contract ammends`

`contract ammends` subscribes for Contract amendments of `drive`. Produced either from owner or [Storage Replicator Node](../../roles/replicator.md#replicator) consensus.

### Arguments

| Name      | Description                                           |
| :-------- | :---------------------------------------------------- |
| **drive** | [Drive](../../built_in_features/drive/overview.md) ID |

### Examples

- _Start listen to amendments of some drive:_

  ```shell
  $ dfms-replicator contract ammends baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
  ```

---

## `dfms-replicator contract accept`

Joins `drive` by it's id. Can join only [SuperContracts](../../built_in_features/supercontract/overview.md) awaiting new members.

### Arguments

| Name      | Description                                           |
| :-------- | :---------------------------------------------------- |
| **drive** | [Drive](../../built_in_features/drive/overview.md) ID |

### Examples

- _Accept a contract by ID:_
  
  ```shell
  $ dfms-replicator contract accept baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
  ```

---

## `dfms-replicator contract accepted`

Subscribes for newly accepted Driver Contracts of the node, either accepted automatically or manually.

### Examples

- _Show accepted contracts:_
  
  ```shell
  $ dfms-replicator contract accepted
  ```

---

## `dfms-replicator contract invites`

Subscribes for [Drive](../../built_in_features/drive/overview.md) Contract invitation published on the network to be accepted or not.

### Examples

- _Show invites:_

  ```shell
  $ dfms-replicator contract invites
  ```

---

## `dfms-replicator contract accepting`

**WARNING**: This command will be removed in the next minor release.

Subscribes for new invitations and accepts them automatically, ALL OF THEM WITHOUT ANY DECISION MAKING.

### Examples

- _Start accepting:_

  ```shell
  $ dfms-replicator contract accepting
  "Accepting started."
  ```

- _Stop accepting:_

  ```shell
  $ dfms-replicator contract accepting
  "Accepting stoped."
  ```
  