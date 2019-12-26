---
id: exchange
title: Exchange
---

## Requirements
- IDE or text editor
- ProximaX Catapult SDK
- Have one [owner](../roles/owner.md)

## Example
We want to create an offer for selling SO.
```go
newOffer, err := client.NewAddExchangeOfferTransaction(
    sdk.NewDeadline(time.Hour),
    []*sdk.AddOffer{
        {
            sdk.Offer{
                sdk.SellOffer,
                sdk.Storage(10000000),
                5000000,
            },
            sdk.Duration(100),
        },
    },
)
newOffer.ToAggregate(holder)
```