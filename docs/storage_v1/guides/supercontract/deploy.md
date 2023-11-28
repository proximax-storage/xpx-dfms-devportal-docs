---
id: deploy
title: Deploy SuperContract
---

## Requirements

- IDE or text editor
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- [SuperContract](../../built_in_features/supercontract/overview.md) API

## Example

Before we can execute any [SC](../../built_in_features/supercontract/overview.md) it should be deployed. After deploy client will get the SC ID that can be used for execution. Technically we just marked some file as the [SC](../../built_in_features/supercontract/overview.md).

```go
import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    drive "github.com/proximax-storage/go-xpx-dfms-drive"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    // ID of some contract
    contractId, err := drive.IDFromString("baegqajaiaqjcbpxt6l4e3lbvkityq5q673j4v4tcyst34xzxtfkot65a5nmjbjem")
    if err != nil {
        panic(err)
    }

    //Deploy a new SC
    scId, err := client.SuperContract().Deploy(context.Background(), contractId, "test.wat")
    if err != nil {
        panic(err)
    }

    //print scId
    println(scId.String())
}
```
