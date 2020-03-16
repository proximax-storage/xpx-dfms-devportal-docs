---
id: replicator
title: Replicator and Verifier
---

## Overview

The [replicator](replicator.md) and the [verifier](replicator.md) are the same node with different roles. It stores the [owner's](owner.md) data for payment and verifies other replicators. The [replicator](replicator.md) can become the [verifier](replicator.md) when another [replicator](replicator.md) or the [owner](owner.md) sends the start [Drive](../built_in_features/drive/overview.md) [verification](../algorithms/verification.md) transaction.

## What does the replicator do

1. The [replicator](replicator.md) searches and joins an active [Drive](../built_in_features/drive/overview.md) contract. When the [replicator](replicator.md) wants to join the [Drive](../built_in_features/drive/overview.md), it makes the deposit equal to the [Drive](../built_in_features/drive/overview.md) size.
2. The [replicator](replicator.md) stores the [owner's](owner.md) files. When new data should be stored, the [owner's](owner.md) node sends actual data to the [replicator](replicator.md) nodes, and they keep that file until the [Drive](../built_in_features/drive/overview.md) contract expiration or it is deleted.
3. The [replicator](replicator.md) confirms that files are stored. The [verifier](replicator.md) continually checks that the [replicator](replicator.md) stores the correct and undamaged files. For it, the [verifier](replicator.md) uses the [Challenge](../built_in_features/challenge.md). The [replicator](replicator.md), in this case, should generate tags using the algorithm and actual file data.

## What does the verifier do

The [verifier](replicator.md) is checking that data is untouched and safe. It uses the [Challenge](../built_in_features/challenge.md) to control replicators against corruption and loss of the [owner's](owner.md) data. The [verifier](replicator.md) begins [verification](../algorithms/verification.md) when the [Drive](../built_in_features/drive/overview.md) verification transaction starts. According to the [verification](../algorithms/verification.md) algorithm, a [verifier](replicator.md) that failed verification loses its deposit. That deposit will be divided between replicators. Since the main goal of any [replicator](replicator.md) is to make a profit, it is interested in [verifications](../algorithms/verification.md).
