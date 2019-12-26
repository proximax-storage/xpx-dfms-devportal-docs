---
id: remove_file
title: Remove File
sidebar_label: Remove File
---

This guide will help you remove files on a cloud drive.

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [owner](../roles/owner.md)
- Have one active [drive](../built_in_features/drive/overview.md)

## Example
The owner wants to delete a file from the drive.

```go
removeFileTx, _ := client.NewDriveFileSystemTransaction(
    sdk.NewDeadline(time.Hour),
    driveAccount.PublicAccount,
    oldRootHash,
    newRootHash,
    []*sdk.AddAction{},
    []*sdk.RemoveAction{
        {
            FileHash: fileHash,
        },
    },
)
removeFileTx.ToAggregate(owner.PublicAccount)
```