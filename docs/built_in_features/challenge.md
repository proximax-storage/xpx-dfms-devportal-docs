---
id: challenge
title: Challenge
sidebar_label: Overview
---

The [Challenge](challenge.md) is the process when the [verifier](../roles/replicator.md) checks that the [replicator](../roles/replicator.md) is storing the expected file. [Challenge](challenge.md) process includes the following steps:

1. The [verifier](../roles/replicator.md) requests some amount of randomly placed file blocks from the [replicator](../roles/replicator.md).
2. The [replicator](../roles/replicator.md) generates blocks of passed file indexes and sends them to the [verifier](../roles/replicator.md).
3. The [verifier](../roles/replicator.md) compares its blocks with the [replicator](../roles/replicator.md)'s blocks.

If there are any differences between the [verifier](../roles/replicator.md)'s and the [replicator](../roles/replicator.md)'s blocks, the [replicator](../roles/replicator.md) fails the [Challenge](challenge.md), and it is banned by all signers of the contract. After that, the [verifier](../roles/replicator.md) searches for other [replicators](../roles/replicator.md) and asks them to send file data.
