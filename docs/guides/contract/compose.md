---
id: compose
title: Compose Contract
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node

## Example

Prepare a new 1000MB [Drive](../../built_in_features/drive/overview.md) for 12 months with 5 replicas, but the [Drive](../../built_in_features/drive/overview.md) can start when 3 [replicators](../../roles/replicator.md) are joined. The reward will be 5000 SM every 1 month. To accept transactions needed 66% to approve.

```go
import (
    "context"
    "fmt"
    "time"

    api "github.com/proximax-storage/go-xpx-dfms-api"
    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    "github.com/proximax-storage/go-xpx-dfms/crypto"
)

func main() {
    // Create a new client API by given addres
    client := apihttp.NewClientAPI("127.0.0.1:63666")

    //Not required. Generate your own private key if you want
    private, _, err := crypto.GenerateEd25519CatapultKey()
    if err != nil {
        panic(err)
    }

    //Compose a new contract
    contract, err := client.Contract().Compose(
        context.TODO(),
        // Required. size of drive
        uint64(1000),
        // Required. Duration of one billing (subscription) period when replicators will get rewards
        time.Hour*24*30,
        // Optional. Genarated private key that will use for drive
        api.PrivateKey(private),
        // Optional. The namber of SO units that will be dived between replicators at the end of
        // billing period. Default valu equals to driveSize*PayedReplicas
        api.SubscriptionPrice(5000),
        // Optional. The number of billing (subscripion) periods
        api.NumberSubscriptionPeriods(12),
        // Optional. The minimal amount of replicators for starting billing (subscripion) periods
        // Default value 3
        api.MinReplicators(3),
        // Optional. The count of wanted (and payed) replicas
        // Default 3
        api.Replicas(5),
        // Optional. The percent for approving any transaction sent by contract account
        // Default 66
        api.PercentApprovers(66),
    )
    //Blocked till contract will have been composed or will have got an error
    if err != nil {
        panic(err)
    }
    fmt.Println(contract)
}
```
