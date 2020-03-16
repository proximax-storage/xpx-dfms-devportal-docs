---
id: cp
title: Copy File or Dir
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract
- At least one file on the [Drive](../../built_in_features/drive/overview.md)

## Example

```go
//Some enviroment
var env cmds.Environment

//New Drive api
drive, err := APIDriveFS(e)
if err != nil {
	return err
}

// ID of some contract
contractId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"
//Flush changes or not
flush := true

//Copy a file
err := drive.Copy(context.Background(), contractId, "/file", "/copy_file", api.Flush(flush))
if err != nil {
	return err
}
```
