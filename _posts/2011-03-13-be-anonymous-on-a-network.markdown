---
comments: true
date: 2011-03-13 00:43:45
layout: post
slug: be-anonymous-on-a-network
title: Be Anonymous on a network
wordpress_id: 151
categories:
- How-To-Stuff
tags:
- hacking
- networking
---

Do you know, your entire browsing history is logged by your [Internet service provider](http://en.wikipedia.org/wiki/Internet_service_provider) and whatever illegal you do or watch online can be proved against you in the court of law. Here, is a simple trick to stay anonymous on the [hotspot](http://en.wikipedia.org/wiki/Hotspot_(Wi-Fi)) (WI-FI) you are connected to. This is assuming that your service provider does dynamic allocation of IP addresses and does not have a mapping between [MAC address](http://webopedia.com/TERM/M/MAC_address.html)<!-- more --> and [IP address](http://en.wikipedia.org/wiki/IP_address) to give you the Internet gateway. In case you do not know whether that is the case with you, I guess you can try the trick and if your Internet goes down then the trick was not for you.




To achieve anonymity, you would be changing the MAC address of your laptop. There are thousands of free tools available to do that which mostly work on versions till Windows XP. One of my favourite is [Technitium](http://tmac.technitium.com/). But for Windows Vista and Windows 7, automatic MAC address changers fail, idk why!! So here is a little work-around that I figured out on [Stackoverflow](http://stackoverflow.com). Let's change it manually by editing our registry.





	
  * Goto Start menu, type '_run_'

	
  * Type '_regedit_' to launch the registry editor.

	
  * On the left hand side panel click on _My Computer_ and then navigate to the location below.

	
  * _HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Class\{4D36E972-E325-11CE-BFC1-08002BE10318}_

	
  * There you would find a series of numbers starting from _0000_. Click on each of them until you find out the specific network type you are connected to, to access the Internet. We are interested in the '_DriverDesc_' key field for the moment. In my case, it was 0007 under which I could see my Wireless card name.

	
  * Next, '_Network Address_' field shows you the MAC address of your machine.![registry editor snapshot](/images/posts/reg.gif)

	
  * If you know something about computer networking, you must be knowing that MAC address cannot be changed because it's imprinted on the [NIC](http://en.wikipedia.org/wiki/Network_interface_controller) and hence, is permanent. 

	
  * What we are going to do here is a spoof. Your MAC address has been registered against your name everywhere. So now if we change MAC address somehow, we are no longer associated with this computer.

	
  * Right Click on the '_Network Address_' field and Click _Modify_.

	
  * Enter 12 hexadecimal digits (like 123456789ABC) under the following constraints: Do not repeat sets (for e.g. do not try 121234345656) and Do not start with 00. Preferably, start with 12(well tested, after all, all you want is anonymity.)

	
  * Hit return and close the registry editor.

	
  * Next, Goto _Control Panel\Network and Internet\Network Connections_

	
  * Disable the Network Adapter you are connected to and then re-Enable it.

	
  * Now, let us try whether we could successfully spoof up the MAC address of our computer or not.

	
  * Goto _Start\run_ and type '_cmd_'

	
  * Type '_ipconfig /all_'

	
  * Scroll down the window to find out your network adapter configuration![command prompt snapshot](/images/posts/cmd.gif)

	


If the network address you specified in the registry matches to the one shown in the cmd prompt, then congratulations you have successfully gone anonymous on your network.

