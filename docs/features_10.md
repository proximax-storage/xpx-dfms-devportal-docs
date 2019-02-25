---
id: features_10
title: Storage Contract
---


## Overview

Storage Contract - is a special type of Catapult Aggregate Transaction, which is used to:

1. Bound all actors in blockchain (to keep all their actions in persistant place).
2. Create Contract only when all actors signed it, to verify that they are agree to participate in Contract.
3. All Mosaics transfers also happens in this Aggreagte Transaction.


## Lifecycle

### Create

1. [Acceptor](features_1.md) creates Storage Contract on user Upload File or Create Drive request.
2. TBD


### Update

1. [Verifier](features_2.md) updates Storage Contract when [replicator](features_3.md) didn't answer to the ['Challenge'](features_6.md) and it is required to find new replicator.
2. [Verifier](features_2.md) removes corrupted [replicator](features_3.md) node from the contract.
3. [Verifier](features_2.md) finds new [replicator](features_3.md) node, and adds it to the existing contract.
4. [Replicator](features_3.md) should sign that update, to verify that it's agree to participate in contract.

After sign, contract is updated with new replicator node, old one being removed.


