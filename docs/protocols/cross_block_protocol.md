---
id: cross_block_protocol
title: Cross-block protocol
---

## Overview
The [cross-block protocol](cross_block_protocol.md) is needed to check that [replicators](../roles/replicator.md) keep storing files through time. The protocol is developed to ensure data reliability and security. When the [owner](../roles/owner.md) saves the new file, it forms the [Merkle graph](https://en.wikipedia.org/wiki/Merkle_tree) from its parts and applies it to the graph of the whole [drive](../built_in_features/drive/overview.md). After, the [owner](../roles/owner.md) sends the [Upload](../built_in_features/drive/lifecycle.md#upload) transaction to blockchain with the newly generated root hash of the whole [drive](../built_in_features/drive/overview.md). Every [replicator](../roles/replicator.md) after transaction confirmation retrieves the difference including the new file from the [owner](../roles/owner.md) and simultaneously verifies the validity of the formed Merkle graph. If everything is correct, then every [replicator](../roles/replicator.md) performs the next steps:
1. Encrypts every retrieved data block with a secret key.
2. Processes and prepares result block for future verifications through CPOR algorithm.
3. Sends the encrypted block to another [replicator](../roles/replicator.md) chosen using the formula below.
4. Waits for an encrypted block from another [replicator](../roles/replicator.md), also using the formula.
5. After the protocol round is finished every [replicator](../roles/replicator.md) stores the unique copy of the [drive](../built_in_features/drive/overview.md) with newly added file assembled from different pieces that were encrypted by different [replicators](../roles/replicator.md) with a secret key. That is, the stored data after the process can be easily fetched in the original form via decrypting the data with known public keys of [replicators](../roles/replicator.md).

> **Example** \
A [drive](../built_in_features/drive/overview.md) has 5 [replicators](../roles/replicator.md). Every *R* splits each file into 4 parts. *R0* requests from R1 the file part at number 1; from *R2* the file part at number 2 and so on. Also, *R0* sends the file part at number 1 to *R1*; the file part at number 2 to *R2* and so on.

>**Note**\
Every *R* has its number on the [drive](../built_in_features/drive/overview.md) contract. It gets the number according to the consensus algorithm.

## Formulas
### Request a file
*Rk* requests from *Ri* the file part at the number *(k - i mod N)* where *N* is the number of [replicators](../roles/replicator.md).
### Send a file
*Ri* sends the *j-th* part to *R* at the number *((i + j) mod N)* where *N* is the number of [replicators](../roles/replicator.md).

## Retransmitting protocol
The [replicator](../roles/replicator.md) that found a mismatch, creates the new transaction to ban the unfair [replicator](../roles/replicator.md). This transaction should be signed by a percentage of signers (defined when creating). Other [replicators](../roles/replicator.md) request the same parts of the file and check them. If the unfair [replicator](../roles/replicator.md) fails the check one more time, the [verifier](../roles/replicator.md) signs the ban transaction. If the minimum [percentage of approval](../built_in_features/drive/overview.md#percent-approvers) is collected, the unfair [replicator](../roles/replicator.md) will be banned. If there are not enough signatures, the initiator will receive the results.