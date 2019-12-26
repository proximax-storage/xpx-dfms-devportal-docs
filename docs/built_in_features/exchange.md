---
id: exchange
title: Exchange Market
sidebar_label: Overview
---

## Overview
Any user can select a suitable offer and [exchange](exchange.md) its [mosaics](../getting_started/economy.md#mosaics) for others using ProximaX Exchange Market. The market always has the ProximaX permanent offer for buying and selling [SM](../getting_started/economy.md#sm) and [SO](../getting_started/economy.md#so). Also, the user can create its own offer.
> **Note** \
There is a possibility to [exchange](exchange.md) [XPX](../getting_started/economy.md#xpx) to [SO](../getting_started/economy.md#so) or [SM](../getting_started/economy.md#sm), but there is no opportunity to [exchange](exchange.md) [SO](../getting_started/economy.md#so) to [SM](../getting_started/economy.md#sm) or vice versa.

The [exchange](exchange.md) mechanism involves two types of actors with the following intentions:
1. The Seller offers to [exchange](exchange.md) M mosaic units for N [XPX](../getting_started/economy.md#xpx). The formed price will be equal to M/N.
2. The Buyer is interested in buying M units of [mosaics](../getting_started/economy.md#mosaics) at a price of no more than p [XPX](../getting_started/economy.md#xpx) per mosaic.
The common structure of the [exchange](exchange.md) offer consists of:
- **Type**\
Type of the offer (*BuyOffer* or *SellOffer*). \
- **Mosaic**\
Type of [mosaics](../getting_started/economy.md#mosaics) and its amount. \
- **Cost**\
Cost of the offer.

### SellOffer
During the work, any user (in this case, the Seller) earns [mosaics](../getting_started/economy.md#mosaics) according to its role (e.g., [replicator](../roles/replicator.md)), so it can offer the price and sell [mosaics](../getting_started/economy.md#mosaics). After creating the *SellOffer*, the specified number of Mosaic is deducted from the Seller’s Account. As long as this offer exists, any Buyer can agree with the offer and buy [mosaics](../getting_started/economy.md#mosaics). When the *SellOffer* time expires, unsold [mosaics](../getting_started/economy.md#mosaics) are returned to the Seller’s account.

### BuyOffer
The process of buying is similar to the *SellOffer* process. The only difference is the transaction type *BuyOffer* instead of *SellOffer*
>**Note** \
If any user creates *SellOffer*, the other interested users cannot buy less than 1 Mosaic (Example 1). In another case, when the user creates buyOffer and another interested user transfers more than the cost of 1 Mosaic, it gets 1 Mosaic anyway (Example 2).

>**Example 1** \
If 1 [XPX](../getting_started/economy.md#xpx) cost 5 [SO](../getting_started/economy.md#so) and Buyer transfers less than 5 [SO](../getting_started/economy.md#so), he will get nothing. \
**Example 2** \
If 1 [XPX](../getting_started/economy.md#xpx) cost 5 [SO](../getting_started/economy.md#so) and Seller transfers more than 5 and less than 10 [SO](../getting_started/economy.md#so) he gets 1 [XPX](../getting_started/economy.md#xpx) anyway.