---
id: get_drive_info
title: Get Info About Drive
sidebar_label: Get Drive Info
---

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [owner](../roles/owner.md)
- Have one active [drive](../built_in_features/drive/overview.md)

## Example
We [created the drive](create_drive.md) in the previous guide and want to get information about it.

```go
drive, _ = client.Storage.GetDrive(ctx, driveAccount.PublicAccount)
fmt.Println(drive.String())
```