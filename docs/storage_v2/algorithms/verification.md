---
id: verification
title: Verification
---

## Overview
**Storage Verifications** are executed in a “many-to-many“ style that means that during the verification each [Replicator](../roles/replicator.md) verifies all others.
In terms of the Verifications, the Replicator can play two roles:

- **Prover** — a Replicator that proves that it stores data.
- **Verifiers** — Replicators that check whether the Prover stores data.

Verifications are executed regularly, but randomly, depending on the hash of the block, the key of the [Drive](../built_in_features/drive/overview.md), and a special constant that is set in the network configuration and which regulates the frequency of the verifications.. The result of the Verification for each Prover is defined as the median of the [Verifiers'](../roles/replicator.md#verifier-responsibilities) opinions about that Prover.
