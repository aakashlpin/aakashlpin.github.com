---
date: 2013-03-14 23:16:00
layout: post
slug: visualizing-visits
title: Visualizing Visits
published: true
categories:
- Technology
---

Recently I got a chance to play around with a Mike Bostock's [D3 JS](https://github.com/mbostock/d3) and [Leaflet JS](http://leafletjs.com) as I had to implement a geo visualization at MineWhat. This is what I achieved in a couple of days with no prior experience of handling geographical data via javascript.

[![Visualizing Visits on aakashgoel.com since 1/1/11](/images/posts/visits.png "Visualizing Visits on aakashgoel.com since 1/1/11")](/images/posts/visits.png)

I had this idea couple of months back so without researching even a bit, I asked the lazy web for a solution. 

<blockquote class="twitter-tweet"><p>Is it possible to export the data from Google Analytics to static site generators like Jekyll ?</p>&mdash; Aakash Goel (@aakashlpin) <a href="https://twitter.com/aakashlpin/status/289436108188684288">January 10, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

This idea kind of passed until I had to deal with it yet again, at work! The task sounded simple. Allow the client to connect his Google Analytics account with our product and to start with, show the user visits on a map. Google has an amazing API [documentation](https://developers.google.com/analytics/devguides/reporting/core/v3/) for the Core Reporting API and it's pretty quick to start with it.

I was too much into D3 for the past few days so thought of building the whole map zoom in and out functionality by myself using data from [Natural Earth](http://www.naturalearthdata.com) and then parsing it to [geoJSON](www.geojson.org/) using [ogr2ogr](www.gdal.org/ogr2ogr.html). The shape files given by Natural Earth are of amazing resolution. Quantum GIS for Ubuntu comes in very handy to preview the shape files and to decide which attributes to keep for geoJSON. But, with great resolutions, comes great bytes. Each geoJSON file crossed past 10MB. Another project by Mike Bostock called as [topoJSON](https://github.com/mbostock/topojson) which encodes the topology came in very handy. It reduces the file size by close to 80%.

The whole building by myself thing turned out to be very difficult because of the amount of preprocessing required at the client level for each zoom in, zoom out. So, I scrapped the whole idea of reinventing the wheel and decided to go with Leaflet JS which surprisingly is an Open Source Project.

The amount of learning in this process was amazing. Hit me up on twitter if you would like to see a working demo of the whole thing. It's a work in progress but I would love to share some insights.

Cheers!