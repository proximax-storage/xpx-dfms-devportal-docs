---
id: stat
title: Stat
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract
- At least one file on the [Drive](../../built_in_features/drive/overview.md)

## Example

The simple example of getting stat of some file on the drive.

```go
package main

import (
    "context"
    "fmt"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    drive "github.com/proximax-storage/go-xpx-dfms-drive"
    "github.com/proximax-storage/go-xpx-dfms/drive/fs"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:6366")

    // ID of some contract
    idStr := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

    contractId, err := drive.IDFromString(idStr)
    if err != nil {
        panic(err)
    }

    // Get stat of a file or directory
    fi, err := client.FS().Stat(context.Background(), contractId, "/dir")
    if err != nil {
        panic(err)
    }

    st, ok := fi.Sys().(*fs.Stat)
    if !ok {
        panic(err)
    }
    fmt.Println(st)
}
```
