---
id: setting_up
title: Participate
---
This guide explains what software you need to install and how to start using the [Sirius Storage](what_is.md).

## PubSub

Before running the DFMS node the [PubSub lib](https://crypto.stanford.edu/pbc/howto.html) should be installed. Otherwise, you cannot use the DFMS.

## Sirius Storage nodes

It's important to understand that there are two types of storage nodes, Client and a Replicator in which the latter can have multiple roles, e.i verifier and executor. This two types are all in the same binary but each has it's own purpose.

- Storage Node Client is primarily used by the client to access different Sirius Storage file management commands. This is an intermediary tool to allow users to manage files on Sirius Storage platform which are then pushed (flushed) to replicators.

- Storage Node Replicators are primarily the replication node where content uploaded by the Sirius Storage node client is propagated. Replicators are inherintly verifiers and executors as well.

## Command Line Interface

There are two types of CLI:

- [dfms](../cli/dfms/dfms.md) - used by the client ([owner](../roles/owner.md));
- [dfmsr](../cli/dfmsr/dfmsr.md) - used by the [replicator](../roles/replicator.md).

To run as the client you need to run:

```console
$ dfms --key=<your_private_key>
```

To run as the [replicator](../roles/replicator.md) you need to run

```console
$ dfmsr --key=<your_private_key>
```

>**Note** \
To get more information about any command and its flags you need to use ‘-h’ flag, for example ‘dfms contract -h’

Both have similar commands to interact with the network. For more details, see the CLI item. Also, see how to connect to the other nodes.

### SuperContract

For the correct work with SC a user should install the [wabt](https://github.com/WebAssembly/wabt/tree/1.0.13). This toolkit needed for the correct compilation from **_\*.wat_** to **_\*.wasm_**. After instalation it should be added to the **_$PATH_** env var. More about wabt you can find by [reference](https://github.com/WebAssembly/wabt/tree/1.0.13).

### More commands

- For [dfms](../cli/dfms/dfms.md)
- For [dfmsr](../cli/dfmsr/dfmsr.md)


