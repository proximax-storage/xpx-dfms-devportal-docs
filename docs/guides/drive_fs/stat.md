---
id: stat
title: Get Stat
sidebar_label: Get Stat of Some File or Directory
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md)
- Have one active [drive](../../built_in_features/drive/overview.md)
- Have files or dirs on the [drive](../../built_in_features/drive/overview.md)

## Example
The owner can get information about any file or directory.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

driveId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"
path := "/testDir"

info, err = client.FS().Stat(ctx, driveId, path)
if err != nil{
    panic(err)
}
```