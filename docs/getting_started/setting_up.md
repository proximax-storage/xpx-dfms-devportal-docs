---
id: setting_up
title: Setting Up
---
This guide explains what you need to install the software and how to start using the [DFMS](what_is.md).
## DFMS node
First of all, you need to download the [DFMS](what_is.md) binary file according to your OS. Then you can run it.
## CLI
There are two types of CLI:
- [dfms](../cli/dfms/dfms.md) - used by the client ([owner](../roles/owner.md));
- [dfmsr](../cli/dfmsr/dfmsr.md) - used by the [replicator](../roles/replicator.md).
To run as the client you need to run 
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

### More commands 
- For [dfms](../cli/dfms/dfms.md)
- For [dfmsr](../cli/dfmsr/dfmsr.md)
