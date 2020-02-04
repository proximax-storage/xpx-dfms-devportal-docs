---
id: overview
title: Drive Overview
sidebar_label: Overview
---

The [drive](overview.md) is a [multisig account](https://bcdocs.xpxsirius.io/docs/built-in-features/multisig-account/) created by an [owner](../../roles/owner.md). Only [replicators](../../roles/replicator.md) are signers of this account. It is required for consensus between [replicators](../../roles/replicator.md) on operations with the [drive](overview.md). 

## Properties
The [drive](overview.md) has the following properties:
### Owner
Every [drive](overview.md) has a user who created it.
### Duration
This value contains the time of [drive](overview.md) existing (counted in blocks, required). Until the end of the [drive](overview.md), the [owner](../../roles/owner.md) can change it (contract prolongation).
### Billing period
Payout frequency to [replicators](../../roles/replicator.md) (counted in blocks, recommended 1 month).
> Note \
*Billing period* must be a multiple of the *duration* (*duration mod billingPeriod = 0*)
### Billing price
The reward for participation. Paid once in *billing period* (in [SO](../../getting_started/economy.md#so); recommended *replicas \* driveSize*) and is divided between all [replicators](../../roles/replicator.md).
### Drive size
A [drive](overview.md) space in MB (required).
### Replicas
The count of [drive](overview.md) copies (required);
> Note \
Amount of [replicators](../../roles/replicator.md) is limited by the number of replicas.
### Min replicators
The minimum count of [replicators](../../roles/replicator.md) for starting to execute [drive](overview.md) (recommended to be equal to replicas);
### Percent approvers
The percentage of signatures for accepting any transaction (recommended 67);
