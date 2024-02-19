---
id: overview
title: Verifier Overview
sidebar_label: Overview
---

## Public Verifiability
Often in decentralized networks, it is required that the verification algorithm should support public verifiability which means that the Network can verify that the node really stores the data. Although the given algorithm allows introducing public verifiability, we do not need to implement this since verifications are made by the Replicators of the same Drive.

There are two roles of nodes in terms of Storage Verifications:
 - Prover - a Replicator that proves that it stores data;
 - Verifiers - Replicators that check whether the Prover stores data.

 The verification process ensures that Replicators in the system are actively performing and storing data properly. 
 There are two main scenarios the process addresses:

### Confirmed Storage State:

 - Replicator is in the Confirmed Storage State if it has approved the last modification.
 - Replicators not in the Confirmed Storage State for a long time are removed from the Drive.

### Approved Drive State:

 - Replicator should store the approved Drive State.
 - Regular Storage Verifications are introduced to check this.

### Storage Verifications:

Executed in a "many-to-many" style, where each Replicator verifies all others in the same Shard.

### Replicator roles:
 - Prover proves it stores data.
 - Verifier checks if the Prover stores data.

### Verification Frequency:

 - Verifications start after approving a "zero" modification.
 - Should be executed regularly but randomly to ensure fairness.
 - Frequency determined based on block generation time, expected intervals between Verifications, and time needed to generate the current block.

### Pending Verification:

 - Verification is pending if not canceled and initiated less than minutes ago.
 - Only Confirmed Storage State Replicators by the Verification start are verified and verify others.

### Verification Process:

 - Verifications conducted via Verifier-Prover Protocol.
 - Verifier expects Prover's response within minutes from the start.
 - If no/correct response, Verifier votes unsuccessful.
 - Verifiers express opinions in EndDriveVerificationTransaction.

### Verification Result:

Prover's status defined as the median of Replicators' opinions.
If status is Failure, LeaveDriveEvent is generated for the Prover.

### Deposit Slashing:

Storage Deposit slashing for Prover if Verification Status is Failure.
Storage Deposit slashing transferred to Drive account for Replicator Upload.

### Billing Period:

If first Verification in a new period, unspent verifications from the previous period added.

### Verification Payment:

Drive Owner pays for verifications through VerificationPaymentTransaction.
Feedback fee proportional to the number of prepaid verifications.