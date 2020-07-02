---
id: cp
title: Copy File or Dir
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract
- At least one file on the [Drive](../../built_in_features/drive/overview.md)

## Example

The simple example of copy an exist file.

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

    // Copy the file
    err = client.FS().Copy(
        context.Background(),
        // a file path
        contractId, "/file",
        // destination path
        "/copy_file",
        // Flush changes
        api.Flush(true),
    )
    if err != nil {
        panic(err)
    }
}
```
