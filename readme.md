# letenv [![travis][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url]

[travis-image]: https://img.shields.io/travis/ngryman/letenv.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/letenv
[codecov-image]: https://img.shields.io/codecov/c/github/ngryman/letenv.svg
[codecov-url]: https://codecov.io/github/ngryman/letenv

> Loads environment variables from `.env` if present.


## Install

```bash
// cli
npm install -g letenv

// api
npm install --save letenv
```

## Usage

### CLI

```sh
letenv
```

### API

```javascript
require('letenv')()

// => process.env is not populated
```

## `.env` file

A classic key-value pair file:

```ini
NODE_ENV=test
WASABI=good
```

## License

MIT © [Nicolas Gryman](http://ngryman.sh)
