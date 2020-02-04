---
id: get_info
title: Get Information About Contract
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md)
- Have one active [drive](../../built_in_features/drive/overview.md)

## Example
We have [created the drive](create.md) in the previous guide and want to get the information about it.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

id := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

contract, err := clientContract.Get(ctx, id)

if err != nil{
    panic(err)
}
```