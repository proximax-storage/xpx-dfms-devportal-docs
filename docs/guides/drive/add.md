---
id: add
title: Add File or Dir
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [drive](../../built_in_features/drive/overview.md) contract

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

//Add file
fcid, err := drive.Add(context.Background(), contractId, "/filepath", it.Node(), api.Flush(flush))
if err != nil {
	return err
}
```
