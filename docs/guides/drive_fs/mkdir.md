---
id: mkdir
title: Make Directory
sidebar_label: Make a New Directory
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md)
- Have one active [drive](../../built_in_features/drive/overview.md)

## Example
In any moment may need a new directory on the drive, let`s do it.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

driveId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"
path := "/testDir"

err := client.FS().MakeDir(ctx, driveId, path)
if err != nil{
    panic(err)
}
```

`MakeDir` function also has the option `api.Flush(bool)`.

```go
err := client.FS().MakeDir(ctx, driveId, path, api.Flush(true))
if err != nil{
    panic(err)
}
```