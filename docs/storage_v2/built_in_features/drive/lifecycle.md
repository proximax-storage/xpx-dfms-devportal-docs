---
id: lifecycle
title: Drive Lifecycle
sidebar_label: Lifecycle
---
>**Note**\
You can see the [bcdocs](https://bcdocs.xpxsirius.io/docs/built-in-features/drive) for getting information about schemas of transactions described here.

## Create the drive

To create the [Drive](overview.md), the [owner](../../roles/owner.md) must define Drive Size and Replicators Count and send Prepare Drive transaction. Drive Size should not be less than 1MB. Drive Size should be the integer number of MB. Replicator Number should be the integer number not less than 4. After [Drive](overview.md) creation, it should transfer the sufficient amount [XPX](../../getting_started/economy.md#xpx) to the drive’s balance. These mosaics will be exchanged to [SO](../../getting_started/economy.md#so) by [Replicator Nodes](../../roles/replicator.md) according to the drive size. The [Drive](overview.md) preparation has no strict time bounds and you will wait replicators assignment to the drive. Any [Replicator Node](../../roles/replicator.md) can join it at any time.

## Billing period

We define the duration of the Billing Period to be equal to 4 weeks. Once per Billing Period, Harvesters make payment for the Storage, so the Drive Owner should pay attention if there are enough Storage Units on the Drive account. To replenish the Storage Account, the Drive Owner can send at any time StoragePaymentTransaction. To prepay the [Drive](overview.md) for the next Billing Period, the Drive Owner (or any other Public Key) should release the StoragePayment Transaction and specify the desired amount of Storage units it wants to pay for the Drive. 

As soon as the Billing Period since the last payment according to the time mentioned in the block passes, Harvesters make an automatic payment for the Storage for the past period. If there are not enough SO units for the Drive prolongation or not enough Verifications were prepaid, then the [Drive](overview.md) is closed in compliance with all procedures mentioned in the DriveClosureTransaction. Since ProximaX blockchain is public, there is no possibility to encourage the Replicators to work free of charge so there is no a so-called buffer zone when the Billing Period has already finished but the Drive still works.

## Interacting with drive

During the execution of the [Drive](overview.md), the [Storage Director Node](../../roles/owner.md) can interact with it, like on other cloud storage. It means that it can do uploading, removing, renaming, moving, downloading files, and creating/removing directories(empty directories are not allowed). Whenever an [Storage Director Node](../../roles/owner.md) makes any file operation, it changes a root hash. Blockchain is storing this hash and anyone can get an actual hash. So, all [Replicator Nodes](../../roles/replicator.md) can easily monitor [Drive](overview.md) changes.

To Modify the [Drive](overview.md) Data, the Drive Owner should generate the Action List in which all necessary modifications are listed in the required order. The CDI (Content Download Information, see 2021. Storage High-Level Design) is generated for the content to be downloaded by the Replicators. This content includes Modified Files and the Action List. This CDI, along with the size of the content to Download (including the Action List), is posted on the blockchain via DataModificationTransaction. The Drive Owner should not lie about the size of data to upload. Otherwise, the [Replicator Nodes](../../roles/replicator.md) will reject the Modification. The Drive Owner MUST NOT delete all the files that are to be downloaded by the Replicators until the corresponding. 

DataModificationApprovalTransaction is posted on the blockchain. Until the Data Modification is approved via DataModificationApprovalTransaction, the Drive Owner has the possibility to cancel the Modification with DataModificationCancelTransaction. In case of Modification Cancelation via DataModificationCancelTransaction or discarding the Modification by the Replicators, the Drive Owner still has to pay the Replicators for the modification.

When the Replicator starts the execution of the Modification, it tries to download necessary data based on the CDI mentioned in the transaction. This data consists of two parts:

 - Action List which contains all the actions which should be executed during Data Modification;
 - Modified Files that should be downloaded by the Replicator to fulfill the requirements of the Action List.
 #### The possible actions in the Action List are:
 - File Modification,
 - File Remove,
 - File Rename,
 - Folder Creation,
 - Folder Remove,
 - Folder Rename.

### Upload

When an [Storage Director Node](../../roles/owner.md) uploads new files, it fills the Actions List, where indicates the file hashes and sizes. Blockchain automatically transfers *fileSize \* replicas* [SM](../../getting_started/economy.md#sm) for each file from the [Storage Director Node](../../roles/owner.md) account to [Drive](overview.md) account. These tokens are rewards of [Replicator Nodes](../../roles/replicator.md) and the [Storage Director Node](../../roles/owner.md) for file spreading (the [Storage Director Node](../../roles/owner.md) can also return part of its tokens). The transaction can be rejected in the following cases:

- if the [Storage Director Node](../../roles/owner.md) doesn't have enough money;
- Blockchain already contains the same hash;
- not enough space on the [Drive](overview.md).
Blockchain marks all [Replicator Nodes](../../roles/replicator.md) that they don't put deposits for a new file.

As soon as the File Structure is generated, the Replicator (with other Replicators) signs multisig Data Modification Approval Transaction and mentions a new FileStructureCDI and other necessary information. If the Modification fails then the Replicator mentions in the transaction the necessary for the transaction information based on the old Drive State. 

The Data Modification is considered as the failed one if one of the next conditions is satisfied:

 - The Downloaded Data size exceeds the declared in the DataModificationTransaction one (such download should be interrupted as soon as the excess is discovered);
 - The Downloaded Data does not contain the Action List;
 - The Action List is corrupted or contains invalid actions;
 - An error with the interaction with the File System has occurred;
 - The size of the Drive after applying the action list exceeds the ordered Drive Size.

If the Data Modification has not failed, as soon as the Data Modification Approval Transaction is added to the blockchain, the [Replicator Node](../../roles/replicator.md) reapplies the Action List not virtually. It works with the real state of the [Drive](overview.md), loading the necessary files from a Sandbox and apply to the Drive.

### Download

In this procedure, we should highlight two roles:

 - Downloader - the [Replicator Node](../../roles/replicator.md) who downloads the file
 - Uploader - the node which can upload the requested piece of the file. They can be Replicators who already downloaded the piece or the Drive Owner.

To be able to download data from the desired Drive, the Content Consumer or a Sponsor should open a Download Channel on this Drive and prepay some amount via Download Transaction. Any node that can issue this transaction indicated the list of Public keys (Content Consumers) that can download files within this channel. If this node wants to grant free downloading to any interested node, it records zero-key in this field.

In this transaction, the Content Consumer or a Sponsor locks:

 - Streaming Units - needed to pay for the Replicators' work,
 - XPX - needed to pay for the DownloadApprovalTransaction made by the Replicators.

 The Content Consumer or another Sponsor can increase the locked amount of each currency by posting Download Payment Transaction. 

### Drive Closure

If the Drive Owner wishes to close the Drive, he posts the Drive Closure Transaction. When the DriveClosureTransaction is posted on the blockchain, besides closing the Drive, all pending Data Modifications are canceled as via DataModificationCancelTransaction with one caveat: only the first pending DataModification is paid, as it is mentioned in DataModificationCancelTransaction, other ones are canceled free of charge. The reason for this policy is simple: we do not want the Drive Owner to be able to force the Replicators to download a large amount of data free of charge, so we make the Owner pay for the first pending modification. 

However, since all modifications are executed sequentially, we can be sure that the Replicators have not started executing all other pending modifications. So, the payment for them can be returned to the Drive Owner. Those Replicators who have not approved modifications that have been approved by the DataModificationApprovalTransaction receive rewards for these modifications.

The [Drive](overview.md) contract is finished when the duration is over. Besides that, the [Drive](overview.md) can be terminated until the deadline. It can happen when:

- The [Director Node](../../roles/owner.md) decides to terminate the [Drive](overview.md).
- The [Drive](overview.md) does not have money to start the next [billing period](overview.md#billing-period ).
After the end of the [Drive](overview.md) duration, all [Replicator Nodes](../../roles/replicator.md) return their deposits.
