---
id: features_2
title: Verifier Module
---


## Overview

Verifier module is a feature which allows users to be sure that their data will be untouched and safe. It is used to control [replicators](features_3.md) from corruption and loose user's data using ['Challenge'](features_6.md).

## Verifier Module Roles

 * **Accepts file tags** - when new file should be stored, [acceptor](features_1.md) node sends [tags](features_9.md) to verifier nodes, and they keep that tags until [Storage Contract](features_10.md) expiration.
 * **Track file safety** - verifier keeps track on user files at [replicator](features_3.md) nodes using files [tags](features_9.md), passed from [acceptor](features_1.md) node using ['Challange'](features_6.md) algorithm.
 * **Ensure replicator reliable** - if [replicator's](features_3.md) answer is not correct, verifier should find a replacement for it. Basically in this case verifier will ensure following steps:
   1. Find suitable replicator.
   2. Send a request to valid replicator who have user's file to transfer it to new replicator.
   3. After finish of transfer send ['Challenge'](features_6.md) to verify file correctness. If ['challenge'](features_6.md) succesfull, verifier will update [Storage Contract](features_10.md) and continue work, otherwise go to step 1.


