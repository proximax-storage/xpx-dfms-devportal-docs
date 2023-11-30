---
id: state
title: Drive State
sidebar_label: State
---

The drive instance can have different states in its lifecycle. Here are the following of each state of the drive.

| State                                 | Meaning                                                                                                    |
| :------------------------------------ | :--------------------------------------------------------------------------------------------------------- |
| [**NotStarted**](state.md#notstarted) | The [Drive](overview.md) waits for the minimal count of [Storage Replicator Nodes](../../roles/replicator.md)           |
| [**Pending**](state.md#pending)       | The [Drive](overview.md) waits for the end of the [Drive](overview.md) or the payment next billing period. |
| [**InProgress**](state.md#inprogress) | The [Drive](overview.md) contract is being executed                                                        |
| [**Finished**](state.md#finished)     | The [Drive](overview.md) is terminated or it is over.                                                      |

## NotStarted

The [Drive](overview.md) waits for the minimal count of [Replicator Nodes](../../roles/replicator.md). Its state changes to [**Pending**](state.md#pending) when a minimum count of [Replicator Nodes](../../roles/replicator.md) has occurred.

## Pending

The [Drive](overview.md) has [**Pending**](state.md#pending) state in two cases:

1. When it is waiting for the start of the next [billing period](overview.md#billing-period).
2. When it is waiting for the end of the [Drive](overview.md).

## InProgress

In this state any [Replicator Node](../../roles/replicator.md) can start verify [Replicator Nodes](../../roles/replicator.md). During [billing period](overview.md#billing-period) the [Drive](overview.md) has this state and continues [billing period](overview.md#billing-period) blocks. After [billing period](overview.md#billing-period) blocks, the [Drive](overview.md) goes to the [**Pending**](state.md#pending) state.

## Finished

The [Drive](overview.md) has the [**Finished**](state.md#finished) state when the duration is over or [Drive](overview.md) doesn't contain XPX on the balance of the account for the next [billing period](overview.md#billing-period). This means that [Replicator Nodes](../../roles/replicator.md) should no longer store the user's data. When the [Drive](overview.md) goes to the [**Finished**](state.md#finished) state, Blockchain returns deposits (both for participation in the [Drive](overview.md) and for files) to [Replicator Nodes](../../roles/replicator.md). When the [Drive](overview.md) is finished, any transaction related to the [Drive](overview.md) is impossible, besides the reward transaction if the [Drive](overview.md) account has [SM](../../getting_started/economy.md#sm) on balance.
