---
id: features_3
title: Replicator Module
---


## Overview

Replicator module is a feature which allows users to store their data in a decentralized network.

Verifier module is a feature which allows users to be sure that their data will be untouched and safe. It is used to control [replicators](features_3.md) from corrupt or loose user's data using ['Challenge'](features_6.md).

## Verifier Module Roles

 * **Stores user files** - when new file should be stored, [acceptor](features_1.md) node sends actual data to the replicator nodes, and thay keep that file until [Storage Contract](features_10.md) expiration.
* **Prove file intact** - when file is stored on replicator node, [verifier](features_2.md) node constantly ensures that replicator stores right and uncorrupted file using ['Challange'](features_6.md). Replicator in this case should generate corrent [tags](features_9.md) using algorithm and actual file data.

