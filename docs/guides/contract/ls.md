---
id: ls
title: List contracts
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one or more [drives](../../built_in_features/drive/overview.md) contract

## Example

```go
//Some enviroment
var env cmds.Environment

//New api
cnt, err := APIContractClient(e)
if err != nil {
	return err
}

//Show all contracts
ids, err := cnt.List(context.Background())
if err != nil {
	return err
}
```
