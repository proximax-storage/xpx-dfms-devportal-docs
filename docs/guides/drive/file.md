---
id: file
title: Get File by CID
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract
- At least one file on the remote [Drive](../../built_in_features/drive/overview.md)

## Example

The simple example of getting a file from drive by cid.

```go
package main

import (
    "context"
    "io/ioutil"

    files "github.com/ipfs/go-ipfs-files"
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

    fileCid, err := cid.Decode("bafybeihnpekq72dk75zpkhlgoh6lsjlxcygu4vrtclaqartyxqqqys5c7m")
    if err != nil {
        panic(err)
    }

    // Get file by CID
    file, err := drive.File(req.Context, contractId, fileCid)
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
