---
id: id
title: Node ID
---

## Requirements
- IDE or text editor
- Have one node

## Example

```go
//Some enviroment
var env cmds.Environment

//New network api
api, err := APINetwork(env)
if err != nil {
	return err
}

//Get ID
id, err := api.ID(context.Background())
if err != nil {
	return err
}

//Print ID
println(id.String())
```