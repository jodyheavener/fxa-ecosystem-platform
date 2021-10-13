---
title: Local Emails with MailDev
---

[TODO: tutorial video]

If you're interested in receiving emails locally you can use [MailDev](https://www.npmjs.com/package/maildev) to intercept emails and display them in a local inbox.

Here's how to do it:

1. Install the MailDev CLI globally: `yarn global add maildev`
1. Assuming you have FxA running locally you'll need to stop the `inbox` service: `yarn pm2 stop inbox`
1. Start MailDev on port 9999. You may need to start it with `sudo` permissions: `sudo maildev -s 9999`
1. All emails will now be sent to the local inbox, which you can access at [http://localhost:1080](http://localhost:1080)

![MailDev inbox preview](./maildev-inbox.png)
