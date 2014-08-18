RecoverTabs
===========

The Safari extension you have always wished for!

RecoverTabs keeps track of tabs as you close them. It replicates the Cmd+Shift+T behavior of other Mac web browsers to then reopen them.

Download
--------
[Download the extension from here.](https://s3-us-west-1.amazonaws.com/antrikshyprojects/RecoverTabs.safariextz) It comes with auto-updates, so any improvements are pushed out automatically.

You can always download the extension from this repository. But if you download from the link above, it will help me get an approximate download count.

Contribute
----------
Clone the repo, add the .safariextension folder to your extension builder, make any changes, test and send a pull request. However, remember to replace the .plist file inside this folder with the one in my directory and increment the version number inside appropriately (or ask me in the pull request message). This will make things easier and make sure that I don't sign the release version with your developer account.

Currently, the following improvements would be nice:
* Sometimes, the tab bar gets hidden when only one tab is open. Cmd+Shift+T is reserved for hiding and showing the tab bar.
* Add a way to prevent reopening of a tab if the same URL is open in another tab.
* Add a limit to number of saved URLs to prevent memory leaks in long browsing sessions. Purge first-in contents of the array as it grows.
* Extension malfunctions if tab reopened and closed rapidly.
