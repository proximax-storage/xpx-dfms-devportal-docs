---
id: contract
title: dfms contract
---

## Description
Allows interact with drive file system.

## Child commands
| Command | Description  |
|:-:|:-:|
| [dfms contract compose](#dfms-contract-compose) | allows create a new contract |
| [dfms contract ls](#dfms-contract-ls) | allows getting a list of contracts where node participates as an owner |
| [dfms contract get](#dfms-contract-get) | allows return information about contract by id  |
| [dfms contract ammends](#dfms-contract-ammends) | allows create a subscription for the drive contract corrections |

--------------------------
### `dfms contract compose`
Allows you to create a new drive with the specified parameters. Also synchronously announces invites to the Network with the current node as an owner and tries to find members who agree on specified parameters and options.
#### Arguments
| Name | Description  |
|:-:|:-:|
| space | required space (in MB)|
| duration | drive duration (in month) |

#### Options
| Name | Description  |
|:-:|:-:|
| `--replicas` | count of replicas |
| `--min-replicators`  | minimal count of replicas |
| `--billing-price` | billing price (in storage units) |
| `--billing-period` | billing period (in month) |
| `--percent-approvers` | percent of approvers (67) |

#### Sample
Let's create a new contract with the needed parameters:
```console
$ dfms contract compose 1000 1 \               # size & duration 
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
----------------------
### `dfms contract ls`
Lists all the contracts in which a node participates as an owner or member.
#### Sample
```console
$ dfms contract ls
baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
```

----------------------
### `dfms contract get`
Returns contract info by drive id.
#### Arguments
| Name | Description  |
|:-:|:-:|
| drive id | id of required drive |
#### Sample
```console
$ dfms contract get baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
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
----------------------
### `dfms contract ammends`
Create a subscription for the drive contract corrections for the contract in local storage and/or in the Blockchain.
#### Arguments
| Name | Description  |
|:-:|:-:|
| drive id | id of required drive |
#### Sample
```console
$> dfms contract ammends baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
```