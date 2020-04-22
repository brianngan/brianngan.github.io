---
date: 2020-04-23 00:18:04 +0800
layout: posts
title: 'Daily UI: Sign Up'
categories: ux-design

---
This UI challenge was straight-forward. Create a sign up flow for anything that you want. So I decided upon Roll-Box, a Greentech-toilet-paper-subscription-box service. Here is the CTO's introduction to the product:

> Want to hoard some cylinders in your fallout shelter? Want to build a paper fort? Want to TP somebody's house? Why not subscribe to Roll-Box today! Simply type in the promo code: FREETP to get your first month free!

![](/uploads/daily-ui-1-hero.png "Daily UI 1 Sign Up")

## Sign Up Flow

The sign up flow is straight-forward. Multiple sources of sign up CTA buttons that funnel the user to sign up. On successful sign up, we take the user through a quick personalisation and an onboarding guide.

![](/uploads/daily-ui-1-flat-1.png)

## Success States

A successful sign up would trigger a toastbox success alert. The user will be updated about the need to verify his account through an email from Roll-Box.

![](/uploads/daily-ui-1-flat-success.png)

## Soft Error States

Error states in the Sign Up flow must be informative and rectifiable by the user. Similarly, when the primary fields are not complete, the primary action must be disabled. These UI will guide the user out of the typical errors in a sign up experience such as:

* Name is wrong (_too short, unicode characters, etc._)
* Email address is wrong (_not unique, not following the email regex, etc._)
* Password is wrong (_too short, too common, etc._)
* Toilet Roll Type is wrong (_innie-s are not accepted_)

![](/uploads/daily-ui-1-flat-error.png)

## Style

I had a lot of fun with this style. There is an enjoyment in this casual lineal art style and playful colour scheme. I don't think I learnt anything from a UI perspective. But from a purely aesthetic and layout perspective, I learnt a lot. 

1. When using flashy and strong colours, ensure that the main colours _complement but do not drown_ out the informational colours. In this case, information colours are used for the primary button colour and error colour. This can be mitigated by ensuring that informational colours are kept sufficiently contrasty or alone in their specific colour space.
2. When using lined UI, big lineal icons may appear to be clickable. The workaround is to keep lineal icons small, tiled or clustered.  

![](/uploads/daily-ui-1-flat-style.png)