---
id: create_drive
title: Create drive
sidebar_label: Create drive
---

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [owner](../roles/owner.md) node

## Example
Prepare a new 1000MB [drive](../built_in_features/drive.md) for 12 months with 5 replicas, but the [drive](../built_in_features/drive/overview.md) can start when 3 [replicators](../roles/replicator.md) joined. The reward will be 5000 SM every 1 month. To accept transactions needed 100% to approve.

```go
//create driveAccount
driveAccount, _ := client.NewAccount()

//prepare drive
driveTx, err := client.NewPrepareDriveTransaction(
        sdk.NewDeadline(1),     //deadline
        owner.PublicAccount,    //public key of owber
        sdk.Duration(12),       //drive duration (in month)
        sdk.Duration(1),        //billing period (in month)
        sdk.Amount(50),         //billing price (in storage units)
        sdk.StorageSize(1000),  //drive size (in MB)
        5,                      //count of replicas
        3,                      //minimal count of replicas
        100,                    //percent approvers (100 or 66)
    )
//aggregate drive by drive account 
driveTx.ToAggregate(driveAccount.PublicAccount)
```