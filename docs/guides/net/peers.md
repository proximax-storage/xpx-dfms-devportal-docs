---
id: peers
title: Get Connected Peers
---

## Requirements

- IDE or text editor
- Have at least one connected node

## Example

```go
//Some enviroment
var env cmds.Environment

//New network api
api, err := APINetwork(env)
if err != nil {
	return err
}

//Get peers
peers, err := api.Peers(context.Background())
if err != nil {
	return err
}

//Print peers
for _, p := range peers {
    println(p.String())
}
```
