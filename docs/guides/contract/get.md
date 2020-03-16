---
id: get
title: Get Contract
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

## Example

```go
//Some enviroment
var env cmds.Environment

//New api
cnt, err := APIContractClient(e)
if err != nil {
	return err
}

// ID of some contract
id := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

//Get contract by ID
ctr, err := cnt.Get(context.Background(), id)
if err != nil {
	return err
}
```
