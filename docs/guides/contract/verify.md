---
id: verify
title: Verify Contract
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

## Example

Start verification of storing data by replicators.

```go
import (
    "context"
    "fmt"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    drive "github.com/proximax-storage/go-xpx-dfms-drive"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:6366")

    // ID of some contract
    idStr := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

    id, err := drive.IDFromString(idStr)
    if err != nil {
        panic(err)
    }

    //Verify the contract
    res, err := client.Contract().Verify(context.Background(), id)
    if err != nil {
        panic(err)
    }
    fmt.Println(res)
}
```
