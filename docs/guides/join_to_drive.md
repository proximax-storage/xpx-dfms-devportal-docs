---
id: join_to_drive
title: Join to Drive
sidebar_label: Join to Drive
---

This guide will help you join to existing drive.

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [replicator](../roles/replicator.md)
- Have one active [drive](../built_in_features/drive/overview.md)

## Example
A user gets invite and wants to join a drive.

```go
joinTx, _ := client.NewJoinToDriveTransaction(
    sdk.NewDeadline(time.Hour),
    driveAccount.PublicAccount,
)
joinTx.ToAggregate(replicator.PublicAccount)
```