---
id: disconnect
title: Disconnect from Some Node
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md) or [replicator](../../roles/replicator.md)

## Example
Let's imagine that we [connected](connect.md) to some node and now want to disconnect from it.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

err := node.Network().Disconnect(ctx, addresses...)
if err != nil {
    panic(err)
}
```