---
id: overview
title: Verifier Overview
sidebar_label: Overview
---

## Public Verifiability
Often in decentralized networks, it is required that the verification algorithm should support public verifiability which means that the Network can verify that the node really stores the data. Although the given algorithm allows introducing public verifiability, we do not need to implement this since verifications are made by the Replicators of the same Drive.

There are two roles of nodes in terms of Storage Verifications:
 - Prover - a Replicator that proves that it stores data;
 - Verifiers - Replicators that check whether the Prover stores data.