---
id: rename_move
title: Rename/Move
sidebar_label: Rename/Move Some File or Directory
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md)
- Have one active [drive](../../built_in_features/drive/overview.md)
- Have files or dirs on the [drive](../../built_in_features/drive/overview.md)

## Example
We uploaded file to drive and now want to rename or move it.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

driveId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"
fromPath := "/testfile"
toPath := "/testDir/testfile"

err := client.FS().Move(ctx, driveId, fromPath, toPath)
if err != nil{
    panic(err)
}
```

`Move`  function also has the option `api.Flush(bool)`.

```go
err := client.FS().Move(ctx, driveId, fromPath, toPath, api.Flush(true))
if err != nil{
    panic(err)
}
```