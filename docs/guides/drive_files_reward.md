---
id: drive_files_reward
title: Drive Files Reward
---

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [owner](../roles/owner.md)
- Have one active [drive](../built_in_features/drive/overview.md)

## Example

```go
driveFilesRewardTx, err := client.NewDriveFilesRewardTransaction(
		sdk.NewDeadline(time.Hour),
		uploadedInfos, //the array of *sdk.UploadInfo
	)
driveFilesRewardTx.ToAggregate(driveAccount.PublicAccount)
```