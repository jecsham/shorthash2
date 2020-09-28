# shorthash2
[![NPM](https://nodei.co/npm/shorthash2.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/shorthash2/)

[![Build Status](https://travis-ci.com/jecsham/shorthash2.svg?branch=master)](https://travis-ci.com/jecsham/shorthash2) [![Codecov branch](https://img.shields.io/codecov/c/github/jecsham/shorthash2/master.svg)](https://codecov.io/gh/jecsham/shorthash2) [![GitHub package.json version](https://img.shields.io/github/package-json/v/jecsham/shorthash2.svg)](https://github.com/jecsham/shorthash2/releases)

> Mainly based on [shorthash](https://github.com/bibig/node-shorthash) (apparently abandoned), by Bibig, **shorthash2** offers a small optimization in memory usage, small features, **typescript** declarations and is available for **browser** and **nodejs**.

+ A mini js lib to generate short, alpha-number, undecryptable and unique hash id from a long string (utf8 format).
+ Use shorthash2 when you want to encrypt a string like a movie name or a people name to a short, unique and url friendly id.
+ so with shorthash2, you can build an id-string map, instead of quering the id from db each time, you just calculate the id out on the fly. 
+ it's quite convenient in many conditions if you want to build a site like [书本画](http://shubenhua.com), a book search engine in China.

## Install
As NPM package:

`$ npm i shorthash2`

Or yarn...

`$ yarn add shorthash2`

## Usage


```javascript
import shortHash from "shorthash2";

shortHash('foobar@example.com');
// => Z1bL2tE

shortHash('my name is really big big and big...');
// => Z1TirWS

shortHash('万里长城永不倒。。。');
// => 2r6EFF

shortHash('和平');
// => 33NM

```