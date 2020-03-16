---
id: verify
title: Verify Contract
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

//Verify the contract
res, err := cnt.Verify(context.Background(), id)
if err != nil {
	return err
}
```
