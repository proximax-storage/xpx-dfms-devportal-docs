---
id: addrs
title: Get Node Addresses
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) or [replicator](../../roles/replicator.md) node

## Example

```go
//Some enviroment
var env cmds.Environment

//New network api
api, err := APINetwork(env)
if err != nil {
	return err
}

//Get addresses
addrs, err := api.Addrs(context.Background())
if err != nil {
	return err
}

//Print addresses
for _, addr := range addrs {
    println(addr.String())
}
```
