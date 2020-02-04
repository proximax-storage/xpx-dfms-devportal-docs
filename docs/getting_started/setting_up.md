---
id: setting_up
title: Setting Up
---
This guide explains what you need to install the software and how to start using the [DFMS](what_is.md).

## API
API provides the necessary interfaces which should be used for implementing entities, like nodes (replicator and client), network, drive and drive file system.

## HTTP Library
Also, there is the HTTP library that implements API interfaces and simplifies making new requests.

## DFMS node
First of all, you need to download the [DFMS](what_is.md) binary file according to your OS. After downloading you should run the dfms (or dfms) demon. That's all, you in.

### CLI
There are two types of CLI:
- [dfms](../cli/dfms/dfms.md) - used by the client ([owner](../roles/owner.md));
- [dfmsr](../cli/dfmsr/dfmsr.md) - used by the [replicator](../roles/replicator.md).
To run the [client](../roles/owner.md) demon use
```console
$ dfms --key=<your_private_key>
```
To run the [replicator](../roles/replicator.md) demon use
```console
$ dfmsr --key=<your_private_key>
```

>**Note** \
To get more information about any command and its flags you need to use `-h` flag, for example `dfms contract -h`

Both have similar commands to interact with the network. For more details, see the [CLI](../cli/dfms/dfms.md) item. Also, see how to [connect to the other nodes](../cli/dfms/net.md#dfms-net-connect).

### More commands 
- For [dfms](../cli/dfms/dfms.md)
- For [dfmsr](../cli/dfmsr/dfmsr.md)
