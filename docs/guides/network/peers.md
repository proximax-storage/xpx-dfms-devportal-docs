---
id: peers
title: Get Connected Nodes
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md) or [replicator](../../roles/replicator.md)

## Example
We are connected to the new node and now we want to check all the connected nodes to which we are connected.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

peersInfo, err := client.Network().Peers(ctx)
if err != nil {
    panic(err)
}
```