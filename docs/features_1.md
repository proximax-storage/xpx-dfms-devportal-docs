---
id: features_1
title: Acceptor Module
---


## Overview

Acceptor Module is a feature which helps user to interact with ProximaX Storage. It wraps whole Proximax Storage complexity with an [REST API](rest_api_1.md), which is easy to interact with any programming language. Also this modules ensures that user request will be executed.

## Acceptor Module Roles

 * **Upload File** - when user wants to upload some file to ProximaX Storage, module will ensure that following steps will be executed succesfully:
   1. Verify that user request is correct.
   2. Generate tags from passed file.
   3. Using [POCA Selection](features_5.md) algorithm acceptor will find suitable [Verifiers](features_2.md) and [Replicators](features_3.md).
   4. Create Storage Contract transaction which all actors should sign and send it to the blockchain.
   5. After all signs sends file to all replicators and file metadata to all verifiers.
 * **Download File** - when user wants to download a file from ProximaX Storage, module will do the following:
   1. Verify that user request is correct.
   2. Find random [replicator](features_3.md) (TBD finding 'closest' to achieve better speed)
   3. Download whole file on node hard drive, and then sends a file back to the user (TBD acceptor should pipe file directly to the user, not keep whole file on it's own hard drive)
 * **Onboarding** - when user wants to register it's machine as a [Replicator](features_3.md) and start to get's fee he should send special Onboarding request to working ProximaX node, which will be delegated to the acceptor module, and then it will do the following:
   1. Verify that user request is correct.
   2. Using [Proof Of Storage](features_4.md) will verify that actual user hard drive capacity is equal with passed one by user.
   3. Generate and send mosaics to user storage node.

