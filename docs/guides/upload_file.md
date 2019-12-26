---
id: upload_file
title: Upload File
sidebar_label: Upload File
---

This guide will help you upload files to a cloud drive.

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [owner](../roles/owner.md)
- Have one active [drive](../built_in_features/drive/overview.md)

## Example
We [created the drive](create_drive.md) and now want to upload files on it.

``` go
fsTx, _ := client.NewDriveFileSystemTransaction(
    sdk.NewDeadline(time.Hour),
    driveAccount.PublicAccount,
    newRootHash,
    oldRootHash,
    []*sdk.AddAction{
        {
            FileHash: fileHash,
            FileSize: sdk.StorageSize(fileSize),
        },
    },
    []*sdk.RemoveAction{},
)
fsTx.ToAggregate(owner.PublicAccount)
```