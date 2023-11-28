---
id: ls
title: List SuperContracts
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)

## Example

At any time client can get a list of a its [SC](../../built_in_features/supercontract/overview.md)

```go
import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    drive "github.com/proximax-storage/go-xpx-dfms-drive"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    // ID of some contract
    contractID, err := drive.IDFromString("baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5")
    if err != nil {
        panic(err)
    }

    //Get the Drive SCs
    scList, err := client.SuperContract().List(context.Background(), contractID)
    if err != nil {
        panic(err)
    }

    //print the list of SC
    for _, sc := range scList {
        println(sc.String())
    }
}
```
