---
comments: true
date: 2012-03-18 21:16:34
layout: post
slug: quick-thoughts-on-responsive-web-development
title: Quick thoughts on Responsive Web Development
wordpress_id: 212
categories:
- How-To-Stuff
---

A quick _What is_ Responsive Development? From what I feel after hands on experience - **Content is the King**. Make sure the core content of your website if visible no matter what the view-port size is. Rest is just creativity. _What_ do you want to show is prime. _How_ you want to show is creativity and constitutes the _Responsiveness_ of the site.

Responsive web is catching everyone by storm in the web development industry. There _used to be a time_ when clients would ask for a _mobile version_ of their website. You hit [google.com](http://google.com) and you are redirected to [m.google.com](http://m.google.com). Time fly's by! It would be really stupid of anyone to ask for a mobile website now. Yes, really. Were you redirected to m.aakashgoel.com or any such stupid domain when you hit [aakashgoel.com](http://aakashgoel.com)? No. How did the look and feel of the site change when you came from desktop environment to the iPads to iPhones to Android to tablets? The magic lies in **[Media Queries](http://mediaqueri.es/)**.

I shall not be doing any preaching stuff here because there are some amazing resources out there that will help you several degrees more. First up, lets focus on how easier it becomes to make a site _cross-device_ compatible. Secondly, lets see how I did whatever weird stuff happens on this site when you re-size your browser window. Go ahead and try it if you didn't do it before going any further.

**How easy?**

How about just a line of CSS that tells the browser which styles to render? Beauty! One line of CSS grabs the browser window resolutions, device dimensions. Now it's all in your hand. Do whatever you can do on that viewport. Since, I basically didn't want the _mobile_ viewers to see the _sticky notes_ that desktop users see, I changed the styles for how my home page would look. Then, there's just too much gutter space due to the _[lined paper](http://lea.verou.me/css3patterns/#lined-paper)_ pattern in the background. The only choice was to scrap off the background and present it in a neat black and white format on mobile devices which enhances readability. The comments section was just too big to accommodate for mobile device. Had to be restyled too. Concept it simple. Grab every element and decide how you want it to appear on different view-ports depending upon the importance of its content. Easy stuff, right?

**How to do?**

If you're curious enough, check out the source code of _styles.less_ and find the **@media** and everything that follows. I would however list out some of the awesome resources that were helpful to me during development.



	
  * [Chris Coyier's post on using available space](http://css-tricks.com/css-media-queries/)

	
  * [A List Apart's post on Responsive Web Design](http://www.alistapart.com/articles/responsive-web-design/)

	
  * [Mozilla Development Network's Official Documentation](https://developer.mozilla.org/en/CSS/Media_queries)


P.S If there are any CSS gurus going through the code, do take your valuable time to raise a finger at my crappy code.
