---
id: executions
title: SuperContract Executions
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)
- One finished execution

## Example

Client can get all [SC](../../built_in_features/supercontract/overview.md) executions.

```go
import (
    "context"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    // List executions
    hashes, err := client.SuperContract().GetSuperContractExecutionsHashes(context.Background())
    if err != nil {
        panic(err)
    }

    // print the list of executions
    for _, h := range hashes {
        println(h)
    }
}
```
