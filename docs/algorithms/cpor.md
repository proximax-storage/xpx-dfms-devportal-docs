---
id: cpor
title: CPOR
---

## Overview
Compact Proofs of Retrievability (CPOR) allows the client to verify files integrity and reliability stored on the server (in our case, it is drive). The client breaks a file into *N* blocks (in our scheme *N* equals the count of replicators) and any time can request any block to make sure that the file is still stored. The nodes exchange messages according to the model `Request - Response`.

We use CPOR with public verifiability in [cross-block protocol](../protocols/cross_block_protocol.md). So anyone who has permitting to verify the data correctness can act as a verifier.

> **Note** \
For more information about CPOR see [original source](https://hovav.net/ucsd/dist/verstore.pdf).