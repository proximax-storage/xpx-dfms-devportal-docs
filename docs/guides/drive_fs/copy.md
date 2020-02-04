---
id: copy
title: Copy
sidebar_label: Copy Some File or Directory
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md)
- Have one active [drive](../../built_in_features/drive/overview.md)
- Have at least one file or dir on the [drive](../../built_in_features/drive/overview.md)

## Example
We need to copy some file on the drive.

``` go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

driveId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"
fromPath := "/testFile"
toPath := "/copyFile"

err := client.FS().Copy(ctx, driveId, fromPath, toPath)
if err != nil{
    panic(err)
}
```

`Copy` function also has the option `api.Flush(bool)`.

```go
err := client.FS().Copy(ctx, driveId, fromPath, toPath, api.Flush(true))
if err != nil{
    panic(err)
}
```