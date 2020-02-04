---
id: remove
title: Remove
sidebar_label: Remove Some File or Directory
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md)
- Have one active [drive](../../built_in_features/drive/overview.md)
- Have files or dirs on the [drive](../../built_in_features/drive/overview.md)

## Example
Suppose the file is no longer needed, so we can remove it.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

driveId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"
path := "/testfile"

err := drive.Remove(req.Context, driveId, path)
if err != nil{
    panic(err)
}
```

`Remove` function also has the option `api.Flush(bool)`.

```go
err := drive.Remove(req.Context, driveId, path, api.Flush(true))
if err != nil{
    panic(err)
}
```