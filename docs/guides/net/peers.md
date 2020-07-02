---
id: peers
title: Get Connected Peers
---

## Requirements

- IDE or text editor
- Have at least one connected node

## Example

The simple example of getting connected peers to some node.

```go
import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    // Get peers
    peers, err := client.Network().Peers(context.Background())
    if err != nil {
        panic(err)
    }

    // Print peers
    for _, p := range peers {
        println(p.String())
    }
}
```
