---
id: consensus
title: Consensus
---

In all cases, the first attached [replicator](../roles/replicator.md) is selected as the main [replicator](../roles/replicator.md). It must create a transaction and announce it to Blockchain. Other [replicators](../roles/replicator.md) see the transaction in the partial cache and validate this transaction. After [verification](verification.md), they decide to sign it or not.
