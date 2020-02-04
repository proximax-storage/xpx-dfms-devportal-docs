---
id: id
title: Get Node ID
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md) or [replicator](../../roles/replicator.md)

## Example
We have a node and want to get it id.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

err := node.Network().ID(ctx)
if err != nil {
    panic(err)
}
```