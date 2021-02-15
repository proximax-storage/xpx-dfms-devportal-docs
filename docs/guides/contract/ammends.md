---
id: ammends
title: Ammends Contracts
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

## Example

Create subsctiption on contract changes by the client.

```go
import (
    "context"
    "fmt"
    "io"

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

    //New subscription
    sub, err := client.Contract().Amendments(context.Background(), id)
    if err != nil {
        panic(err)
    }
    defer sub.Close()

    for {
        //Get next contract
        ctr, err := sub.Next(context.Background())
        if err != nil && (err != io.EOF || err != context.Canceled){
            panic(err)
        }

        //Print contract
        fmt.Println(ctr)
    }
}
```
