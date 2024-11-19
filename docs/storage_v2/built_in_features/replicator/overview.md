---
id: overview
title: Replicator Overview
sidebar_label: Overview
---

In simple terms, a **[Replicator](overview.md)** node is a component of the system that provides storage space for data. To become a Replicator, one needs to release a `ReplicatorOnboarding` transaction and prove readiness to provide space with collateral. When a Replicator joins a storage unit ([Drive](../drive/overview.md)), it starts listening to events associated with that Drive and synchronizes with its data, if it already exists. Synchronization involves fetching data, synchronizing the storage itself, and verifying the data. During data synchronization, if changes occur, the Replicator must confirm them. If changes involve adding "zero" data, the Replicator must also confirm them.

The Replicator participates in a verification process that occurs after joining the Drive. Verification happens in the same way as with other Verifiers. There is also a procedure for synchronizing receipts for downloading data from the storage. The Replicator asks other Replicators about receipts for each [Download Channel](../drive/lifecycle.md#download). When a `LeaveDrive` event occurs, the Replicator stops making any changes and removes stored data. If the Drive is closed, the Replicator also releases all necessary transactions to confirm downloading data.

In summary, a Replicator is a part of the system that ensures data storage, and it performs various operations to maintain the integrity and correctness of the data in the system.