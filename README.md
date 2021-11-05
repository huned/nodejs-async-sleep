# Async Sleep for Node.js

Main repo: [https://github.com/huned/nodejs-async-sleep](https://github.com/huned)

An uncomplicated async sleep function for node.js.

**BREAKING CHANGE for v1.0.3+** v1.0.3+ is an es6 module. You must use it
with `import` syntax. If your project uses the CommonJS `require` syntax, you
should use v1.0.2.

## Overview

Features:

* uncomplicated
* no dependencies or bloat - it's literally one line of code
* familiar interface
* ESM

## Install

    # For ESM, use v1.0.3 or later
    npm install simple-async-sleep --save

    # For CommonJS, use v1.0.2
    npm install simple-async-sleep@1.0.2 --save

## Usage

    import asyncSleep from 'simple-async-sleep'
    await asyncSleep(1000) // sleep for 1s

## Author

[Huned Botee](https://github.com/huned)

## License

MIT
