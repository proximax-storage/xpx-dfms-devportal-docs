---
id: results
title: SuperContract Results
---

## Requirements

- IDE or text editor
- [SuperContract](../../built_in_features/supercontract/overview.md) API
- One [owner](../../roles/owner.md)
- One [Drive](../../built_in_features/drive/overview.md) with executors
- One deployed [SuperContract](../../built_in_features/supercontract/overview.md)
- One finished execution

## Example

If a [SC](../../built_in_features/supercontract/overview.md) function saves results client can get it by transaction ID.

```go
import (
    "context"

    "github.com/ipfs/go-cid"

    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
)

func main() {
    // Create a new client API by given address
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    // ID of some transaction
    txId, err := cid.Decode("bafybeifbqukufovlk5oyjujzgev6t7co2ygtfcavcgvj5onph6v2mvwujm")
    if err != nil {
        panic(err)
    }

    // Get the results
    // Note that results can be empty if SC doesn;t save results
    scResults, err := client.SuperContract().GetResults(context.Background(), txId)
    if err != nil {
        panic(err)
    }

    // print results
    for _, r := range scResults {
        println(r)
    }
}
```
