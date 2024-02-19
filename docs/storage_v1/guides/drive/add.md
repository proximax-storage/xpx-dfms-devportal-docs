---
id: add
title: Add
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

## Example

The simple example of adding a new file.

```go
import (
    "context"
    files "github.com/ipfs/go-ipfs-files"

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

    // Add file
    fcid, err := client.FS().Add(
        context.Background(),
        // contract ID
        contractId,
        // a path on the drive
        "/filepath",
        // Converted file
        files.NewBytesFile([]byte("content")),
        //Flush changes
        api.Flush(flush),
    )
    if err != nil {
        panic(err)
    }
    println(fcid.String())
}
```
