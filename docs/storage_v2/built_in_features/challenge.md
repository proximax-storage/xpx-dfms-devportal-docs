---
id: challenge
title: Challenge
sidebar_label: Overview
---

The [Challenge](challenge.md) is the process when the [verifier](verifier/overview.md) checks that the [Replicator Node](../roles/replicator.md) is storing the expected file. [Challenge](challenge.md) process includes the following steps:

1. The [verifier](../roles/replicator.md) requests some amount of randomly placed file blocks from the [Replicator Node](../roles/replicator.md).
2. The [Replicator Node](../roles/replicator.md) generates blocks of passed file indexes and sends them to the [verifier](../roles/replicator.md).
3. The [verifier](../roles/replicator.md) compares its blocks with the [Stoge Replicator Node](../roles/replicator.md)'s blocks.