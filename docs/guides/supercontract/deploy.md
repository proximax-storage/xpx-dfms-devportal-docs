---
id: deploy
title: Deploy SuperContract
---

## Requirements

- IDE or text editor
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- [SuperContract](../../built_in_features/supercontract/overview.md) API

Before we can execute any [SC](../../built_in_features/supercontract/overview.md) it should be deployed. After deploy you will get the SC ID than can be used for execution. Technically we just marked some file as the [SC](../../built_in_features/supercontract/overview.md).

## Example

```go
//Some enviroment
var env cmds.Environment

//New Supercontract api
sContract, err := APISupercontract(e)
if err != nil {
	return err
}

// ID of some contract
contractId := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

//Deploy a new SC
scId, err := sContract.Deploy(context.Background(), contractId, "test.wat")
if err != nil {
	return err
}

//print scId
println(scId.String())
```
