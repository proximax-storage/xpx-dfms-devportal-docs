---
id: executions
title: SuperContract Executions
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)
- One finished execution

You can get all user's [SC](../../built_in_features/supercontract/overview.md) executions.

## Example

```go
//Some enviroment
var env cmds.Environment

//New Supercontract api
sContract, err := APISupercontract(e)
if err != nil {
	return err
}

//List executions
hashes, err := sContract.GetSuperContractExecutionsHash(context.Background())
if err != nil {
	return err
}

//print the list of executions
for _, h := range hashes {
	println(h.String())
}
```
