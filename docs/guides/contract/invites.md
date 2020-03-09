---
id: invites
title: Contract Invites
---

## Requirements

- IDE or text editor
- Have one [owner](../../roles/owner.md) node
- Have one [drive](../../built_in_features/drive/overview.md) contract

## Example

```go
//Some enviroment
var env cmds.Environment

//New api
cnt, err := APIContractReplicator(e)
if err != nil {
	return err
}

// ID of some contract
id := "baegaajaiaqjcahaxr4ry4styn74ronvr2nvfdmgxtrzyhsci2xqpw5eisrisrgn5"

id, err := drive.IDFromString(id)
if err != nil {
	return err
}

//New subscription
sub, err := cnt.Invites(req.Context)
if err != nil {
	return err
}
defer sub.Close()

for {
    //Get next invite
	drvInvite, err := sub.Next(req.Context)
	if err == io.EOF || err == context.Canceled {
		return nil
	} else if err != nil {
		return err
	}

	//Print drive contract
    fmt.Println(ctr)
}
```
