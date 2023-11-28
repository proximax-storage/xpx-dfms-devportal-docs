---
id: rewards
title: Rewards
sidebar_label: Overview
---

## Rewards for files

If the Drive account has [SM](../getting_started/economy.md#sm) on the balance and the Drive has [**Pending**](drive/state.md#pending) or [**Finished**](drive/state.md#finished) state, [Storage Replicator Nodes](../roles/replicator.md) can send the transaction to get the [reward](reward.md) for files transferring during the billing period. The consensus of [Storage Replicator Nodes](../roles/replicator.md) decides who will be the initiator. The initiator collects receipts ([Fair Streaming](../protocols/fair_streaming.md) protocol) from [Storage Replicator Nodes](../roles/replicator.md) and the [owner](../roles/owner.md) and after creates the get rewards transaction and announces it to Blockchain. Other [Storage Replicator Nodes](../roles/replicator.md) validate it (the [owner](../roles/owner.md) doesn't validate it), and cosign it in case everything is correct.

If the transaction contains information about [Storage Replicator Nodes](../roles/replicator.md), which didn't put the deposit for active files or uploaded size equals zero, Blockchain will reject it.

Replicators should send information about all files uploaded during a billing period. But before sending this information, [Storage Replicator Nodes](../roles/replicator.md) should validate receipts of each other, so everyone makes sure that they are related to the same billing period accordingly. Uploaded information can be collected via [Fair Streaming](../protocols/fair_streaming.md). After confirmation of the transaction, all [SM](../getting_started/economy.md#sm) that stored on the balance of the drive's account will be spread proportionally uploaded data. Only then [Storage Replicator Nodes](../roles/replicator.md) can delete receipts.

In case the Drive has the [**Finished**](drive/state.md#finished) state, but the Drive account contains [SM](../getting_started/economy.md#sm) on its balance, [Storage Replicator Nodes](../roles/replicator.md) still can send the get reward's transaction. After the confirmation, Blockchain prunes info about the Drive from cache after 360 blocks, the [multisig account](https://bcdocs.xpxsirius.io/docs/built-in-features/multisig-account/) will be removed.

## Rewards for drive

At the end of each billing, period [Storage Replicator Nodes](../roles/replicator.md) get their [reward](reward.md) for participation in the drive. The billingPrice of the Drive is distributed between all [Storage Replicator Nodes](../roles/replicator.md) that passed [verification](../algorithms/verification.md). Every [Storage Replicator Node](../roles/replicator.md) gets the [reward](reward.md) appropriate to its time in the contract (formula below). If it was the last billing period, then the deposit would be returned to honest [Storage Replicator Nodes](../roles/replicator.md).

## Formula

![alt-text](assets/formula_reward.png) \
Where \
![alt-text](assets/formula_S.png) \
Where \
![alt-text](assets/formula_1.png) if a [Storage Replicator Node](../roles/replicator.md) passed all [verifications](../algorithms/verification.md) \
Or \
![alt-text](assets/formula_0.png) if a [Storage Replicator Node](../roles/replicator.md) failed [verification](../algorithms/verification.md).
