---
id: overview
title: Replicator Overview
sidebar_label: Overview
---

In simple terms, a [Replicator Node](overview.md) is a component of the system that provides storage space for data. To become a Replicator, one needs to release a specific transaction (ReplicatorOnboardingTransaction) and prove readiness to provide space with collateral. When a Replicator joins a storage unit (Drive), it starts listening to events associated with that storage and synchronizes with the data on the storage if it already exists. Synchronization involves fetching data, synchronizing the storage itself, and verifying the data. During data synchronization, if changes occur, the Replicator must confirm them. If changes involve adding "zero" data, the Replicator must also confirm them.

The Replicator participates in a verification process that occurs after joining the storage. Verification happens in the same way as with other Validators. There is also a procedure for synchronizing receipts for downloading data from the storage. The Replicator asks other Replicators about receipts for each download channel. When a LeaveDrive event occurs, the Replicator stops making changes to the data and removes stored data. If the storage closure event happens, the Replicator also releases all necessary transactions to confirm downloading data.

In summary, a Replicator is a part of the system that ensures data storage, and it performs various operations to maintain the integrity and currency of data in the system.