---
id: net_lifecycle
title: Guide of connection lifecycle
---

## Requirements

- IDE or text editor
- Have at least two nodes

## Example

The guide shows simple examples of nodes connection lifecycle.

```go
import (
    "context"
    "fmt"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
)

func main() {
    // Replicator a new replicator API by given address
    replicator := apihttp.NewReplicatorAPI("127.0.0.1:64666")

    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    // Get client ID. ID is part of node address
    id, err := client.Network().ID(context.TODO())
    if err != nil {
        panic(err)
    }
    fmt.Println("Client ID: ", id.String())

    // Get client addresses
    addresses, err := client.Network().Addrs(context.TODO())
    if err != nil {
        panic(err)
    }
    fmt.Println("Client addresses:")
    for _, addr := range addresses {
        fmt.Println(addr.String())
    }

    // Any node can conect to another by given addresses
    err = replicator.Network().Connect(context.TODO(), addresses...)
    if err != nil {
        panic(err)
    }

    // Check replicator's connected peers
    peers, err := replicator.Network().Peers(context.TODO())
    if err != nil {
        panic(err)
    }
    fmt.Println("Replicator peers:")
    for _, p := range peers {
        fmt.Println(p.String())
    }

    // Check client's connected peers
    peers, err = client.Network().Peers(context.TODO())
    if err != nil {
        panic(err)
    }
    fmt.Println("Client peers:")
    for _, p := range peers {
        fmt.Println(p.String())
    }

    // Any node can disconnect from another
    // Get replicator's addresses
    repAddrs, err := replicator.Network().Addrs(context.TODO())
    if err != nil {
        panic(err)
    }

    // And disconnect from client
    err = client.Network().Disconnect(context.TODO(), repAddrs...)
    if err != nil {
        panic(err)
    }
}
```
