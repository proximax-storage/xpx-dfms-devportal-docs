---
id: lifecycle
title: Replicator Lifecycle
sidebar_label: Lifecycle
---

This lifecycle outlines the various stages a Replicator goes through, from onboarding to participation in the system and eventual departure in the case of Drive closure.

## Replicator Onboarding

To provide storage space to the System, a [Replicator](../../roles/replicator.md) node has to make a deposit, release `ReplicatorOnboarding` transaction and prove its space with collateral. The real free space on the Replicator’s hard Drive must be **at least twice larger** than the mentioned in the `ReplicatorOnboarding` transaction to provide the possibility of rollbacks.

## Joining Drive

The joining [Replicator](../../roles/replicator.md) node finds out that it is assigned to the Drive via `JoinToDrive` event.

When the Replicator joins the [Drive](overview.md), it starts listening to all triggers associated with this Drive, and it must perform synchronization if the Drive existed before. More precisely, the Replicator must:

- Synchronize **Download Receipts**.
- Synchronize Drive data.
- Make verifications.

## Data Synchronization

The synchronization consists of the following steps:

1. Download actual File Structure from other Replicators.
2. Compare the existing File Structure with the downloaded one and form the list of files to download.
3. Download files according to the list, taking into account that some of them can have already been downloaded.
4. If during the synchronization a new `DataModificationApproval` transaction has been posted, then go back to step 1.
5. When all necessary files are downloaded, sign `DataModificationSingleApproval` transaction and apply modifications to the real state of the Drive without waiting for the approval.
6. If there are some pending modifications on the Drive, the Replicator starts their execution in a usual way via execution of Action List (or Synchronization, if necessary).

If the only modification on the Drive is “zero” modification, the Replicator must approve it in the same way as the usual modification.

## Storage Verification

The new Replicator node will participate only in those verifications that were initiated after his joining to the Drive. It computes when such verifications occur in the same way as all other Verifiers. Storage verifications are executed in a “many-to-many“ style, meaning that during the verification each Replicator of the **Verification Shard** verifies all other Replicators of the same Shard. Verifications of the Drive are started after approving “zero” modification. Verifications are executed regularly, but randomly.

## Joining Download Shard

- Receipts Synchronization is tied to a specific Drive, since [Download Channels](../drive/lifecycle.md#download) don't allow downloading from all Drives.
- The Replicator asks each Replicator of the Drive about channel receipts for each Download Channel.

## Leaving Drive

When the `LeaveDrive` event is generated, the Replicator node:

- Stops executing Data Modifications.
- Removes the stored Data.

If the event is caused by [Drive](overview.md) closure (because of posting the `DriveClosure` transaction or `EndOfBillingPeriod` event in the blockchain), then the Replicator additionally releases all necessary `DownloadApproval` transactions.