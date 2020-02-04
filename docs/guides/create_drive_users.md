---
id: create_drive_users
title: Create Drive Users
sidebar_label: Create Drive Users
---

## Requirements
- IDE or text editor
- ProximaX Catapult SDK

## Create owner
```go
privateKey := "some id"
//create owner
owner, _ := client.NewAccountFromPrivateKey(privateKey)
fmt.Println("Onwer account: ", owner.String())
```

## Create replicator
```go
privateKey := "some id"
//create replicator
replicator, _ := client.NewAccountFromPrivateKey(privateKey)
fmt.Println("Replicator account: ", replicator.String())
```