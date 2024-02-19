---
id: consensus
title: Consensus
---

In all cases, the first attached [Storage Replicator Node](../roles/replicator.md) is selected as the main [Storage Replicator Node](../roles/replicator.md). It must create a transaction and announce it to Blockchain. Other [Storage Replicator Nodes](../roles/replicator.md) see the transaction in the partial cache and validate this transaction. After [verification](verification.md), they decide to sign it or not.
