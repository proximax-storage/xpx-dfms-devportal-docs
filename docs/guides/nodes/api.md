---
id: api
title: Create API node
---

## Requirements

- IDE or text editor

## Example

The simple example of creation API node.

```go
package main

import (
    "context"

    "github.com/proximax-storage/go-xpx-dfms/api"
    "github.com/proximax-storage/go-xpx-dfms/config"
    "github.com/proximax-storage/go-xpx-dfms/persistent/memory"
    "github.com/proximax-storage/go-xpx-dfms/root"
)

func main() {
    // New API
	// New options
	rootOpts := []root.Option{
	    // default config
	    root.Config(config.DefaultClient()),
	    // ledger address
	    root.LedgerUrl("127.0.0.1:5000"),
    }

	root, err := root.New(context.TODO(), memory.Open(), rootOpts...)
	if err != nil {
	    panic(err)
	}

	// New client API
	client := api.NewClient(root)
	// Or new replicator API
	replicator := api.NewReplicator(root)
}
```
