---
id: apihttp
title: Create API HTTP node
---

## Requirements

- IDE or text editor

## Example

The simple example of creation API and API HTTP node.

```go
package main

import (
	"context"
	
	apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
)

func main() {
	// replicator
	replicatorHTTP := apihttp.NewReplicatorAPI("127.0.0.1:6466")
	// client
	clientHTTP := apihttp.NewClientAPI("127.0.0.1:6366")
}
```
