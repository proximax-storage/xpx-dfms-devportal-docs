---
id: accepted
title: Accepted Contract
---

## Requirements

- IDE or text editor
- Have one [replicator](../../roles/replicator.md) node
- Have one [Drive](../../built_in_features/drive/overview.md) contract

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
sub, err := cnt.Accepted(context.Background())
if err != nil {
	return err
}
defer sub.Close()

for {
    //Get next contract
	ctr, err := sub.Next(context.Background())
	if err == io.EOF || err == context.Canceled {
		return nil
	} else if err != nil {
		return err
	}

	//Print contract
    fmt.Println(ctr)
}
```
