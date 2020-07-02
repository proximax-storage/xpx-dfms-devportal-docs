---
id: get
title: Get Contract
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

## Example

Get some exist contract by the client.

```go
import (
    "context"
    "fmt"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    drive "github.com/proximax-storage/go-xpx-dfms-drive"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    // ID of some contract
    idStr := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

    id, err := drive.IDFromString(idStr)
    if err != nil {
        panic(err)
    }

    // Get contract by ID
    ctr, err := client.Contract().Get(context.Background(), id)
    if err != nil {
        panic(err)
    }
    fmt.Println(ctr)
}
```
