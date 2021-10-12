---
title: Using a Custom Profile with Firefox
---

If you're working on something in FxA involving Firefox you may need to configure the browser to suit your development environment.

Run `yarn start firefox`, which will open an instance of Firefox. It is configurable with the following environment variables:

| Variable | Values | Default |
| ---- | --------------- | --- |
| `FXA_ENV` - The API endpoints Firefox should use | `local`, `latest`, `stable`, `stage` | `local` |
| `FXA_DESKTOP_CONTEXT` - The [`context`](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/query-params.md#context) in which FxA is being run | `fx_desktop_v3`, `fx_fennec_v1`, `fx_ios_v1`, `oauth_webchannel_v1` | `fx_desktop_v3` |
| `FIREFOX_BIN` - Path to Firefox bin file | | `/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin` |
| `FIREFOX_DEBUGGER` - Open the [Browser Toolbox](https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox) | `true`, `false` | `false` |
| `FXA_E10S` - Enable [Electrolysis](https://wiki.mozilla.org/Electrolysis) | `true`, `false` | `false` |
