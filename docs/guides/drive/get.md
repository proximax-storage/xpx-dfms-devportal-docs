---
id: get
title: Get File or Dir
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract
- At least one file on the remote [Drive](../../built_in_features/drive/overview.md)

## Example

The simple example of getting a file from drive.

```go
import (
    "context"
    "io/ioutil"

    files "github.com/ipfs/go-ipfs-files"
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

    // Get file
    file, err := client.FS().Get(
        context.Background(),
        // contract ID
        contractId,
        // a file path on the drive
        "/filepath",
    )
    if err != nil {
        panic(err)
    }

    data, err := ioutil.ReadAll(files.ToFile(file))
    if err != nil {
        panic(err)
    }
    println(string(data))
}
```
