---
id: file_lifecycle
title: Guide of file lifecycle
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have at least one running [Storage Replicator Node](../../roles/replicator.md) node

## Example

The guides shows possible file system flow: add, move/rename, copy, get, remove, make directory and flush.

```go
import (
    "context"
    "fmt"
    "io/ioutil"
    "time"

    files "github.com/ipfs/go-ipfs-files"

    api "github.com/proximax-storage/go-xpx-dfms-api"
    apihttp "github.com/proximax-storage/go-xpx-dfms-api-http"
    "github.com/proximax-storage/go-xpx-dfms/crypto"
)

func main() {
    // Create a new client API by given addres
    client := apihttp.NewClientAPI("127.0.0.1:6366")

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

    // Add some file
    testFile := []byte("content of some file")
    // Add file to the created drive. In success case returns hash of this file.
    fileHash, err := client.FS().Add(
        context.TODO(),
        // a drive to which the file will be added
        contract.Drive,
        // file path on the drive
        "/testFile",
        // file converted to needed type
        files.NewBytesFile(testFile),
        // optional, without flush changes will be applied only local
        api.Flush(true),
    )
    if err != nil {
        panic(err)
    }
    println(fileHash.String())

    // Move or rename the file. According to Linux philosophy, this the same actions
    err = client.FS().Move(context.TODO(), contract.Drive, "/testFile", "/renamedFile")
    if err != nil {
        panic(err)
    }

    // Copy the file to another folder
    // Create new folder
    err = client.FS().MakeDir(context.TODO(), contract.Drive, "helpDir")
    if err != nil {
        panic(err)
    }

    // Than make a file copy
    err = client.FS().Copy(context.TODO(), contract.Drive, "/renamedFile", "/helpDir/fileCopy")
    if err != nil {
        panic(err)
    }

    // Get the file info by its path
    stat, err := client.FS().Stat(context.TODO(), contract.Drive, "/helpDir/fileCopy")
    if err != nil {
        panic(err)
    }
    fmt.Println(stat.Name())

    // Get a list of files in the root
    list, err := client.FS().Ls(context.TODO(), contract.Drive, "/")
    if err != nil {
        panic(err)
    }
    for _, l := range list {
        fmt.Println(l.Name())
    }

    // Publishes changes to blockchain and replicators
    // In 7.0.2 and lowest vesions doen't block till changes will have been replicated
    err = client.FS().Flush(context.TODO(), contract.Drive)
    if err != nil {
        panic(err)
    }

    // Remove file only local, replicators still saving it and client can download this one
    err = client.FS().Remove(context.TODO(), contract.Drive, "/renamedFile", api.Local(true))
    if err != nil {
        panic(err)
    }

    // Download the file
    file, err := client.FS().Get(context.TODO(), contract.Drive, "/renamedFile")
    if err != nil {
        panic(err)
    }

    // Convert the downloaded file to byte array
    data, err := ioutil.ReadAll(files.ToFile(file))
    fmt.Println(data)

    // Remove file locally and remotely. Replicators will not save this file anymore
    err = client.FS().Remove(context.TODO(), contract.Drive, "/helpDir/fileCopy")
    if err != nil {
        panic(err)
    }
}
```
