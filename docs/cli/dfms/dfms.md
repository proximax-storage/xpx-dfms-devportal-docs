---
id: dfms
title: dfms (base command)
---

The dfms command allows interacting with storage as the client (owner) node.

Uses with the following commands:
## Child commands
| Command | Description  |
|:-:|:-:|
| [dfms drive](drive.md) | allows interact with drive file system |
| [dfms contract](contract.md) | allows interact with client contracts |
| [dfms ledger](ledger.md) | allows interact with the ledger |
| [dfms net](net.md) | allows interact with the network |

## Global options
|  Name      | Description  |
|:----------:|:------------:|
| `--timeout` | sets a global timeout on the command |
| `--encoding` `-enc` | the encoding type the output should be encoded with (json, xml, or text) |
| `--stream-channels` | stream channel output |
| `--api-addr` | sets address for node's API to listen. Addresses set in the config will be ignored
| `--p2p-addr` | sets address for node's P2P communications. Addresses set in the config will be ignored |
| `--key` `-k` | sets node's private key  |
| `--path` | sets working directory |
| `--remote` | sets address of remote node to connect |
| `--debug` | sets log level to debug |
| `--test` | if true, runs node with test fixtures. Useful for testing |
| `--offline` | disables all node's p2p networking. Useful for disk access only operations and testing |
| `--bootstrap` | bootstraps nodes on the network |
| `--ledger-addr` | sets remote Ledger address. Addresses set in the config will be ignored |
| `--ledger` | turns ledger mode on, means that node will work with blockchain |
