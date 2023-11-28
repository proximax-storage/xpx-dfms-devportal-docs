---
id: invites
title: Contract Invites
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

## Example

Get invites to contract by a replicator.

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
    sub, err := replicator.Contract().Invites(context.TODO())
    if err != nil {
        panic(err)
    }
    defer sub.Close()

    for {
        //Get next invite
        drvInvite, err := sub.Next(context.TODO())
        if err != nil && (err != io.EOF || err != context.Canceled) {
            panic(err)
        }

        //Print Drive contract
        fmt.Println(drvInvite)
    }
}
```
