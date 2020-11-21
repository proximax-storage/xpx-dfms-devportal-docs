---
id: replicator
title: Storage Replicator Node
---

The [Storage Replicator Node](replicator.md) and the [verifier](replicator.md) are the same node with different roles. It stores the [owner's](owner.md) data for payment and verifies other replicators. The [Storage Replicator Node](replicator.md) can become the [verifier](replicator.md) when another [Storage Replicator Node](replicator.md) or the [owner](owner.md) sends the start [Drive](../built_in_features/drive/overview.md) [verification](../algorithms/verification.md) transaction.

## Replicator Responsibilities

1. The [Storage Replicator Node](replicator.md) searches and joins an active [Drive](../built_in_features/drive/overview.md) contract. When the [Storage Replicator Node](replicator.md) wants to join the [Drive](../built_in_features/drive/overview.md), it makes the deposit equal to the [Drive](../built_in_features/drive/overview.md) size.
2. The [Storage Replicator Node](replicator.md) stores the [Storage Director Node's](owner.md) files. When new data should be stored, the [Storage Director Node's](owner.md) node sends actual data to the [Storage Replicator Node](replicator.md) nodes, and they keep that file until the [Drive](../built_in_features/drive/overview.md) contract expiration or it is deleted.
3. The [Storage Replicator Node](replicator.md) confirms that files are stored. The [verifier](replicator.md) continually checks that the [Storage Replicator Node](replicator.md) stores the correct and undamaged files. For it, the [verifier](replicator.md) uses the [Challenge](../built_in_features/challenge.md). The [Storage Replicator Node](replicator.md), in this case, should generate tags using the algorithm and actual file data.

## Verifier Responsibilities

The [verifier](replicator.md) is checking that data is untouched and safe. It uses the [Challenge](../built_in_features/challenge.md) to control replicators against corruption and loss of the [Storage Replicator Node's](owner.md) data. The [verifier](replicator.md) begins [verification](../algorithms/verification.md) when the [Drive](../built_in_features/drive/overview.md) verification transaction starts. According to the [verification](../algorithms/verification.md) algorithm, a [verifier](replicator.md) that failed verification loses its deposit. That deposit will be divided between replicators. Since the main goal of any [Storage Replicator Node](replicator.md) is to make a profit, it is interested in [verifications](../algorithms/verification.md).
