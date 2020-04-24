---
date: 2020-04-23 00:18:04 +0800
layout: posts
title: 'Daily UI: Credit Card Checkout'
categories: ux-design

---
Checkout experiences can involve a surprisingly large number of tasks. Some companies try to do too much, so they trip on their self-imposed complexity. Some examples would be getting users to purchase some up-sells, subscribe to post-paid third party services (like a warranty), apply multi-conditional discounts-on-discounts, etc. When all the user wants to do is to buy a potato.

This checkout experience simplifies the realities of creating a checkout experience. In real life, marketing and sales will tend to throw around simple-sounding, but complicated or unexecutable ideas. And it is your job to recognise and call out these bad ideas.

This UI challenge was the straight-forward implementation: Choose your checkout items, , accept our Terms Of Service, tell us where you to send it to, pay us, get your potato.

![](/uploads/checkout-preview-3-1.png)

## Persistent Information

A persistent order summary makes for a good experience. Most check out experiences do this, but some companies grow the order summary into it's own CVS receipt, which defeats the purpose of a summary.

## Checkout

The checkout page I decided on is common. I thought it would be neat to have a scrollbar for the main card because it kept my layouts consistent. In hindsight, I would not do that because as the main card grows in content, a lot of content would be hidden beneath a secondary interaction that users may miss. Also, two scrollbars on mobile is generally not a good experience.

![](/uploads/checkout-select-2.png)

## Shipping

![](/uploads/checkout-shipping.png)

## Payment

![](/uploads/checkout-payment.png)

## Style

I had a lot of fun with this style. There is an enjoyment in this casual lineal art style and playful colour scheme. I don't think I learnt anything from a UI perspective. But from a purely aesthetic and layout perspective, I learnt a lot.

1. When using flashy and strong colours, ensure that the main colours _complement but do not drown_ out the informational colours. In this case, information colours are used for the primary button colour and error colour. This can be mitigated by ensuring that informational colours are kept sufficiently contrasty or alone in their specific colour space.
2. When using lined UI, big lineal icons may appear to be clickable. The workaround is to keep lineal icons small, tiled or clustered.