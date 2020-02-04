---
id: flush
title: Flush
sidebar_label: Flush Some Changes
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md)
- Have one active [drive](../../built_in_features/drive/overview.md)
- Have at least one new file or dir on the [drive](../../built_in_features/drive/overview.md)

## Example
We make some changes on the local drive and now want to flush it to remote drive.

``` go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

driveId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

err := client.FS().Flush()
if err != nil{
    panic(err)
}
```