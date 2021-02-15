---
id: rm
title: Remove
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract
- At least one file on the [Drive](../../built_in_features/drive/overview.md)

## Example

The simple example of removing a file.

```go
package main

import (
    "context"

    api "github.com/proximax-storage/go-xpx-dfms-api"
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

    // Remove a file or directory
    err = client.FS().Remove(
        context.Background(),
        // contract ID
        contractId,
        // a path of a file or directory for removing
        "/dir",
        // Flush changes
        api.Flush(false),
    )
    if err != nil {
        panic(err)
    }
}
```
