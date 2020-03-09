---
id: get
title: Get File or Dir
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [drive](../../built_in_features/drive/overview.md) contract
- At least one file on the remote [drive](../../built_in_features/drive/overview.md)

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

//Get file
file, err := drive.Get(context.Background(), contractId, "/filepath", api.Flush(flush))
if err != nil {
	return err
}
```
