---
id: overview
title: Drive Overview
sidebar_label: Overview
---

The [Drive](overview.md) in a nutshell is a representation of a client drive that handles file management system commands. A representational drive or directory where in the owner can manage its files that is subsequently pushed out to replicators. The main drive owner is a [multisignature account](https://bcdocs.xpxsirius.io/docs/built-in-features/multisig-account/) created by an [Storage Director Node](../../roles/owner.md). Only [Storage Replicator Nodes](../../roles/replicator.md) are signers of this account. It is required for consensus between [Storage Replicator Nodes](../../roles/replicator.md) on operations with the [Drive](overview.md). The minimum count of [Replicator Nodes](../../roles/replicator.md) for starting to execute [Drive](overview.md) is 1;

## Properties

The [Drive](overview.md) has the following properties:

|Property|Description|
|---|---
|MultisigAccount|Every [Drive](overview.md) has a unique identifier.
|Owner|Every [Drive](overview.md) has a user who created it.
|RootHash|Unique identifier of the drive state.
|Size|A [Drive](overview.md) space in MB.
|UsedSizeBytes|Used [Drive](overview.md) space in bytes.
|Replicators Count|The amount of [Drive](overview.md) copies.
|ActiveDataModifications|Array of active data modifications.
|CompletedDataModifications|Array of completed data modifications.
|ConfirmedUsedSizes|Information of drives assigned to the replicator.
|Replicators|Array of replicators public key assigned to the [Drive](overview.md).
|OffboardingReplicators|Array of replicators that applied for offboarding.
|Verification|Information about verifications of replicators.
|DownloadShards|Array of download channels and replicators that belong to respective download shards.
|DataModificationShards|Array of data modofication shards.
