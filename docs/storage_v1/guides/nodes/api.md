---
id: api
title: Create API node
---

## Requirements

- IDE or text editor

## Example

The simple example of creation API node.

```go
import (
    "context"

    "github.com/proximax-storage/go-xpx-dfms/api"
    "github.com/proximax-storage/go-xpx-dfms/config"
    "github.com/proximax-storage/go-xpx-dfms/persistent/memory"
    "github.com/proximax-storage/go-xpx-dfms/root"
)

func main() {
    cfg := config.DefaultClient()

    rootOpts := []root.Option{
        root.Config(cfg),
        root.LedgerUrl(""),
    }

    newRoot, err := root.New(context.TODO(), memory.Open(), rootOpts...)
    if err != nil {
        return
    }

    client := api.NewClient(newRoot)
    // or
    replicator := api.NewReplicator(newRoot)
}
```
