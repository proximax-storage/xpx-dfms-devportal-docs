---
id: exec
title: Execute SuperContract
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)

## Example

Let's imagine that there is some func that add to 100 some number.

```go
//Some enviroment
var env cmds.Environment

//New Supercontract api
sc, err := APISupercontract(e)
if err != nil {
	return err
}

// ID of some superContract
scID := "baegqajaiaqjcbpxt6l4e3lbvkityq5q673j4v4tcyst34xzxtfkot65a5nmjbjem"

//Create a new func
fn := sc.Function{
	Name:       "add",
	Parameters: []int{10}, //number that will be added
}

//Exec a new SC
txId, err := sContract.Execute(context.Background(), scId, 1000, fn)
if err != nil {
	return err
}

//print txId
println(txId.String())
```
