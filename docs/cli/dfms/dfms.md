---
id: dfms-client
title: The Client Base Command
sidebar_label: dfms-client (base command)
---

The dfms-client command allows interacting with storage as the client ([owner](../../roles/owner.md)) node.

## Child commands

| Command                        | Description                                                                               |
| :----------------------------- | :---------------------------------------------------------------------------------------- |
| [`dfms-client drive`](drive.md)       | interface with [Drive](../../built_in_features/drive/overview.md) file system             |
| [`dfms-client contract`](contract.md) | manage [Drive](../../built_in_features/drive/overview.md) Contracts                       |
| [`dfms-client net`](net.md)           | interact with the network                                                                 |
| [`dfms-client sc`](sc/sc.md)             | interact with drive's [SuperContracts](../../built_in_features/supercontract/overview.md) |
| [`dfms-client version`](version.md)   | show version                                                                              |

## Global options

| Name                | Description                                                                             |
| :------------------ | :-------------------------------------------------------------------------------------- |
| **timeout**         | sets a global timeout on the command                                                    |
| **encoding(_enc_)** | the encoding type the output should be encoded with (json, xml, or text)                |
| **stream-channels** | stream channel output                                                                   |
| **api-addr**        | sets address for node's API to listen. Addresses set in the config will be ignored      |
| **p2p-addr**        | sets address for node's P2P communications. Addresses set in the config will be ignored |
| **key(_k_)**        | sets node's private key                                                                 |
| **path**            | sets working directory                                                                  |
| **remote**          | sets address of remote node to connect                                                  |
| **debug**           | sets log level to debug                                                                 |
| **test**            | if true, runs node with test fixtures. Useful for testing                               |
| **offline**         | disables all node's p2p networking. Useful for disk access only operations and testing  |
| **bootstrap**       | bootstraps nodes on the network                                                         |
| **ledger-addr**     | sets remote Ledger address. Addresses set in the config will be ignored                 |
| **ledger**          | turns ledger mode on, means that node will work with Blockchain                         |
