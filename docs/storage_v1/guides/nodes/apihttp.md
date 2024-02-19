---
id: apihttp
title: Create API HTTP node
---

## Requirements

- IDE or text editor

## Example

The simple example of creation API HTTP node.

```go
import (
    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
)

func main() {
    replicator := apihttp.NewReplicatorAPI("127.0.0.1:64666")
    // Or
    client := apihttp.NewClientAPI("127.0.0.1:63666")
}
```
