---
id: exec
title: Execute SuperContract
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)

## Example

Let's imagine that there is some [SC](../../built_in_features/supercontract/overview.md) with func that add to 100 some number.

```go
import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    "github.com/proximax-storage/go-xpx-dfms-drive/supercontract"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    // ID of some superContract
    scID, err := supercontract.IDFromString("baegqajaiaqjcbpxt6l4e3lbvkityq5q673j4v4tcyst34xzxtfkot65a5nmjbjem")
    if err != nil {
        panic(err)
    }

    // Called func
    fn := supercontract.Function{
        Name:       "add",
        Parameters: []int64{10}, //arguments for func
    }

    //Exec a new SC
    txId, err := client.SuperContract().Execute(context.Background(), scID, 1000, fn)
    if err != nil {
        panic(err)
    }

    //print txId
    println(txId.String())
}
```
