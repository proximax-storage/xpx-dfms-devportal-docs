---
id: deactivate
title: Deactivate SuperContract
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)

When you decide that you don't need some [SC](../../built_in_features/supercontract/overview.md) you can deactivate it by ID. Note that you cannot delete a [SC](../../built_in_features/supercontract/overview.md) till it is not deactivated.

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

//Deactivate a SC
err = sContract.Deactivate(context.Background(), scId)
if err != nil {
	return err
}
```
