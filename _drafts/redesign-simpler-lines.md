---
date: 2021-04-04 23:13:06 +0800
tags: []
layout: posts
title: 'Redesign: Simpler Lines'
categories: ux-design

---
I have always been inspired by simple and focused experiences ([post on understated design]()) and today I present my take on the minimal website.

Also, I came across a few design and tech challenges. Here are a few learnings:

### Designing in monochrome

Since colours are non-existent, there are three remaining ways to draw attention: (1) emphasis, (2) value and (3) expectation. I used bold text (1) and bordered lines (2) to define things that command attention. And lastly, I placed buttons where people expect them: on the bottom of components. This was the outcome:

![](/uploads/redesign-1.png)

### Didn't play well with Bootstrap

I found this design to be antithetical to the premise of helper-css libraries like Bootstrap. Things that were predefined in Bootstrap such as (1) smart padding, (2) border radii, (3) gutters had to be painstakingly undone in order to get the lines to look the way they look.

### Applying the DRY principle

Don't Repeat Yourself. Being aware about this helped me to structure my files slightly more meaningfully, so that I could exploit the 'includes' and 'mixins'. I found slightly better clarity in the way that I planned out the site and its css.