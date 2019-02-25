---
id: features_4
title: Proof Of Storage
---


## Overview

**Proof Of Storage** - is an algorithm which is used to ensure that node, which want to be a [Replicator](features_3.md) have equal actual hard drive capacity and declared's one. It is needed to be sure that replicator nodes have enough hard drive space to keep user files without loss on it.

## How It Works

When someone want to join to ProximaX network as a Replicator node, he should send special ['Onboarding']() request, and after that choosen [acceptor](features_1.md) node will start process of verifying declared hard drive capacity of requestor's machine. That process also known as **Proof Of Storage**.


1. [Acceptor](features_1.md) generates file of declared capacity and [tags](features_9.md) from it.
2. [Acceptor](features_1.md) sends generated file to the requestor (this could take a while).
3. Requestor generates [tags](features_9.md) from that file.
4. [Acceptor](features_1.md) sequentially requests all [tags](features_9.md) from requestor and compares it with own ones.

If there were any differences between requestor and [acceptor](features_1.md) tags, requestor's proof of storage counts as failed.

