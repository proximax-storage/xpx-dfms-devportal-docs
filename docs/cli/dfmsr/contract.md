---
id: contract
title: dfmsr contract
---

**WARNING**: The API is not stable yet and is subject to change.

## Description
Is command set implementing ContractReplicator which is a part of DFMSR API which is responsible for creating and managing Drives and their state, contracts, etc. The API extends DFMS ContractClient API with features related to replicating [Drive](../../built_in_features/drive/overview.md) and accepting [Drive](../../built_in_features/drive/overview.md) contracts.

## Child commands
| Command                                                 | Description                                                                                           |
| :------------------------------------------------------ | :---------------------------------------------------------------------------------------------------- |
| [`dfmsr contract compose`](#dfmsr-contract-compose)     | compose new [Drive](../../built_in_features/drive/overview.md) Contract                               |
| [`dfmsr contract ls`](#dfmsr-contract-ls)               | lists all the Drives in which Node participates as an owner or member                                 |
| [`dfmsr contract get`](#dfmsr-contract-get)             | get Contract body of any [Drive](../../built_in_features/drive/overview.md) in the network            |
| [`dfmsr contract ammends`](#dfmsr-contract-ammends)     | subscribe for [Drive](../../built_in_features/drive/overview.md) Contract updates                     |
| [`dfmsr contract accept`](#dfmsr-contract-accept)       | accept [Drive](../../built_in_features/drive/overview.md) Contract                                    |
| [`dfmsr contract accepted`](#dfmsr-contract-accepted)   | subscribe for newly accepted [Drive](../../built_in_features/drive/overview.md) Contracts of the node |
| [`dfmsr contract invites`](#dfmsr-contract-invites)     | subscribe for [Drive](../../built_in_features/drive/overview.md) Contract invites                     |
| [`dfmsr contract accepting`](#dfmsr-contract-accepting) | automatically accept every received invitation                                                        |

---

## `dfmsr contract compose`

This command composes Contract for new [Drive](../../built_in_features/drive/overview.md) between current DFMS node and multiple DFMSR nodes with conditions to store `space` amount of data for `subscription` time period.

First of all, a Contract invitation is built from configured arguments and options. This invitation broadcasted throughout the network. Then, replicators receive the invitation and decide to accept it or not. Their decision is based on the configured fields. The composing, at the same moment, awaits the configured amount of replicators to accept invitations. If throughout 15 minutes the minimal amount of replicators do not accept the invitation - composing fails. In another case, it succeeds. From that moment new [Drive](../../built_in_features/drive/overview.md) is considered to be created.

### Arguments

| Name         | Description               |
| :----------- | :------------------------ |
| **space**    | required space (in MB)    |
| **duration** | drive duration (in month) |

### Options

| Name                                    | Description                                                                                                                                     |
| :-------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **--replicas(_r_)**                     | to set the amount of [Drive](../../built_in_features/drive/overview.md) replicas. One replica = one replicator. The default is 3                |
| **--min-replicators(_mr_)**             | to set a minimum amount of joined replicators for composing to succeed. The default is 3                                                        |
| **--subscription-price(_p_)**           | to set a price in tokens for one subscription period. The default is `space` * `replicas`                                                       |
| **--number-subscription-periods(_sn_)** | to set number of desired subscriptions. The default is 3                                                                                        |
| **--percent-approvers(_pa_)**           | to set % of replicators needed to come up to consensus to proceed any [Drive](../../built_in_features/drive/overview.md) account related action |
| **--private-key(_key_)**                | to set a custom private key to generate [Drive](../../built_in_features/drive/overview.md) account from                                         |
| **--help**                              | to see description with examples                                                                                                                |

### Examples

- _Create a new contract with the needed parameters:_

  ```shell
  $ dfmsr contract compose 1000 1 \        # size & duration 
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

## `dfmsr contract ls`

Lists all the Drives in which Node participates as an owner or member.

### Examples

- _Get client drives:_

  ```shell
  $ dfmsr contract ls
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

## `dfmsr contract get`

`get` prints a Contract body of any `drive` from the network. Takes it from local storage or fetches from the network.

### Arguments

| Name      | Description                                           |
| :-------- | :---------------------------------------------------- |
| **drive** | [Drive](../../built_in_features/drive/overview.md) ID |

### Examples

- _Get contact by drive ID:_
  
  ```shell
  $ dfmsr contract get baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
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

## `dfmsr contract ammends`

`contract ammends` subscribes for Contract amendments of `drive`. Produced either from owner or replicator consensus.

### Arguments

| Name      | Description                                           |
| :-------- | :---------------------------------------------------- |
| **drive** | [Drive](../../built_in_features/drive/overview.md) ID |

### Examples

- _Start listen to amendments of some drive:_

  ```shell
  $ dfmsr contract ammends baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
  ```

---

## `dfmsr contract accept`

Joins `drive` by it's id. Can join only Drives awaiting new members.

### Arguments

| Name      | Description                                           |
| :-------- | :---------------------------------------------------- |
| **drive** | [Drive](../../built_in_features/drive/overview.md) ID |

### Examples

- _Accept a contract by ID:_
  
  ```shell
  $ dfmsr contract accept baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
  ```

---

## `dfmsr contract accepted`

Subscribes for newly accepted Driver Contracts of the node, either accepted automatically or manually.

### Examples
- _Show accepted contracts:_
  
  ```shell
  $ dfmsr contract accepted
  ```

---

## `dfmsr contract invites`

Subscribes for [Drive](../../built_in_features/drive/overview.md) Contract invitation published on the network to be accepted or not.

### Examples

- _Show invites:_

  ```shell
  $ dfmsr contract invites
  ```

---

## `dfmsr contract accepting`

**WARNING**: This command will be removed in the next minor release.

Subscribes for new invitations and accepts them automatically, ALL OF THEM WITHOUT ANY DECISION MAKING.

### Examples

- _Start accepting:_
 
  ```shell
  $ dfmsr contract accepting
  "Accepting started."
  ```
- _Stop accepting:_
 
  ```shell
  $ dfmsr contract accepting
  "Accepting stoped."
  ```