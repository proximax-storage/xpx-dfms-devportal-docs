---
id: add
title: Upload
sidebar_label: Upload Some File or Directory
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md)
- Have one active [drive](../../built_in_features/drive/overview.md)

## Example
We [created the drive](../contract/create.md) and now can upload a file to it.

``` go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

driveId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"
path := "/"

cid, err := client.FS().Add(ctx, driveId, path, files.NewBytesFile(content))
if err != nil{
    panic(err)
}
```

`Add` function also has the option `api.Flush(bool)`.

```go
cid, err := client.FS().Add(ctx, driveId, path, files.NewBytesFile(content), api.Flush(true))
if err != nil{
    panic(err)
}
```