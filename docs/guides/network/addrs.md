---
id: addrs
title: Get a Node Addresses
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md) or [replicator](../../roles/replicator.md)

## Example
Every node has own addresses that use for connection to other ones. So, let get addresses some node.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

addresses, err := node.Network().Addrs(ctx)
if err != nil {
    panic(err)
}
```