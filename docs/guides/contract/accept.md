---
id: accept
title: Accept Contract
---

## Requirements

- IDE or text editor
- Have one [replicator](../../roles/replicator.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

## Example

Accept some exist contract by by the replicator.

```go
import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    drive "github.com/proximax-storage/go-xpx-dfms-drive"
)

func main() {
    // Replicator a new replicator API by given address
    replicator := apihttp.NewReplicatorAPI("127.0.0.1:64666")

    // ID of some contract
    id, err := drive.IDFromString("baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5")
    if err != nil {
        panic(err)
    }

    err = replicator.Contract().Accept(context.Background(), id)
    if err != nil {
        panic(err)
    }
}
```
