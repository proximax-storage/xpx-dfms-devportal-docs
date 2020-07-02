---
id: contract_lifecycle
title: Guide of contract lifecycle
---

## Requirements

- IDE or text editor
- Have one running [owner/client](../../roles/owner.md) node
- Have at least one running [replicator](../../roles/replicator.md) node

## Example

The guides shows possible contract flows. Note that replicator can do everything that can client, but client not.

```go
import (
    "context"
    "fmt"
    "log"
    "sync"
    "time"

    api "github.com/proximax-storage/go-xpx-dfms-api"
    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    "github.com/proximax-storage/go-xpx-dfms/crypto"
)

func main() {
    // Replicator a new replicator API by given address
    replicator := apihttp.NewReplicatorAPI("127.0.0.1:64666")

    // Replicator connected to client (see network guides) and can start listen new invites.
    // Not required, replicator can just accept a contract by ID without subscription.
    go func() {
        // Create a new subscription
        sub, err := replicator.Contract().Invites(context.TODO())
        if err != nil {
            log.Fatal("can't create subscription: ", err)
        }
        defer sub.Close()

        // Listening...
        for {
            // Get an invite
            inv, err := sub.Next(context.TODO())
            if err != nil {
                log.Fatal("can't get invite: ", err)
            }

            // Accept the invite
            err = replicator.Contract().Accept(context.TODO(), inv.Drive)
            if err != nil {
                log.Fatal("can't accept a contract: ", err)
            }
        }
    }()

    // Also, replicator and can subscribe on accepted drives
    go func() {
        // Create a new subscription
        sub, err := replicator.Contract().Accepted(context.TODO())
        if err != nil {
            log.Fatal("can't create subscription: ", err)
        }
        defer sub.Close()

        contractCount := 0
        // Listening...
        for {
            go func() {
                for {
                    contract, err := sub.Next(context.TODO())
                    if err != nil {
                        log.Fatal(err)
                    }
                    if contract != nil {
                        contractCount++
                        fmt.Printf("accepted a new contract:\n %+v \n sum count of acceted contracts: %d", contract, contractCount)
                    }
                }
            }()
        }
    }()

    // Create a new client API by given address
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
        // Optional. The number of SO units that will be dived between replicators at the end of
        // billing period. Default valu equals to driveSize*PayedReplicas
        api.SubscriptionPrice(5000),
        // Optional. The number of billing (subscription) periods
        api.NumberSubscriptionPeriods(12),
        // Optional. The minimal amount of replicators for starting billing (subscription) periods
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

    // Note: if replicator don't listen to new invites just accept by ID
    // err = replicator.Contract().Accept(context.TODO(), contract.Drive)
    // if err != nil {
    //     log.Fatal("can't accept a contract: ", err)
    // }

    // After creation can get info about this drive
    ctr, err := client.Contract().Get(context.TODO(), contract.Drive)
    if err != nil {
        panic(err)
    }
    fmt.Println(ctr)

    // Also, the client can get list of drives where it is owner or takes paticipant
    list, err := client.Contract().List(context.TODO())
    if err != nil {
        panic(err)
    }
    for _, c := range list {
        fmt.Println(c)
    }

    // The client can create subscription on drive changes
    // Create subscription
    subscription, err := replicator.Contract().Amendments(context.TODO(), contract.Drive)
    if err != nil {
        panic(err)
    }

    // Just count updates
    m := sync.Mutex{}
    updatesCount := 0

    // Listening...
    go func() {
        defer subscription.Close()

        _, err := subscription.Next(context.TODO())
        if err != nil {
            log.Fatal(err)
        }

        m.Lock()
        updatesCount++
        fmt.Println("updates count: ", updatesCount)
        m.Unlock()
    }()

    // At any time client or replicator can start drive verification.
    // To get some result would be good add some files
    verifyRes, err := client.Contract().Verify(context.TODO(), contract.Drive)
    if err != nil {
        panic(err)
    }
    fmt.Println(verifyRes)

    // Client can finish drive at any time if it want
    err = client.Contract().Finish(context.TODO(), contract.Drive)
    if err != nil {
        panic(err)
    }
}
```
