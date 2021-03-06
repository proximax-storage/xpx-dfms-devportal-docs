---
id: mkdir
title: Make Dir
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

## Example

The simple example of creating a new dir.

```go
import (
    "context"

    api "github.com/proximax-storage/go-xpx-dfms-api"
    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    drive "github.com/proximax-storage/go-xpx-dfms-drive"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    // ID of some contract
    idStr := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

    contractId, err := drive.IDFromString(idStr)
    if err != nil {
        panic(err)
    }

    //List path
    err = client.FS().MakeDir(
        context.Background(),
        // ID of a contract
        contractId,
        // a path of a new dir
        "/dir",
        //Flush changes
        api.Flush(true),
    )
    if err != nil {
        panic(err)
    }
}
```
