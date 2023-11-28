---
id: addrs
title: Get Node Addresses
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) or [Storage Replicator Node](../../roles/replicator.md) node

## Example

The simple example of getting adresses of some node.

```go
import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    //Get addresses
    addrs, err := client.Network().Addrs(context.Background())
    if err != nil {
        panic(err)
    }
    //Print addresses
    for _, addr := range addrs {
        println(addr.String())
    }
}
```
