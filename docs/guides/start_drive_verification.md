---
id: start_drive_verification
title: Start Drive Verification
---

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [owner](../roles/owner.md)
- Have one active [drive](../built_in_features/drive/overview.md)

## Example
```go
startVerificationTx, err := client.NewStartDriveVerificationTransaction(
		sdk.NewDeadline(time.Hour),
		driveAccount.PublicAccount,
    )
startVerificationTx.ToAggregate(holder.PublicAccount)
```