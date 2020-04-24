---
date: 2020-04-23 00:18:04 +0800
layout: posts
title: 'Daily UI: Credit Card Checkout'
categories: ux-design

---
Checkout experiences can involve a surprisingly large number of tasks. Some companies try to do too much, so they trip on their self-imposed complexity. Some examples would be getting users to purchase some up-sells, subscribe to post-paid third party services (like a warranty), apply multi-conditional discounts-on-discounts, etc. When all the user wants to do is to buy a potato.

This checkout experience simplifies the realities of creating a checkout experience. In real life, marketing and sales will tend to throw around simple-sounding, but complicated or unexecutable ideas. And it is your job to recognise and call out these bad ideas.

This UI challenge was the straight-forward implementation: Choose your checkout items, , accept our Terms Of Service, tell us where you to send it to, pay us, get your potato.

![](/uploads/checkout-preview-2.png)

## Persistent Information

Of all the information in a check out, a persistent order summary makes for a good experience. Most check out experiences do this, but some companies grow the order summary into it's own CVS receipt, which defeats the purpose of a summary.

## Success States

A successful sign up would trigger a toastbox success alert. The user will be updated about the need to verify his account through an email from Roll-Box.

## Soft Error States

Error states in the Sign Up flow must be informative and rectifiable by the user. Similarly, when the primary fields are not complete, the primary action must be disabled. These UI will guide the user out of the typical errors in a sign up experience such as:

* Name is wrong (_too short, unicode characters, etc._)
* Email address is wrong (_not unique, not following the email regex, etc._)
* Password is wrong (_too short, too common, etc._)
* Toilet Roll Type is wrong (_innie-s are not accepted_)

## Style

I had a lot of fun with this style. There is an enjoyment in this casual lineal art style and playful colour scheme. I don't think I learnt anything from a UI perspective. But from a purely aesthetic and layout perspective, I learnt a lot.

1. When using flashy and strong colours, ensure that the main colours _complement but do not drown_ out the informational colours. In this case, information colours are used for the primary button colour and error colour. This can be mitigated by ensuring that informational colours are kept sufficiently contrasty or alone in their specific colour space.
2. When using lined UI, big lineal icons may appear to be clickable. The workaround is to keep lineal icons small, tiled or clustered.