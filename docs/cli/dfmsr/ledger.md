---
id: ledger
title: Ledger
sidebar_label: dfms-replicator ledger
---

**WARNING**: The API is not stable yet and is subject to change.

## Description

Allows interact with node ledger

## Subcommands

| Command                          | Description                  |
| :------------------------------- | :--------------------------- |
| [`dfms-replicator ledger key`](#Key) | Return Public Key of a node. |

## Key

`dfms-replicator ledger key`

Return Public Key of a node.

### Example

```shell
$ dfms-client -path=.dfms-client_local ledger key
0EB448D07C7CCB312989AC27AA052738FF589E2F83973F909B506B450DC5C4E2
```
