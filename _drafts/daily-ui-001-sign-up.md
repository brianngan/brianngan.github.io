---
date: 2020-04-23 00:18:04 +0800
layout: posts
title: 'Daily UI :: 001 Sign Up'
categories: ux-design

---
This UI challenge was straight-forward. Create a sign up flow for anything that you want. So I decided upon Roll-Box, a much needed toilet-paper-subscription-box service. "Want to hoard some cylinders in your fallout shelter? Want to build a paper fort? Want to TP somebody's house? Why not subscribe to Roll-Box today! Simply type in the promo code: FREETP."

![](/uploads/daily-ui-1-hero.png "Daily UI 1 Sign Up")

## Sign Up Flow

The sign up flow is straight-forward. Multiple sources of sign up CTA buttons that funnel the user to sign up. On successful sign up, we take the user through a quick personalisation and an onboarding guide.

![](/uploads/daily-ui-1-flat-1.png)

## Success States

A successful sign up would trigger a toastbox success alert. The user will be updated about the need to verify his account through an email from Roll-Box.

![](/uploads/daily-ui-1-flat-success.png)

## Soft Error States

Error states in the Sign Up flow must be informative and rectifiable by the user. Similarly, when the primary fields are not complete, the primary action must be disabled. These UI will guide the user out of the typical errors in a sign up experience such as:

* Name is wrong (too short, unicode characters, etc.)
* Email address is wrong (not unique, not following the email regex, etc.)
* Password is wrong (too short, too common, etc.)
* Toilet Roll Type is wrong (innie-s are not accepted)

![](/uploads/daily-ui-1-flat-error.png)