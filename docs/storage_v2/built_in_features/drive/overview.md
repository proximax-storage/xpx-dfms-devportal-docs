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
|Multisig|Every [Drive](overview.md) has a unique identifier.
|Owner|Every [Drive](overview.md) has a user who created it.
|Billing Period|The period of time for which the payment for the Drive service is made and equal to 4 weeks.
|Drive Size|A [Drive](overview.md) space in MB (required).
|Replicators Count|The amount of [Drive](overview.md) copies (required); Amount of [Storage Replicator Nodes](../../roles/replicator.md) is not limited, but should not be less than 1.
