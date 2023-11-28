---
id: disconnect
title: Disconnect from Node
---

## Requirements

- IDE or text editor
- Have connected nodes

## Example

The simple example of disconection one node from another.

```go
import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    "github.com/proximax-storage/go-xpx-dfms/util"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    addr := "/ip4/54.169.137.143/tcp/64666/p2p/12D3L7AVBSbyCFRvqYZW5UQ9h9Zc8DyfM8RaRzGGtA3oiR9MF66f"

    //Convert to Multiaddress
    maddrs, err := util.AddressToMultiaddress(addr)
    if err != nil {
        panic(err)
    }

    //Disconnect
    err = client.Network().Disconnect(context.Background(), maddrs...)
    if err != nil {
        panic(err)
    }
}
```
