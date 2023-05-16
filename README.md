# My Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

## Table of contents

- [Deployed application](#deployed-application)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)

## Deployed application

## Screenshots

### Home page

![screenshot of the home page](./client/src/images/screenshot-home.png)

### Contact me page

!![screenshot of the contact form](./client/src/images/screenshot-contact.png)

## Credits

In order to be able to send emails from the contact form, I used [EmailJS](https://www.emailjs.com/) and followed this [tutorial](https://www.youtube.com/watch?v=bMq2riFCF90&t=8s&ab_channel=ChaooCharles). I then run into some problems with dotenv not working with Webpack v5 so I had to create a server to hide my API keys. I followed this [article](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/) from freeCodeCamp.Lastly, I was having issues with the API not reading the .env file so I changed the execution path as recommended in [this](https://stackoverflow.com/questions/42335016/dotenv-file-is-not-loading-environment-variables) Stack Overflow post.

[This](https://stackoverflow.com/questions/41938718/how-to-download-files-using-axios) post on Stack Overflow helped me figure out how to download files using Axios.

In order to get the modal to work with React, I had to read some articles that explained how to write a function to show/hide the modal. I found [this](https://react-bootstrap.github.io/components/modal/) one especially helpful.

I used the same [site](https://react-bootstrap.github.io/components/offcanvas/) to work out the off-canvas navbar.

## License

MIT License

Copyright (c) 2023 sarasg89

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
