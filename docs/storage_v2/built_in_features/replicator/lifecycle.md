---
id: lifecycle
title: Replicator Lifecycle
sidebar_label: Lifecycle
---

This life cycle outlines the various stages a Replicator goes through, from onboarding to participation in the system and eventual departure in the case of Drive closure.

## Replicator Onboarding

To provide the Storage space to the System, a [Replicator Node](../../roles/replicator.md) has to make a deposit, release Replicator Onboarding Transaction and Prove its Space with collateral. The real free space on the Replicator’s hard Drive MUST be at least twice larger than the mentioned in the Replicator Onboarding Transaction to provide the possibility of rollbacks.

## Joining a Drive

The Joining [Replicator Node](../../roles/replicator.md) finds out that it is assigned to the Drive via JoinToDriveEvent.
When the Replicator joins the [Drive](overview.md), it starts listening to all triggers about this [Drive](overview.md) and should make synchronization if the [Drive](overview.md) existed before. More precisely, the Replicator should:

 - Synchronize Download Receipts,
 - Synchronize Drive Data,
 - Make Verifications.

## Data Synchronization

The synchronization consists of the next steps:

  1. Download actual File Structure from other Replicators;
  2. Compare the existing File Structure with the downloaded one and form the list of files to download;
  3. Remove from Sandbox files that were downloaded there before and are not needed according to the list formed in p.2;
  4. Download files according to the list, taking into account that some of them can have already been downloaded to the Sandbox;
  5. If during the synchronization a new DataModificationApprovalTransaction is posted, then go to p.1.
  6. When all necessary files are downloaded, sign Data Modification Single Approval Transaction and apply modifications to the real state of the [Drive](overview.md) without waiting for the approval.
  7. If there are some pending modifications on the [Drive](overview.md), the [Replicator Node](../../roles/replicator.md) starts their execution in a usual way via execution of Action List (or Synchronization, if necessary).

## Storage Verification

The new [Replicator Node](../../roles/replicator.md) will participate only in those Verifications that were initiated after his joining to Drive. It computes when such Verifications occur in the same way as all other Validators. Storage Verifications are executed in a “many-to-many“ style that means that during the verification each Replicator of the Shard verifies all other Replicators of the same Shard. Verifications of the Drive are started after approving “zero” modification. Verifications will be execute regularly but randomly.

## Join to Download Shard

 - Receipts Synchronization is tied to a specific Drive, as Download Channels don't allow downloading from all Drives.
 - The Replicator asks each Replicator of the Drive about channel receipts for each Download Channel.

## Leave Drive

When the LeaveDriveEvent is generated, the [Replicator Node](../../roles/replicator.md)

 - Stops executing Data Modifications.
 - Removes the stored Data.

If the event is caused by [Drive](overview.md) Closure (because of posting the DriveClosureTransaction or EndOfBillingPeriodEvent in the blockchain), then the Replicator additionally releases all necessary DownloadApprovalTransactions.