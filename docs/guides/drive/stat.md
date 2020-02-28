---
id: stat
title: Stat of File or Dir
---

## Requirements
- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [drive](../../built_in_features/drive/overview.md) contract
- At least one file on the [drive](../../built_in_features/drive/overview.md)

## Example

```go
//Some enviroment
var env cmds.Environment

//New drive api
drive, err := APIDriveFS(e)
if err != nil {
	return err
}

// ID of some contract
contractId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"
//Flush changes or not
flush := true

fi, err := drive.Stat(context.Background(), contractId, "/dir")
if err != nil {
	return err
}

st, ok := fi.Sys().(*fs.Stat)
if !ok {
	panic()
}
```