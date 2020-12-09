---
id: contract
title: Interface with a Client Contract
sidebar_label: dfms-client contract
---

**WARNING**: The API is not stable yet and is subject to change.

## Description

`contract` is the command set implementing ContractClientAPI which is a part of [Storage](../../getting_started/what_is.md) API that is responsible for creating and managing Drives and their state, contracts, etc.

## Child commands

| Command                                    | Description                                                                                                              |
| :----------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| [`dfms-client contract compose`](#Compose) | compose new [Drive Contract](../../built_in_features/drive/overview.md)                                                  |
| [`dfms-client contract ls`](#List)         | lists all the [Drives](../../built_in_features/drive/overview.md) Contract where Node participates as an owner or member |
| [`dfms-client contract get`](#Get)         | get Contract body of any [Drive](../../built_in_features/drive/overview.md) in the network                               |
| [`dfms-client contract ammends`](#Ammends) | subscribe for [Drive Contract](../../built_in_features/drive/overview.md) updates                                        |
| [`dfms-client contract verify`](#Verify)   | verify Contract execution of the [Drive](../../built_in_features/drive/overview.md)                                      |
| [`dfms-client contract finish`](#Finish)   | finish Contract of any owned [Drive Contract](../../built_in_features/drive/overview.md) updates.                        |

---

## Compose

`dfms-client contract compose`

This command composes Contract for new [Drive](../../built_in_features/drive/overview.md) between current [Storage Director Nodes](../../roles/owner.md) node and multiple [Storage Replicator Nodes](../../roles/replicator.md) nodes with conditions to store `space` amount of data for `subscription` time period.

First of all, a Contract invitation is built from configured arguments and options. This invitation broadcasted throughout the network. Then, [Storage Replicator Node](../../roles/replicator.md) receive the invitation and decide to accept it or not. Their decision is based on the configured fields. The composing, at the same moment, awaits the configured amount of [Storage Replicator Node](../../roles/replicator.md) to accept invitations. If throughout 10 minutes the minimal amount of [Storage Replicator Node](../../roles/replicator.md) do not accept the invitation - composing fails. In another case, it succeeds. From that moment new [Drive](../../built_in_features/drive/overview.md) is considered to be created.

### Arguments

| Name             | Description                                                                      |
| :--------------- | :------------------------------------------------------------------------------- |
| **space**        | required space (in MB)                                                           |
| **subscription** | Required subscription period of time. (hours, minutes ans seconds, e.g _1h1m1s_) |

### Options

| Name                                  | Description                                                                                                                                                                                    |
| :------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **replicas(_r_)**                     | to set the amount of [Drive](../../built_in_features/drive/overview.md) replicas. One replica = one [Storage Replicator Node](../../roles/replicator.md). The default is 3                     |
| **min-replicators(_mr_)**             | to set a minimum amount of joined [Storage Replicator Node](../../roles/replicator.md) for composing to succeed. The default is 3                                                              |
| **subscription-price(_p_)**           | to set a price in tokens for one subscription period. The default is `space` * `replicas`                                                                                                      |
| **number-subscription-periods(_sn_)** | to set number of desired subscriptions. The default is 3                                                                                                                                       |
| **percent-approvers(_pa_)**           | to set percent of [Storage Replicator Node](../../roles/replicator.md) needed to come up to consensus to proceed any [Drive](../../built_in_features/drive/overview.md) account related action |
| **private-key(_key_)**                | to set a custom private key to generate [Drive](../../built_in_features/drive/overview.md) account from                                                                                        |
| **help**                              | to see description with examples                                                                                                                                                               |

### Examples

- _Create a new contract with the needed parameters:_

  ```shell
  $ dfms-client contract compose 1000 1 \        # size & duration of one subscribe period
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

## List

`dfms-client contract ls`

Lists all the Drives in which Node participates as an [Storage Director Node](../../roles/owner.md) or member.

### Examples

- _Get client drives:_

  ```shell
  $ dfms-client contract ls
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

## Get

`dfms-client contract get`

`get` prints a Contract body of any `drive` from the network. Takes it from local storage or fetches from the network.

### Arguments

| Name      | Description                                           |
| :-------- | :---------------------------------------------------- |
| **drive** | [Drive](../../built_in_features/drive/overview.md) ID |

### Examples

- _Get contact by Drive ID:_
  
  ```shell
  $ dfms-client contract get baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
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

## Ammends

`dfms-client contract ammends`

Subscribes for Contract amendments of `drive`. Produced either from owner or [Storage Replicator Node](../../roles/replicator.md) consensus.

### Arguments

| Name      | Description                                           |
| :-------- | :---------------------------------------------------- |
| **drive** | [Drive](../../built_in_features/drive/overview.md) ID |

### Examples

- _Start listen to amendments of some drive:_

  ```shell
  $ dfms-client contract ammends baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
  ```

## Verify

`dfms-client contract verify`

Verifies that the [Drive](../../built_in_features/drive/overview.md) Contract specifications of `drive` are fulfilled. Runs verification protocol between [Storage Replicator Node](../../roles/replicator.md) in which they check each other regarding the replicated data retrievability of the Drive.

### Arguments

| Name      | Description                                           |
| :-------- | :---------------------------------------------------- |
| **drive** | [Drive](../../built_in_features/drive/overview.md) ID |

### Examples

- _Verify some drive:_

  ```shell
  $ dfms-client contract verify baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
  ```

## Finish

`dfms-client contract finish`

Finishes [Drive](../../built_in_features/drive/overview.md) Contract. Removes obligation for replicators to store data and act on the given [Drive](../../built_in_features/drive/overview.md). Only owner is allowed to finish [Drive](../../built_in_features/drive/overview.md) Contract before original agreement.

### Arguments

| Name      | Description                                           |
| :-------- | :---------------------------------------------------- |
| **drive** | [Drive](../../built_in_features/drive/overview.md) ID |

### Examples

- Finish some drive:_

  ```shell
  $ dfms-client contract baegaajaiaqjcbchywf5stwzhovu7bqfezrfpjzfrvgfttc4pmamzo5wy7zlfl2jb finish
  {
    "drive": "baegaajaiaqjcbchywf5stwzhovu7bqfezrfpjzfrvgfttc4pmamzo5wy7zlfl2jb",
    "owner": "08041220ad54820387c3e27c7ecb97c8d69866aa5917bb9c0b675e18f9506c9697f8dddb",
    "replicators": [
      "080412200eb448d07c7ccb312989ac27aa052738ff589e2f83973f909b506b450dc5c4e2",
      "0804122068f50e10e5b8be2b7e9ddb687a667d6e94dd55fe02b4aed8195f51f9a242558b",
      "0804122073472a2e9dcea5c2a36eb7f6a34a634010391ec89e883d67360db16f28b9443c",
      "08041220d03918e35573c66578b5a0eed723fe2a46208783e13498751d9315115ca06d4b"
    ],
    "root": "bafybeihhcet2yrpsc5usns3gz3mv4a5bdevxefphzqkzaqfpeteycqhtti",
    "created": 671,
    "duration": 0,
    "space": 1000000000,
    "replicas": 5,
    "minReplicators": 3,
    "percentApprovers": 66,
    "billingPrice": 1,
    "billingPeriod": 172800
  }
  ```
