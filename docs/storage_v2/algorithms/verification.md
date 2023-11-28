---
id: verification
title: Verification
---

## Overview
Storage Verifications are executed in a “many-to-many“ style that means that during the verification each Replicator verifies all others.
In terms of the Verifications, the Replicator can play two roles:

 - Prover - a Replicator that proves that it stores data
 - Verifiers - Replicators that check whether Prover stores data

Verifications will be execute regularly but randomly. The Status of the Verification for each Prover is defined as the median of the Replicators' opinions.
