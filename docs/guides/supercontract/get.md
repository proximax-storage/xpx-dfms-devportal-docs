---
id: get
title: Get SuperContract
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)

At any time you can get info about any [SC](../../built_in_features/supercontract/overview.md).

## Example

```go
//Some enviroment
var env cmds.Environment

//New Supercontract api
sContract, err := APISupercontract(e)
if err != nil {
	return err
}

// ID of some superContract
scID := "baegqajaiaqjcbpxt6l4e3lbvkityq5q673j4v4tcyst34xzxtfkot65a5nmjbjem"

//Get the SC
sCtr, err := sContract.Get(context.Background(), scId)
if err != nil {
	return err
}

//print superContract
fmt.Println(sCtr)
```
