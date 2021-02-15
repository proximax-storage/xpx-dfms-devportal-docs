---
id: id
title: Node ID
---

## Requirements

- IDE or text editor
- Have one node

## Example

The simple example of getting node ID.

```go
package main

import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:6366")

    //Get ID
    id, err := client.Network().ID(context.Background())
    if err != nil {
        panic(err)
    }

    //Print ID
    println(id.String())
}
```
