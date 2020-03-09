---
id: accept
title: Accept Contract
---

## Requirements

- IDE or text editor
- Have one [replicator](../../roles/replicator.md) node
- Have one [drive](../../built_in_features/drive/overview.md) contract

## Example

```go
//Some enviroment
var env cmds.Environment

//New api
cnt, err := APIContractReplicator(e)
if err != nil {
	return err
}

// ID of some contract
id := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

id, err := drive.IDFromString(id)
if err != nil {
	return err
}

err = cnt.Accept(context.Background(), id)
if err != nil {
	return err
}
```
