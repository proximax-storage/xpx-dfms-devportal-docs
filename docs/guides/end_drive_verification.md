---
id: end_drive_verification
title: End Drive Verification
---

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [owner](../roles/owner.md)
- Have one active [drive](../built_in_features/drive/overview.md)

## Example
```go
endVerificationTx, err := client.NewEndDriveVerificationTransaction(
		sdk.NewDeadline(time.Hour),
		[]*sdk.FailureVerification{
			&sdk.FailureVerification{
				Replicator: failedReplicator.PublicAccount, // the replicator which failed the verification
				BlochHash:  &sdk.Hash{}, // hash of the block on which the replicator failed the verification
			},
		},
	)
endVerificationTx.ToAggregate(driveAccount.PublicAccount)
```