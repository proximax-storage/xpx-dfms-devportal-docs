---
id: get
title: Download
sidebar_label: Download Some File or Directory
---

## Requirements
- IDE or text editor
- Have one active [drive](../../built_in_features/drive/overview.md)
- Have files or dirs on the [drive](../../built_in_features/drive/overview.md)

## Example
We need to download some file from the remote drive.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

driveId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"
path := "/"

file, err := client.FS().Get(ctx, driveId, path)
if err != nil{
    panic(err)
}
```