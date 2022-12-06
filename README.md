<p align="center">
    <a href="http://www.dkyung213.kr">
    	<img src="http://cdn1.dkyung213.kr/profile/logo-transparent.png" alt="DKYUNG213 logo" width="200" height="200">
    </a>
</p>
<h3 align="center">Inov</h3>
<p align="center">
  <!-- Sleek, intuitive, and powerful front-end framework for faster and easier web development.
  <br> -->
  <a href="#inov"><strong>Explore Inov »</strong></a>
  <br>
  <br>
  <a href="http://www.dkyung213.kr/">Official</a>
  ·
  <a href="http://team.dkyung213.kr/?type=github&id=inov&path=issues%2Fnew%2Fchoose">Report bug</a>
  ·
  <a href="http://team.dkyung213.kr/?type=github&id=inov&path=issues%2Fnew%2Fchoose">Request feature</a>
</p>

[![GitHub](https://img.shields.io/github/license/dkyung213team/inov)](http://team.dkyung213.kr/?type=github&id=inov&path=blob/main/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/dkyung213team/inov)](http://team.dkyung213.kr/?type=github&id=inov&path=releases)
[![npm](https://img.shields.io/npm/v/inov)](http://team.dkyung213.kr/?type=npm&id=inov&path=)

## Table of Contents

- [Quick Start](#quick-start)
- [CDN Links](#cdn-links)
- [How to Use](#how-to-use)
  - [`inovCopy()`](#inovcopy)
  - [`inovLinkTo()`](#inovlinkto)
  - [`inovGetParam()`](#inovgetparam)
  - [`inovControlCookie()`](#inovcontrolcookie)
- [Copyright and License](#copyright-and-license)

## Quick Start

Get started by including CSS and JavaScript via CDN without the need for any build steps.

1. Create a new `index.html` file in your project root.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>Inov demo</title>
     </head>
     <body>
       <h1>Hello, world!</h1>
     </body>
   </html>
   ```

2. Include CSS and JS.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>Inov demo</title>
     </head>
     <body>
       <h1>Hello, world!</h1>
       <script src="https://cdn.jsdelivr.net/npm/inov@1.1.4/dist/js/inov.js"></script>
     </body>
   </html>
   ```

## CDN Links

As reference, here are our primary CDN links.

| Description | URL                                                     |
| ----------- | ------------------------------------------------------- |
| JS          | https://cdn.jsdelivr.net/npm/inov@1.1.4/dist/js/inov.js |

## How to Use

Examples and usage guidelines for creating a wide variety of services.

---

### `inovCopy()`

`inovCopy(value)`

The value will be copied to the clipboard.

#### Parameter details

| Parameter | Type   | Details                    |
| --------- | ------ | -------------------------- |
| value     | String | set the value to be copied |

---

### `inovLinkTo()`

`inovLinkTO(httpsYorN, urlOrigin, urlPathName)`

You can link to other page by using `inovLinkTo()` function.

#### Parameter Details

| Parameter   | Type   | Details                 |
| ----------- | ------ | ----------------------- |
| httpsYorN   | String | set `http` or `https`   |
| urlOrigin   | String | set `location.host`     |
| urlPathName | String | set `location.pathname` |

---

### `inovGetParam()`

`inovGetParam(name)`

You can find parameter value by using `dkGetparam()` function.

#### Parameter Details

| Parameter | Type   | Details        |
| --------- | ------ | -------------- |
| name      | String | Parameter Name |

---

### `inovControlCookie()`

`inovControlCookie(name, value)`

You can change cookie values by using `inovControlCookie()` function.

#### Parameter Details

| Parameter | Type   | Details      |
| --------- | ------ | ------------ |
| name      | String | Cookie Name  |
| value     | String | Cookie Value |

## Copyright and License

Code and documentation copyright 2022 Dokyung Kim. Code released under the [GPL-3.0 License](http://team.dkyung213.kr/?type=github&id=inov&path=/blob/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by-nc-nd/4.0/).
