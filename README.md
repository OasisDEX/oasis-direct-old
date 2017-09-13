###Oasis Direct

Primary goal is to showcase how its possible to build a snappy and fast dapp, that has as few interaction steps as possible (key signing and password) and that utilizes integrated CDP margin trading and proxy contracts, and is optimized for metamasks crappy nodes. Making the user experience as braindead and idiot proof as possible is important, and the ux “flow” should be like reading a book with 3 pages/steps with a clear direction from first page to last.

Step zero: connect with metamask

If the user doesn’t have metamask connected a page like on oasisdex.com should show up telling them to fix their metamask

Step one: Create your account

Step one is a minimal page/“ux box” with a single button saying “create your proxy contract” (or account or something else). Below the button is a small description saying something like “a proxy contract allows you to deposit cryptocurrency to use for instant trading on oasis direct”, reassuring the user that this is the next step in the UX flow.

If the user has 0 or close to 0 ETH in his metamask account, there should be a warning above the button saying something like “warning, you need more ETH to pay for gas” - we should estimate the total amount of gas required for the full interaction since it will be quite gas intensive and always ensure the user has enough gas to complete the interaction and withdraw everything.

When clicking on the button, metamask is prompted to send a transaction to the proxy factory that creates your CDP leverage proxy contract. When metamask detects the transaction is pending on the blockchain, it sends you to the next step, turning over the page and presenting the user with a new UX box.

Step two: Fund your account

This is the “warning step” where the user decides what and how much of his assets he want to use on our app.

Step two can be completed in two ways. With a manual transaction or through his metamask account.

manual transaction: Now that the user has a proxy contract, the interface shows him one of those graphic unique identifier things, as well as the contracts address QR code, and the ethereum address with a button for easy copy to clipboard. As soon as metamask detects a transaction from any account going into the proxy contract with an amount of crypto above the dust level, it assumes the user has funded his account and moves on to step 3
Metamask transaction: Below the proxy contract information, there is a number input and a dropdown where the user can choose all of his assets in his metamask account (including native ETH) and decide how much of it he wants to send to his proxy contract. Once he sends a transaction the app moves to step 3

The user can also transfer a CDP to the proxy contract either externally or from his metamask account - if there are any CDPs owned by the metamask account they should show up in a list below the numerical input with a hotkey to “transfer this CDP to the proxy contract”

Step three: do your desired trade in one step and withdraw all funds from your proxy contract

This is where the magic happens and this step revolves around using a “search engine script” to translate the simplified commands that the user wants to do such as “dump all my ETH for sai” into an actual proxy contract set of commands to execute, and end with withdrawing all assets from the proxy contract to his metamask account.

for the mvp there are four types of interactions to consider

If the user has 100 SAI in his proxy contract:

There is a numerical input saying “how much sai do you want to use”, it’s filled to 100 by default.

other inputs are “what do you want to buy” (ETH by default, can be MKR) and “at what price” (by default is “market price”).

Final input is “do you want to use leverage” as a little checkbox. If the user selects this they can control a slider that goes from 1x to 2x, set on 2x by default.

At the bottom below the options is a button to confirm your trade. Clicking on this executes a set of transactions through the proxy contract according to the settings, and then a transaction sending the new tokens or the new CDP to the users metamask account.

If the user has ETH or W-ETH in their proxy contract, they will have 3 options for “what do you want to buy” SAI, MKR or ETH (margin trading)

If the user has MKR in their proxy contract they can buy SAI or ETH

If the user has a CDP in their proxy contract they can close it.

Step four: review

Step 4 happens after all the transactions are done and all assets have been returned to the users metamask account. Here there will be a detailed simple graphical explanation of what assets the users spent and what they obtained, and at what price points, as well as total gas costs, and data about their CDP including what price it will get liquidated at and its stability fee.