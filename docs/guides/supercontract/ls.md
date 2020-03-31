---
id: ls
title: List SuperContracts
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)

At any time you can get a list of a user's [SC](../../built_in_features/supercontract/overview.md).

## Example

```go
//Some enviroment
var env cmds.Environment

//New Supercontract api
sContract, err := APISupercontract(e)
if err != nil {
	return err
}

// ID of some drive
driveId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

//Get the Drive SCs
scList, err := sContract.List(context.Background(), driveId)
if err != nil {
	return err
}

//print the list of SC
for _, sc := range scList {
	println(sc.String())
}
```
