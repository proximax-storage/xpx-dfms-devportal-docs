---
id: replicator
title: Storage Replicator Node
---

The **[Storage Replicator](replicator.md#replicator-responsibilities)** and the **[Verifier](replicator.md#verifier-responsibilities)** are the same node with different roles. This node stores the [Storage Director](owner.md)'s data (and gets paid for this), and also verifies other [Replicators](replicator.md#replicator-responsibilities).

## Replicator Responsibilities

1. Replicator nodes search for and join active [Drives](../built_in_features/drive/overview.md). When a Replicator wants to join a Drive, that Replicator makes a deposit equal to the size of the Drive.

2. Replicator nodes store the [Storage Director](owner.md)'s files. When new data should be stored, the Storage Director sends this data to the Replicator nodes, and they store it until the [Drive](../built_in_features/drive/overview.md)'s contract is expired or the [Drive](../built_in_features/drive/overview.md) itself is closed.

3. Replicator nodes confirm that they actually store the files. [Verifiers](replicator.md#verifier-responsibilities) regularly check that the Replicators store correct and undamaged files. To do this, [Verifiers](replicator.md#verifier-responsibilities) use the [Challenge](../built_in_features/challenge.md). Verified Replicator nodes, called **Provers**, must generate and send a response according to the verification protocol that is formed using the stored data. Replicators that fail the verification are removed from the Drive.

## Verifier Responsibilities

The **Verifier** is a node that checks that data stored by [Storage Replicator](replicator.md#replicator-responsibilities) nodes is untouched and safe. It uses the [Challenge](../built_in_features/challenge.md) to control Replicators and to prevent corruption and loss of the [Storage Director](owner.md)'s data. The Verifier begins [verifications](../algorithms/verification.md) automatically on specific blocks, depending on the hash of the block, the key of the [Drive](../built_in_features/drive/overview.md), and a special constant that is set in the network configuration and which regulates the frequency of the verifications.

According to the verification algorithm, a Verifier that fails verification loses its deposit. That deposit will be divided between Replicators of that Drive. Since the main goal of any Storage Replicator node is to make profit, it is interested in verifications.
