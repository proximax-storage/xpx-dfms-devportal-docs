---
id: disconnect
title: Disconnect from Node
---

## Requirements

- IDE or text editor
- Have connected nodes

## Example

```go
//Some enviroment
var env cmds.Environment

//New network api
api, err := APINetwork(env)
if err != nil {
	return err
}

addr := "/ip4/54.169.137.143/tcp/64666/p2p/12D3L7AVBSbyCFRvqYZW5UQ9h9Zc8DyfM8RaRzGGtA3oiR9MF66f"

//Convert to Multiaddress
maddrs, err := util.AddressToMultiaddress(addr)
if err != nil {
	return err
}

//Disconnect
err := api.Disconnect(context.Background(), maddrs...)
if err != nil {
	return err
}
```
