---
id: create
title: Create a New Contract
---

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [owner](../../roles/owner.md) node

## Example
Prepare a new 1000MB [drive](../../built_in_features/drive/overview.md) for 12 months with 5 replicas, but the [drive](../../built_in_features/drive/overview.md) can start when 3 [replicators](../../roles/replicator.md) joined. The reward will be 5000 SM every 1 month. To accept transactions needed 100% to approve.

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

contract, err := clientContract.Contract().Compose(
                ctx,
                1000,                     //drive size (in MB)
                12,                       //drive duration (in month)
                api.MinReplicators(3),    //minimal count of replicas
                api.PercentApprovers(66), //percent approvers (100 or 66)
                api.BillingPrice(5000),   //billing price (in storage units)
                api.BillingPeriod(1),     //billing period (in month)
                api.Replicas(5),          //count of replicas
            )

if err != nil{
    panic(err)
}
```