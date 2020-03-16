---
id: deploy
title: Deploy SuperContract
---

## Requirements

- IDE or text editor
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- [SuperContract](../../built_in_features/supercontract/overview.md) API

## Example

```go
//Some enviroment
var env cmds.Environment

//New Supercontract api
sc, err := APISupercontract(e)
if err != nil {
	return err
}

// ID of some contract
contractId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

//Deploy a new SC
scId, err := sc.Deploy(context.Background(), contractId, "test.wat")
if err != nil {
	return err
}

//print scId
println(scId.String())
```
