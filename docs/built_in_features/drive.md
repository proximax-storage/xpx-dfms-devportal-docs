---
id: drive
title: Drive
---

A drive is a multisig account created by user that consist of cosigners (replicators, without owner not is user). Think of the disk account as the different boxes that contain copies of your file.

## Properties <br>
Drive have next properties:

**Owner**<br>
User, that creating this drive.

**Duration**<br>
How long will exist this drive (counted in blocks, required).

**Billing period**<br>
How often are payments made (counted in blocks, optional 1 month).

>**Note** <br>
Billing period must be a multiple to duration (duration mod billingPeriod = 0)

**Billing price**<br>
Reward to replicators for participation, which is paid once in billingPeriod (in storage units, optional replicas*driveSize).

**Drive size** <br>
Size of drive (required).

**Replicas**<br>
How many replicas the user wants (required);

**Min replicators**<br>
Minimum count of replicators for starting execute drive (optional replicas);

**Percent approvers**<br>
How many signatures must be made for accept transaction (optional 100 or 66);

## Drive lifecycle

### Create the drive <br>
First of all, a user (later the owner) needs to create a new multisign account that will using like drive account. For creating drive owner should to define some field like drive size, amount of replicas, duration, price and other. When drive have created the owner should transfer the amount XPX to the balance that in future will be exchanged on storage unit for payments to replicators.

>**The example**: <br>
User wants to create a new 1000MB (driveSize) drive for 12 month (duration). To do this, he determines that he wants 4 replicas, but drive can start when 3 replicators joined. Also he determines that 100% signatures (percentApprovers) are needed for accepts the transaction. Every 1 month (billingPeriod) 100 (billingPrice) will be distributed between replicators (if drive have 4 replicators then every replicators obtain 25 (billingPrice / count of replicators).

### Join to the drive <br>
Any user can view and, if the conditions are satisfactory, join him. When user send join transaction to drive account all participants seeing it and sign it. When join transaction from the replicator have signed, he makes a storage units deposit and then he becomes part of multisig.

>**Note**<br> 
Replicator`s deposit equal to drive size.

Drive will has pending status when minimal amount of replicators will have joined. The main replicator will be selected (most often this is the first joined replicator) and he must create transaction to exchange XPX to storage units on drive account. After XPX exchanged to storage units and if it amount on the balance enough drive contract starting up, the status of the disk will change to "in progress". Replicators will obtain reward every billing period automatically and initiate new exchange XPX storage units after ending billing period.

Over time, any number of replicators could join to replicators in drive storage contract. Group of nReliable replicators provide a better quality of Cross Verification. New replicator that joins when the drive has no file may move to the standby mode. In general case, at the time of joining replicator has to fill its memory with all files in the current state of the drive. For this purpose, it initiates the Dir command and downloads each file from Dir results. Payments for data transfer will be rewarded according to the use case Upload.

Actually, drive preparation has no strict time bounds. It is just an initiation of the drive storage contract. If some replicator will join to drive storage contract later its final reward will be calculated considering its time of joining.

### Interacting with drive <br>
During the execution of the drive contract owner can interact with drive like on other cloud storages. It is meaning that he can do uploading, removing, changing, renaming, moving, downloading files and can structuring them creating and removing directories.

All commands above create new drive file system that have next properties:
- **Drive key** <br>
Key of drive, that will change.
- **New root hash** <br>
Hash sum of local drive.
- **Old root hash** <br>
Hash sum of local drive before change.
- **Add actions** <br>
New files that added. This is an array of a structure that consists of:
    - **File size** <br>
    - size of file.
    - **File hash** <br>
    - hash sum of file.
- **Remove actions** <br>
An array of hash sum of each file that removed.

The command above is the same for the following actions: upload, delete and modify files. Let's look at each action in more detail.
In case uploading new file user pays streaming price (file size * (N of replicas - 1)) in streaming units.

>**Note** <br>
(N replicas - 1) because the user has shared this file with at least one replicator.

### End drive <br>
When duration of drive end starting so calling "contract prolongation". In this period owner can decide if he need continuation of the drive contract or it is can finished.
Also drive can end until deadline if owner decide that he no longer needs storing files.

## Status of drive

|    Status    |     Meaning   |
|--------------|:-------------:|
| *NotStarted* | Drive created but not generated in blockchain network |
|   *Pending*  | Drive wait for minimal replicators or enough amount of storage units on drive account |
| *InProgress* | Drive contact executing |
|  *Finished*  | Owner finished drive or drive duration is end |