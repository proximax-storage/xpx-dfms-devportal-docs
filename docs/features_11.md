---
id: features_11
title: POSt
---

## Overview

PoSt - proof of storage algorithm, which ProximaX uses to verify that node has some amount of space to rent, and to verify that node stores required used data. Originally [link](https://dl.acm.org/citation.cfm?id=3081282) and [pdf](https://eprint.iacr.org/2016/333.pdf). Probably it's good idea to read these first, before diving in technical details below.

## PoSt with Balloon stacked expanders

### Localized stacked expanders

An **expander** is a directed graph where at least some number of **sinks** is connected to a number of **sources**. **Source** is a graph vertex with no incoming edges, **sink** is a graph vertex with no outgoing edges. Let **n** is a number vertexes in the graph,  `0 < α < β < 1` such that any subset of `α·n` sinks are connected to at least `β·n` sources.

![stacked expanders](./image/stacked_expanders.png "stacked expanders")

**Stacked expanders** is a graph constructed by stacking expanders.

![stacked expanders 2](./image/stacked_expanders_2.png "stacked expanders 2")

Localization of an expander is a transformation on the edges of it. The localization operation first adds an edge **(vi, ui)** for all **i** (if it does not already exist), and then replaces each edge **(vi, uj)** where `i < j` with **(ui, uj)**. Figure below highlights the removed and the added edges in  red. Pictorially, it adds an edge for each horizontal source-sink pair, and replaces each “downward diagonal” edge with a corresponding “downward vertical” edge. This adds at most one incoming edge for each vertex in **U**.

![stacked expanders localization](./image/stacked_expanders_localization.png "stacked expanders localization")

### Pebbling game

Construct stacked expanders with **n**(**k** + 1) vertices, partitioned into **k** + 1 sets each of size **n**, **G = {V0, V1, V2, ..., Vk}**. All edges in the graph go from **Vi-1** to **Vi** for any **i** from 1 to **k**.

To enable efficient space verification, the prover computes a Merkle commitment **C** that commits the labels of all graph vertices using the same random oracle H (a random oracle is a mathematical function chosen uniformly at random, that is, a function mapping each possible query to a (fixed) random response). The verifier then checks if **C** is “mostly correct” by asking the prover to open the labels of some vertices. The opening of label is the path from the root to the leaf corresponding to a vertex in the Merkle tree. To compute a commitment **C** that is “mostly correct”, a prover cannot do much better than pebbling the graph following the rules which require a lot of space consistently.

Computing a Merkle tree can be modeled as a pebble game on a binary tree graph. Prover can compute the commitment **C** using **N = n + log2(n) + k ≈ n** space. The strategy is as follows: pebble **V0** sources using **n** space, compute Merkle commitment **C0** for all vertices in **V0** using additional **log2(n)** space, discard the Merkle tree except the root, and then pebble **V1** rewriting **V0**, compute **C1**, discard the rest of the Merkle tree, and continue like this. Lastly, **C1** to **Ck** are committed into a single Merkle root **C**. After receiving **C**, verifier randomly selects **l0** vertices, and for each vertex asks prover to open it, and all predecessors of the vertex if it is not a source. Note that prover did not store the entire Merkle tree but was constantly rewriting parts of it because the entire tree has size **n·k** which much greater than **n**. So prover has to pebble the graph for a second time to reconstruct paths/openings verifier asked for. Given the labels of all the predecessors of the vertex, verifier can check if the opening is correctly computed. If any opening is incorrect, verifier rejects. If no error is found, then **C** is “mostly correct”.


## Algorithm

### Initialization

 * Pick a PRF (pseudorandom function) and seed it with a random number.
 * Set parameters, such as **α, β**, required space, hash function.
 * Prover generates **G = {V0, V1, V2, ..., Vk}**, a graph consisting of a set of localized stacked expanders. Each expander is a two layered graph with n nodes in each layer. **n*labelSize** – storage, that should be proved.
 * Prover pebbles expanders: for each vertex in a layer get a hash of labels of sources of the vertex. Then build merkle tree on top of each graph layer and collect their root hashes. Build a merle tree on top of the root hashes and send final root hash to verifier along with graph parameters.


```
for each layer in the graph {
    for each vertex in the layer {
        get a hash of labels of sources of the vertex
    }
    build merkle tree on top of the computed hashes
    save root hash
}
build merkle tree on top of the saved root hashes
send root commitment to verifier
```

### First challenge

 * Verifier randomly selects **l0** vertices, sends their IDs to prover and waits for proof.
 * Prover pebbles the graph again the same way as the first time except that it rewrites initial labels **V0** with labels **Vk**.
```
pebble the graph again
for each requested vertex {
    send labels of the vertex and its sources to verifier
    
}
replace labels of the first layer with the ones of the last layer
send root commitment to verifier
```
 * Verifier checks the proof
```
for each requested vertex {
    compute hash of sources of the vertex
        compare computed hash with label of the vertex
        
}
compare root commitment with the one received in response to the first challenge
```

### Persistent challenge

 * Prover generate hashes of labels **V0** and sends them to verifier
 * Verifier on a timely basis randomly selects IDs of labels to verify and sends them to prover.
 * Prover sends requested labels to verifier
 * Verifier generate hash of each received label and compares it with the hash received initially.

### Open questions

 * Register on-boarding verifier in blockchain.
 * What if verifier went off-line? Pick another one and repeat pebbling game?
 * Does disappeared verifier require to be punished?
 * If a node contracted a part of its space for storage services, the remaining space is not necessarily require running pebbling game again. Instead verifier can be notified to not include in challenge those labels that occupy space reserved for clients. But is there a way to recover labels after the space was given back?



