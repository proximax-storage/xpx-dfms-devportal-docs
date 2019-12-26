---
id: contract
title: dfmsr contract
---

## Description
Allows interact with drive file system.

## Child commands
| Command | Description  |
|:-:|:-:|
| [dfmsr contract accept](#dfmsr-contract-accept) | allows accept joins contract by it's id |
| [dfmsr contract accepted](#dfmsr-contract-accepted) | allows accepted returns subscription for accepted contracts by the node |
| [dfmsr contract invites](#dfmsr-contract-invites) | allows create a subscription for new contract invitations |
| [dfmsr contract accepting](#dfmsr-contract-accepting) | allows to receive contract invitations and accept them with a defined strategy |

----------------------
### `dfmsr contract accept`
Accept join contract by it's id.
#### Arguments
| Name | Description  |
|:-:|:-:|
| drive id | id of required drive |
#### Sample
```console
$ dfms contract accept baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5
```
----------------------
### `dfmsr contract accepted`
Accepted returns subscription for accepted contracts by the node.
#### Sample
```console
$ dfms contract accepted
```
----------------------
### `dfmsr contract invites`
Creates a subscription for new contract invitations.
#### Sample
```console
$ dfms contract invites
```
----------------------
### `dfmsr contract accepting`
Receives contract invitations and accept them with a defined strategy. The method will make some basic validation regarding the contract before accepting it. Every time change to opposite status (start/stop)
#### Sample
```console
$ dfms contract accepting

"Accepting started."
```