---
id: ls
title: List
sidebar_label: List Some Directory
---

## Requirements
- IDE or text editor
- Have one active [drive](../../built_in_features/drive/overview.md)
- Have files or dirs on the [drive](../../built_in_features/drive/overview.md)

## Example
We have downloaded some drive to the disk and want to check if it is on the drive.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

driveId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"
path := "/"

infos, err := client.FS().Ls(ctx, driveId, path)
if err != nil{
    panic(err)
}
```