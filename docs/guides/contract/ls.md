---
id: ls
title: List contracts
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one or more [drives](../../built_in_features/drive/overview.md) contract

## Example

List all client contracts where it is an owner or takes participant.

```go
import (
    "context"
    "fmt"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:6366")

    //Show all contracts
    ids, err := client.Contract().List(context.Background())
    if err != nil {
        panic(err)
    }
    for _, id := range ids {
        fmt.Println(id.String())
    }
}
```
