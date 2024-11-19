---
id: overview
title: Drive Overview
sidebar_label: Overview
---

The [Drive](overview.md) in a nutshell is a representation of a client drive that handles file management system commands. From the Drive [Owner](../../roles/owner.md) perspective, Drive is represented by a local directory, where the Owner can manage their files that are subsequently pushed to [Replicators](../../roles/replicator.md).

In order for a Drive to become usable, a minimum number of [Replicators](../../roles/replicator.md) must be assigned to it. This number is governed by Network configuration, and is currently set to `4`.

## Properties

The [Drive](overview.md) has the following properties:

|Property|Description|
|---|---
|Key|Every Drive has a unique identifier.
|Owner|Every Drive has a user who created it.
|RootHash|Unique identifier of the drive state.
|Size|Total Drive space in megabytes.
|UsedSizeBytes|Used Drive space in bytes.
|ReplicatorCount|The amount of [Replicators](../replicator/overview.md) that store the Drive's data.
|ActiveDataModifications|List of active Data Modifications.
|CompletedDataModifications|List of completed Data Modifications.
|ConfirmedUsedSizes|Drive Replicators' confirmed used sizes.
|Replicators|List of Replicators' public key assigned to the Drive.
|OffboardingReplicators|List of Replicators that have applied for offboarding.
|Verification|Information about verifications of Replicators.
|DownloadShards|List of Download Channels and Replicators that belong to respective Download Shards.
|DataModificationShards|List of Data Modification Shards.
