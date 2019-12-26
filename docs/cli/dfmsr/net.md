---
id: net
title: dfmsr net
---

## Description
Allows interact with the network.

## Child commands
| Command | Description  |
|:-:|:-:|
| [dfmsr net connect](#dfmsr-net-connect) | allows establishe a connection to given multiaddr/s |
| [dfmsr net disconnect](#dfmsr-net-disconnect) | allows destroy a connection to given multiaddr/s |
| [dfmsr net peers](#dfmsr-net-peers) | allows list information about all connected peers |
| [dfmsr net id](#dfmsr-net-id) | allows return node's identifier |
| [dfmsr net addrs](#dfmsr-net-addrs) | allows return list of addresses node uses for p2p communications |

---------------------
### `dfmsr net connect`
Establishes a connection to given multiaddr/s.
#### Arguments
| Name | Description  |
|:-:|:-:|
| address | Peer address for connection |
#### Sample
```console
$ dfmsr net connect
ipfs: Reading from /dev/stdin; send Ctrl-d to stop.
/ip4/192.168.88.106/tcp/64666/p2p/12D3L7AV4YzCg2foDgWqFxqWoSs35JJem7Zo9t75UbQTSzZH1WZh
```
----------------------
### `dfmsr net disconnect`
Destroys a connection to given multiaddr/s.
#### Arguments
| Name | Description  |
|:-:|:-:|
| address | Peer address for disconnection |
#### Sample
```console
$ dfmsr net disconnect /ip4/192.168.88.106/tcp/64666/p2p/12D3L7AV4YzCg2foDgWqFxqWoSs35JJem7Zo9t75UbQTSzZH1WZh
```
----------------------
### `dfmsr net peers`
Lists information about all connected peers.
#### Sample
```console
$ dfmsr net peers
1: /ip4/192.168.88.106/tcp/64666/p2p/12D3L7AV4YzCg2foDgWqFxqWoSs35JJem7Zo9t75UbQTSzZH1WZh
2: /ip4/192.168.88.106/tcp/64667/p2p/12D3L7AV3rhWLxC3jPH5WBsNoheZVfPjSsiUacH2BVudWcvcbC5x
3: /ip4/192.168.88.106/tcp/64668/p2p/12D3L7AVAoogCAQiE9p9cwzCUo1k5yMAhm6sbYZyAqUCet45a8fk
```
----------------------
### `dfmsr net id`
Returns node's identifier.
#### Sample
```console
$ dfmsr net id
ID: 12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
```
----------------------
### `dfmsr net addr`
Returns list of addresses node uses for p2p communications.
#### Sample
```console
$ dfmsr net addrs
/ip4/127.0.0.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip4/192.168.88.106/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip4/192.168.122.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip4/172.17.0.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip4/10.10.1.100/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip4/172.19.0.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip6/::1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
```