---
id: results
title: SuperContract Results
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)
- One finished execution

## Example

```go
//Some enviroment
var env cmds.Environment

//New Supercontract api
sc, err := APISupercontract(e)
if err != nil {
	return err
}

// ID of some transaction
id := "bafybeifbqukufovlk5oyjujzgev6t7co2ygtfcavcgvj5onph6v2mvwujm"

//Decode id to CID
txId, err := cid.Decode(id)
if err != nil {
	return err
}

//Get the results
scResults, err := sContract.GetResults(context.Background(), txId)
if err != nil {
	return err
}

//print results
for _, r := range scResults {
	println(r)
}
```
