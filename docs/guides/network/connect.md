---
id: connect
title: Connect to Other Nodes
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md) or [replicator](../../roles/replicator.md)

## Example
Let's imagine that we now know the addresses (see [get addresses](addrs.md)) of some node and want to connect to it.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

err := node.Network().Connect(ctx, addresses...)
if err != nil {
    panic(err)
}
```