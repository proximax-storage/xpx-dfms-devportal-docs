---
id: features_5
title: POCA selection
---


## Overview

Proof of Conflation Aggregates - is an algorithmm, which is used by [acceptors](features_1.md) or [verifiers](features_2.md) to choose verifiers or [replicators](features_3.md). It uses randomizer and nodes [reputation](features_11.md) to avoid centralization and at the same time choose most stable and reliable nodes.


## Process steps

1. Take all possible nodes reputations and sum them (if we imagine these numbers as a ranges, we can place all of ranges on a single line sequentially).
2. Randomly choose a number  `sum >= X > 0` - it should correspond to some node's range (it should be in it).
3. Node, which range was selected - wins the selection.

In that way, node's reputation directly affect possibility to being choosen in selection (it have larger range), and at the same time, randomly picking the node helps to avoid centralization, where nodes with best reputation totally dominate on nodes with less reputation, and last ones have no chanses to being choosen.


