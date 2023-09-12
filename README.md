# URL Redirect Tracker

The Redirect Tracker is a Node.js and Express application that helps you trace the path of a URL redirection. It's especially useful for handling URL shortener links and finding out where a link redirects you before you visit the original website.

## About

The Redirect Tracker is a lightweight web application built with Node.js and Express. It's designed to solve the common problem of not knowing where a URL will take you when it's a shortened link or when you encounter multiple redirects. With this tool, you can input a URL, and it will provide you with a complete history of redirects, so you can make informed decisions before clicking on a link.

## Features

- Trace the path of URL redirects.
- Handle URL shortener links with ease.
- Understand where a link will take you before visiting the original website.
- Lightweight and easy-to-use.

## Getting Started

Follow these instructions to set up the Redirect Tracker on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/10cyrilc/url-redirect-tracker.git
```

2. Change to the project directory:

```bash
cd url-redirect-tracker
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

Now send a post request to `http://localhost:3000/track` with the url parameter in the body as json.

```json
{ "url": "https://example.com" }
```

## Contributing

If you find issues or have ideas for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT LICENSE](./LICENSE.md)

## Authors

- [@10cyrilc](https://www.github.com/10cyrilc)
