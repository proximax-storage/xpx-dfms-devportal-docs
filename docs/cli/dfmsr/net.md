---
id: net
title: dfmsr net
---

**WARNING**: The API is not stable yet and is subject to change.

## Description

It manages networking related commands.

## Child commands

| Command                                         | Description                      |
| :---------------------------------------------- | :------------------------------- |
| [`dfmsr net connect`](#dfmsr-net-connect)       | open connection to given address |
| [`dfmsr net disconnect`](#dfmsr-net-disconnect) | disconnect from given address    |
| [`dfmsr net peers`](#dfmsr-net-peers)           | show all connected peers         |
| [`dfmsr net id`](#dfmsr-net-id)                 | Show identity                    |
| [`dfmsr net addrs`](#dfmsr-net-addrs)           | Show all p2p addresses           |

---

### `dfmsr net connect`

Connects to given set of peers. Accepts only Multiadresses in the form of: \
/ip4/54.169.137.143/tcp/64666/p2p/12D3L7AVBSbyCFRvqYZW5UQ9h9Zc8DyfM8RaRzGGtA3oiR9MF66f

#### Arguments

| Name        | Description                 |
| :---------- | :-------------------------- |
| **address** | Peer address for connection |

#### Examples

- _Connect to a node:_
  
  ```shell
  $ dfmsr net connect /ip4/54.169.137.143/tcp/64666/p2p/12D3L7AVBSbyCFRvqYZW5UQ9h9Zc8DyfM8RaRzGGtA3oiR9MF66f
  ```

- _Connect to a node using stdin:_
  
  ```shell
  $ dfmsr net connect
  ipfs: Reading from /dev/stdin; send Ctrl-d to stop.
  /ip4/54.169.137.143/tcp/64666/p2p/12D3L7AVBSbyCFRvqYZW5UQ9h9Zc8DyfM8RaRzGGtA3oiR9MF66f
  ```

---

### `dfmsr net disconnect`

Drops connections to given set of addresses. Accepts only Multiadresses in the form of: \
/ip4/54.169.137.143/tcp/64666/p2p/12D3L7AVBSbyCFRvqYZW5UQ9h9Zc8DyfM8RaRzGGtA3oiR9MF66f

#### Arguments

| Name        | Description                    |
| :---------- | :----------------------------- |
| **address** | Peer address for disconnection |

#### Examples

- _Disconnect from a node:_

  ```shell
  $ dfmsr net disconnect /ip4/54.169.137.143/tcp/64666/p2p/12D3L7AVBSbyCFRvqYZW5UQ9h9Zc8DyfM8RaRzGGtA3oiR9MF66f
  ```

---

### `dfmsr net peers`

Lists Multiadresses network have connection to.

#### Examples

- _Lists connected nodes:_

  ```shell
  $ dfmsr net peers
  1: /ip4/192.168.88.106/tcp/64666/p2p/12D3L7AV4YzCg2foDgWqFxqWoSs35JJem7Zo9t75UbQTSzZH1WZh
  2: /ip4/192.168.88.106/tcp/64667/p2p/12D3L7AV3rhWLxC3jPH5WBsNoheZVfPjSsiUacH2BVudWcvcbC5x
  3: /ip4/192.168.88.106/tcp/64668/p2p/12D3L7AVAoogCAQiE9p9cwzCUo1k5yMAhm6sbYZyAqUCet45a8fk
  ```

---

### `dfmsr net id`

Prints network identification or peer identity of the current node.

#### Examples

- _Get the node ID:_
  
  ```shell
  $ dfmsr net id
  ID: 12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
  ```

---

### `dfmsr net addrs`

Prints all multiaddresses current node is listen to and dials from.

#### Examples

- _Show all p2p node's addresses:_

  ```shell
  $ dfmsr net addrs
  /ip4/127.0.0.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
  /ip4/192.168.88.106/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
  /ip4/192.168.122.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
  /ip4/172.17.0.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
  /ip4/10.10.1.100/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
  /ip4/172.19.0.1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
  /ip6/::1/tcp/63666/p2p/12D3L7AUwnPXj7odaWGzWcWwWD1mGrB5d5yr6zLrimHcyiZLVWcH
  ```
  