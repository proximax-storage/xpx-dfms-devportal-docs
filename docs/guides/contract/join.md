---
id: join
title: Join to Contract
---
## Requirements
- IDE or text editor
- Have one [replicator](../../roles/replicator.md)
- Have one active [drive](../../built_in_features/drive/overview.md)

## Example
A replicator gets invite and wants to join a drive.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

id := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

err := replicatorContract.Accept(req.Context, id)
if err != nil{
    panic(err)
}
```