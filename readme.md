# letenv [![travis][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/ngryman/letenv.svg)](https://greenkeeper.io/)

[travis-image]: https://img.shields.io/travis/ngryman/letenv.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/letenv
[codecov-image]: https://img.shields.io/codecov/c/github/ngryman/letenv.svg
[codecov-url]: https://codecov.io/github/ngryman/letenv

> CLI environment variables loader.


*letenv* does what it advertises. The only difference between other `.env` loaders is that it can be used via `cli` and wrap a process passed as argument. This is really useful when you want to load environement variables along your test runner for example.


## Install

```sh
# cli
npm install -g letenv

# api
npm install --save letenv
```

## Usage

### CLI

```sh
letenv [command] [arguments]

# i.e
letenv nyc ava
```

### API

```javascript
require('letenv')()

// => process.env is now populated
```

## `.env` file

A classic key-value pair file:

```ini
NODE_ENV=test
WASABI=good
```

## License

MIT © [Nicolas Gryman](http://ngryman.sh)
