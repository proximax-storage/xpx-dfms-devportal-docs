---
id: net
title: dfms net
---

## Description
Allows interact with the network.

## Child commands
| Command | Description  |
|:-:|:-:|
| [dfms net connect](#dfms-net-connect) | establishes a connection to given multiaddr/s |
| [dfms net disconnect](#dfms-net-disconnect) | destroy a connection to given multiaddr/s |
| [dfms net peers](#dfms-net-peers) | lists information about all connected peers |
| [dfms net id](#dfms-net-id) | returns node's identifier |
| [dfms net addrs](#dfms-net-addrs) | returns list of addresses node uses for p2p communications |

---------------------
### `dfms net connect`
#### Arguments
| Name | Description  |
|:-:|:-:|
| address | Peer address for connection |
#### Sample
```console
$ dfms net connect
ipfs: Reading from /dev/stdin; send Ctrl-d to stop.
/ip4/192.168.88.106/tcp/64666/p2p/12D3L7AV4YzCg2foDgWqFxqWoSs35JJem7Zo9t75UbQTSzZH1WZh
```
----------------------
### `dfms net disconnect`
#### Arguments
| Name | Description  |
|:-:|:-:|
| address | Peer address for disconnection |
#### Sample
```console
$ dfms net disconnect /ip4/192.168.88.106/tcp/64666/p2p/12D3L7AV4YzCg2foDgWqFxqWoSs35JJem7Zo9t75UbQTSzZH1WZh
```
----------------------
### `dfms net peers`
#### Sample
```console
$ dfms net peers
1: /ip4/192.168.88.106/tcp/64666/p2p/12D3L7AV4YzCg2foDgWqFxqWoSs35JJem7Zo9t75UbQTSzZH1WZh
2: /ip4/192.168.88.106/tcp/64667/p2p/12D3L7AV3rhWLxC3jPH5WBsNoheZVfPjSsiUacH2BVudWcvcbC5x
3: /ip4/192.168.88.106/tcp/64668/p2p/12D3L7AVAoogCAQiE9p9cwzCUo1k5yMAhm6sbYZyAqUCet45a8fk
```
----------------------
### `dfms net id`
#### Sample
```console
$ dfms net id
ID: 12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
```
----------------------
### `dfms net addr`
#### Sample
```
$ dfms net addrs
/ip4/127.0.0.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip4/192.168.88.106/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip4/192.168.122.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip4/172.17.0.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip4/10.10.1.100/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip4/172.19.0.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
/ip6/::1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
```