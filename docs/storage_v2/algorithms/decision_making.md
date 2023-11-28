---
id: decision_making
title: Decision Making
---

The decision point is on the blockchain. The Replicators give their opinion in a multisignature transaction. Based on these opinions, Harvesters can compute a collective opinion. The concrete algorithm of collective opinion-making depends on the type of the transaction. Since each [Replicator](../roles/replicator.md) can send such a multisig transaction to the blockchain, but only one should be approved. Each [Replicator](../roles/replicator.md) in the transaction defines its opinion about how much each other [Replicator](../roles/replicator.md) should receive for its work. The reward for the [Replicator](../roles/replicator.md) is defined as the median of all opinions about the reward for it.
