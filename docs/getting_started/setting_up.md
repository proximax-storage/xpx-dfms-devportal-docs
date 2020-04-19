---
id: setting_up
title: Participate
---
This guide explains what software you need to install and how to start using the [Sirius Storage](what_is.md).

## Sirius Storage nodes

It's important to understand that there are two types of storage nodes, Client and a Replicator in which the latter can have multiple roles, e.i verifier and executor. This two types are all in the same binary but each has it's own purpose.

- Storage Drive Node is primarily used by the client to access different Sirius Storage file management commands. This is an intermediary tool to allow users to manage files on Sirius Storage platform which are then pushed (flushed) to replicators.

- Storage Replicator Node are primarily the replication node where content uploaded by the Sirius Storage node client is propagated. Replicators are inherintly verifiers and executors as well.

## Partipcate in the Storage network ecosystem

- Before running the DFMS node the [PubSub lib](https://crypto.stanford.edu/pbc/howto.html) should be installed. Otherwise, you cannot use the DFMS.

### Run a Storage Drive node
In order to run a storage drive node, we need to install the `dfms` client. There are several ways to do this:

#### Using docker:

Install `docker` and `git`
```
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sh get-docker.sh
$ sudo apt install git
```

Clone the onboarding repository (choose between mainnet and testnet <network> )
```
$ git clone https://github.com/proximax-storage/sirius-storage-<network>-onboarding.git // testnet
$ cd sirius-storage<network>-onboarding
```

At this point, we now have the entire binary on your local environment. We now need to run a few commands to properly participate as a Storage drive node.

Go to the onboarding document for further steps:

|Network|Link|
|---|---
|Test Network|https://github.com/proximax-storage/sirius-storage-testnet-onboarding/blob/master/drive/README.md
|Main Network|https://github.com/proximax-storage/sirius-storage-mainnet-onboarding/blob/master/drive/README.md

#### Using command line (available soon)
We can pull the new changes from the go-xpx-dfms repository. 
```
git clone https://github.com/proximax-storage/go-xpx-dfms.git
cd git-xpx-dfms
./install.sh
```

Run the storage drive node with the generate private key.

```
$ dfms --key=<your_private_key> // generate key via wallet
```
For more details about Storage drive node, go to [dfms](../cli/dfms/dfms.md) - used by the client ([owner](../roles/owner.md));

### Run a Replicator Node
In order to run a storage drive node, we need to install the [`dfmsr`](../cli/dfmsr/dfmsr.md). 

#### Using command line (available soon)
We can pull the new changes from the go-xpx-dfms repository. 
```
git clone https://github.com/proximax-storage/go-xpx-dfms.git
cd git-xpx-dfms
./install.sh
```
Run the storage replicator node with the generate private key.
```
$ dfmsr --key=<your_private_key> // generate key via wallet
```

For more details about Storage replicator node, go to [dfmsr](../cli/dfmsr/dfmsr.md) - used by the client [replicator](../roles/replicator.md)

>**Note** \
To get more information about any command and its flags you need to use `-h` flag, for example `dfms contract -h` or `dfmsr contract -h`
Both have similar commands to interact with the network. For more details, see the CLI item. Also, see how to connect to the other nodes.

### SuperContract
For the correct work with SC a user should install the [wabt](https://github.com/WebAssembly/wabt/tree/1.0.13). This toolkit needed for the correct compilation from **_\*.wat_** to **_\*.wasm_**. After instalation it should be added to the **_$PATH_** env var. More about wabt you can find by [reference](https://github.com/WebAssembly/wabt/tree/1.0.13).

### More commands

More commands are availabe via the links below.

- For [dfms](../cli/dfms/dfms.md)
- For [dfmsr](../cli/dfmsr/dfmsr.md)


