# twitter-time

A straightforward npm package to convert ISO format dates to Twitter-like date representation.

![twitter](./assets//images/twitter.jpeg)

The package exposes two functions:

- **getTwitterTime**:
  - For getting twitter date formation: _1h, 1m, 1s, 1d_.
  - Requires providing valid ISO formatted date either with time ot not, e.g: "2023-07-15T08:45:30.123Z" or "2023-07-15".
- **getTime**:
  - For getting only time: _hh:mm_.
  - Requires providing **time only**, e.g: "08:45:30.123Z".

## Installation

```bash
npm install twitter-time
```

## Usage

getTwitterTime

```js
const getTwitterTime = require("twitter-time").getTwitterTime;

const isoDate = "2023-07-15T08:45:30.123Z";
const twitterLikeDate = getTwitterTime(isoDate); // 15 Jul 2023
```

getTime

```js
const getTime = require("twitter-time").getTime;

const isoDate = "08:45:30.123Z";
const twitterLikeDate = getTime(isoDate); // 08:45
```

## License

This project is licensed under the MIT License.
