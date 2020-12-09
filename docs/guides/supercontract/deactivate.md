---
id: deactivate
title: Deactivate SuperContract
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)

## Example

When client decides that it doesn't need some [SC](../../built_in_features/supercontract/overview.md) it can deactivate it by ID. Note that client cannot delete a [SC](../../built_in_features/supercontract/overview.md) till it is not deactivated.

```go
import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    "github.com/proximax-storage/go-xpx-dfms-drive/supercontract"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:6366")

    // ID of some superContract
    scID, err := supercontract.IDFromString("baegqajaiaqjcbpxt6l4e3lbvkityq5q673j4v4tcyst34xzxtfkot65a5nmjbjem")
    if err != nil {
        panic(err)
    }

    //Deactivate a SC
    err = client.SuperContract().Deactivate(context.Background(), scID)
    if err != nil {
        panic(err)
    }
}
```
