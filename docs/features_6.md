---
id: features_6
title: Challenge
---


## Overview

Challange - it's a process when [verifier](features_2.md) node ensures that [replicator](features_3.md) node still stores expected file.

Process steps:
1. [Verifier](features_2.md) node requests some amount of randomly placed file [tags](features_9.md) from [replicator](features_3.md).
2. [Replicator](features_3.md) node generates [tags](features_9.md) of passed file block indexes and sends them to the [verifier](features_2.md).
3. [Verifier](features_2.md) compares own [tags](features_9.md) with replicator one's.

If there were any differences between [verifier](features_2.md) and [replicator](features_3.md) tags, replicator's challange is failed, and it's being kicked from file contract by verifier. After that, same verifier will find another replicator and ask another replicator to send file data to the new one.

