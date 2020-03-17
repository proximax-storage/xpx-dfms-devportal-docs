---
id: compose
title: Compose Contract
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

## Example

Prepare a new 1000MB [Drive](../../built_in_features/drive/overview.md) for 12 months with 5 replicas, but the [Drive](../../built_in_features/drive/overview.md) can start when 3 [replicators](../../roles/replicator.md) are joined. The reward will be 5000 SM every 1 month. To accept transactions needed 100% to approve.

```go
//Some enviroment
var env cmds.Environment

//New api
cnt, err := APIContractClient(e)
if err != nil {
	return err
}

//New contract
ctr, err := cnt.Compose(
	req.Context,
	uint64(1000),
	1,
	api.MinReplicators(3),
	api.PercentApprovers(100),
	api.SubscriptionPrice(50000),
	api.NumberSubscriptionPeriods(12),
	api.Replicas(5),
	api.PrivateKey(nil),
)
if err != nil {
	return err
}
```
