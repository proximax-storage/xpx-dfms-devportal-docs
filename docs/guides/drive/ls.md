---
id: ls
title: List
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract
- At least one file on the [Drive](../../built_in_features/drive/overview.md)

## Example

The simple example of getting a list of client drives.

```go
package main

import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    drive "github.com/proximax-storage/go-xpx-dfms-drive"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:6366")
    // or use API,
    // e.g. client := NewClient(root.New(ctx, memory.Open()))

    // ID of some contract
    contractId, err := drive.IDFromString("baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5")
    if err != nil {
        panic(err)
    }

    // List path
    infos, err := client.FS().Ls(context.Background(), contractId, "/path")
    if err != nil {
        panic(err)
    }
    for _, i := range infos {
        println(i.Name())
    }
}
```
