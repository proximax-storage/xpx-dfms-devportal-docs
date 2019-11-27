---
id: create_drive
title: Create drive
---

This guide will help you create a new drive account and prepare drive it.
Drive is just multisig account that has owner. When holder created drive account he need prepare it.

## Requirements
- IDE or text editor
- ProximaX Catapult SDK

## Example
Prepare new 1000MB drive for 12 month with 5 replicas, but drive can start when 3 replicators joined. The reward will be 50 storage units every 1 month. For accept transaction needs 100% approves.

```go
//create owner
owner, _ := client.NewAccount()
//create driveAccount
driveAccount, _ := client.NewAccount()

//prepare drive
driveTx, err := client.NewPrepareDriveTransaction(
        sdk.NewDeadline(1),     //deadline
        owner.PublicAccount,    //public key of onwer
        sdk.Duration(12),       //drive duration (in month)
        sdk.Duration(1),        //billing period (in month)
        sdk.Amount(50),         //billing price (in storage units)
        sdk.StorageSize(1000),  //drive size (in MB)
        5,                      //count of replicas
        3,                      //min count of replicas
        100,                    //percent approvers (100 or 66)
    )
//aggregate drive by drive account 
driveTx.ToAggregate(driveAccount.PublicAccount)
```  