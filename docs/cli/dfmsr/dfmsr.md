---
id: dfmsr
title: dfmsr (base command)
---

The dfmsr command allows interacting with storage as the [replicator](../../roles/replicator.md) node.

## Child commands

| Command                       | Description                           |
| :---------------------------- | :------------------------------------ |
| [dfmsr contract](contract.md) | allows interact with client contracts |
| [dfmsr version](version.md)   | allows interact with the version      |
| [dfmsr net](net.md)           | allows interact with the network      |

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
| **ledger**          | turns ledger mode on, means that node will work with blockchain                         |
