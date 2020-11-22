---
id: accepted
title: Accepted Contract
---

## Requirements

- IDE or text editor
- Have one [Storage Replicator Node](../../roles/replicator.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

## Example

Listen to accepted contracts by the replicator.

```go
import (
    "context"
    "fmt"
    "io"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
)

func main() {
    // Replicator a new replicator API by given address
    replicator := apihttp.NewReplicatorAPI("127.0.0.1:64666")

    //New subscription
    sub, err := replicator.Contract().Accepted(context.Background())
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
