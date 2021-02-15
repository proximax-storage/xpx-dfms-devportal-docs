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
package main

import (
    "context"
    
    files "github.com/ipfs/go-ipfs-files"

    api "github.com/proximax-storage/go-xpx-dfms-api"
    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    drive "github.com/proximax-storage/go-xpx-dfms-drive"
)

func main() {
    // Create a new client API HTTP by given address
    client := apihttp.NewClientAPI("127.0.0.1:6366")
    // or use API,
    // e.g. client := NewClient(root.New(ctx, memory.Open()))

    // ID of some contract
    contractId, err := drive.IDFromString("baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5")
    if err != nil {
        panic(err)
    }

    // Some file represented in bytes
    content := []byte("content of some file")
    file := files.NewBytesFile(content)
    
    // Or some directory. E.g. a way to convert a directory
    // dir := files.NewMapDirectory(map[string]files.Node{
    // // some inner file
    // "file2": files.NewBytesFile([]byte("file2")),
    // // some inner file
    // "childDir": files.NewMapDirectory(map[string]files.Node{}),
    // })
    
    // Add a file or directory
    fcid, err := client.FS().Add(
        context.Background(),
        // contract ID
        contractId,
        // a path on the drive
        "/filepath",
        // Converted file or dir
        file,
        //Flush changes to BC
        api.Flush(false),
    )
    if err != nil {
        panic(err)
    }
    // Print CID of the added file
    println(fcid.String())
}
```
