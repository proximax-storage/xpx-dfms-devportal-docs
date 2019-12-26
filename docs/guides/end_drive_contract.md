---
id: end_drive
title: End Drive Contract
sidebar_label: End Drive
---

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [owner](../roles/owner.md)
- Have one active [drive](../built_in_features/drive/overview.md)

## Example

### End drive by the owner
The [owner](../roles/owner.md) decides to terminate the drive.
```go
endDriveTx, err := client.NewEndDriveTransaction(
		sdk.NewDeadline(time.Hour),
		driveAccount.PublicAccount,
	)
endDriveTx.ToAggregate(owner.PublicAccount)
```
### End drive by replicators
[Replicators](../roles/replicator.md) decide to terminate the drive.
```go
endDriveTx, err := client.NewEndDriveTransaction(
		sdk.NewDeadline(time.Hour),
		driveAccount.PublicAccount,
	)
endDriveTx.ToAggregate(driveAccount.PublicAccount)
```