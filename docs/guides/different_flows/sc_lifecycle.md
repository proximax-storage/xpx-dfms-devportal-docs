---
id: sc_lifecycle
title: Guide of SuperContract lifecycle
---

## Requirements

- IDE or text editor
- Have one running [owner](../../roles/owner.md) node
- Have at least one running [replicator](../../roles/replicator.md) node

## Example

The guide shows simple examples that can be used during SuperContract lifecycle.

```go
import (
    "context"
    "fmt"
    "time"

    files "github.com/ipfs/go-ipfs-files"
    api "github.com/proximax-storage/go-xpx-dfms-api"
    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    "github.com/proximax-storage/go-xpx-dfms-drive/supercontract"
)

func main() {
    // Create a new client API by given addres
    client := apihttp.NewClientAPI("127.0.0.1:63666")


    //Compose a new contract
    contract, err := client.Contract().Compose(
        context.TODO(),
        // Required. size of drive
        uint64(1000),
        // Required. Duration of one billing (subscription) period when replicators will get rewards
        time.Hour*24*30,
        // Optional. The number of SO units that will be dived between replicators at the end of
        // billing period. Default value equals to driveSize*PayedReplicas
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
    if err != nil {
        panic(err)
    }

    // Add a SuperContract file
    // Note that this file should be a real .wasm file
    testFile := []byte("code")
    scPath := "/scFile"
    // Add the file to the created drive
    fileHash, err := client.FS().Add(
        context.TODO(),
        // a drive to which the file will be added
        contract.Drive,
        // file scPath on the drive
        scPath,
        // file converted to needed type
        files.NewBytesFile(testFile),
        // optional, without flush changes will be applied only local
        api.Flush(true),
    )
    if err != nil {
        panic(err)
    }
    println(fileHash.String())

    // After success adding the SC file a new SC can be deployed
    // Note that after the file was deployed it can't be removed before deactivation
    scID, err := client.SuperContract().Deploy(context.TODO(), contract.Drive, scPath)
    if err != nil {
        panic(err)
    }

    // The client can get list of active SC by contract ID
    list, err := client.SuperContract().List(context.TODO(), contract.Drive)
    if err != nil {
        panic(err)
    }
    fmt.Println("Client's SC:")
    for _, sc := range list {
        fmt.Println(sc.String())
    }

    // Also, the client can get SC info by its ID
    scInfo, err := client.SuperContract().Get(context.TODO(), scID)
    if err != nil {
        panic(err)
    }
    fmt.Println(scInfo)

    // To start execution of the new SC should define function that will be executing
    // Name of function should be the same as in *.rs file from which was build the SC
    fn := supercontract.Function{
        // Function name
        Name:       "Test",
        // Function parameters if need
        // Note that now it can be only decimal numbers
        Parameters: nil,
    }

    // Start SC execution
    trxID, err := client.SuperContract().Execute(
        context.TODO(),
        // ID of SuperContract
        scID,
        // GAS that allocated to execution. For more info see the SuperContract item in GettingStart docs
        100,
        // Called function
        fn)
    if err != nil {
        panic(err)
    }

    // At any time the client can get hashes of all SC executions
    execHashes, err := client.SuperContract().GetSuperContractExecutionsHashes(context.TODO())
    if err != nil {
        panic(err)
    }
    fmt.Println("SuperContract execution hashes:")
    for _, h := range execHashes {
        fmt.Println(h.String())
    }

    // Get results of SC execution
    // Note that it can be empty if SC doesn't save any results
    results, err := client.SuperContract().GetResults(context.TODO(), trxID)
    if err != nil {
        panic(err)
    }
    fmt.Println("SuperContract results:")
    for _, r := range results {
        fmt.Println(r)
    }

    // When SC is not need anymore it can be deactivated
    // and then the SC file can be deleted
    err = client.SuperContract().Deactivate(context.TODO(), scID)
    if err != nil {
        panic(err)
    }
}
```
