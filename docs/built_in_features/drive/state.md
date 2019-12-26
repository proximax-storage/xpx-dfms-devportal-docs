---
id: state
title: Drive State
sidebar_label: State
---


|     State    |     Meaning   |
|--------------|:-------------:|
| [**NotStarted**](state.md#notstarted) | The [drive](overview.md) waits for the minimal count of [replicators](../../roles/replicator.md) |
| [**Pending**](state.md#pending) | The [drive](overview.md) waits for the end of the [drive](overview.md) or the payment next billing period. |
| [**InProgress**](state.md#inprogress) | The [drive](overview.md) contract is being executed |
| [**Finished**](state.md#finished) | The [drive](overview.md) is terminated or it is over. |

## NotStarted
The [drive](overview.md) waits for the minimal count of [replicators](../../roles/replicator.md). Its state changes to [**Pending**](state.md#pending) when a minimum count of [replicators](../../roles/replicator.md) has occurred.

## Pending
The [drive](overview.md) has [**Pending**](state.md#pending) state in two cases:
1. When it is waiting for the start of the next [billing period](overview.md#billing-period).
2. When it is waiting for the end of the [drive](overview.md).
 
## InProgress
In this state any [replicator](../../roles/replicator.md) or the [owner](../../roles/owner.md) can start verify [replicators](../../roles/replicator.md) that they are still saving user's data. During [billing period](overview.md#billing-period) the [drive](overview.md) has this state and continues [billing period](overview.md#billing-period) blocks. After [billing period](overview.md#billing-period) blocks, the [drive](overview.md) goes to the [**Pending**](state.md#pending) state. 

## Finished
The [drive](overview.md) has the [**Finished**](state.md#finished) state when the duration is over or [drive](overview.md) doesn't contain XPX on the balance of the account for the next [billing period](overview.md#billing-period). This means that [replicators](../../roles/replicator.md) should no longer store the user's data. When the [drive](overview.md) goes to the [**Finished**](state.md#finished) state, Blockchain returns deposits (both for participation in the [drive](overview.md) and for files) to [replicators](../../roles/replicator.md). When the [drive](overview.md) is finished, any transaction related to the [drive](overview.md) is impossible, besides the reward transaction if the [drive](overview.md) account has [SM](../../getting_started/economy.md#sm) on balance.