---
id: overview
title: Replicator Overview
sidebar_label: Overview
---

The [Replicator Node](overview.md) in a nutshell is the primary replicating machines and nodes that accepts and consumes [contract compositions[()] from [Storage Director Nodes](../drive/overview.md). When Replicator receives the Data Modification Transaction, it adds this transaction to the Modification Queue. The Replicator will start executing the transaction as soon as all previous ones are approved on the blockchain via Data Modification Approval Transaction and the [Replicator Node](overview.md) has applied the corresponding modifications to the real Drive State. All Drives with an insufficient number of Replicators are ranked in accordance with the level of importance of assigning a replicator to this particular Drive. The top Drive is selected and a random Replicator is assigned to that Drive.