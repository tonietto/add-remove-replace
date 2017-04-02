# add-remove-replace

[![Build Status](https://travis-ci.org/tonietto/add-remove-replace.svg?branch=master)](https://travis-ci.org/tonietto/add-remove-replace)

Simple library to add, remove or replace content inside strings.

## Usage

  Install it with `npm install add-remove-replace`.

  Import it with

```javascript
import addRemoveReplace from 'add-remove-replace';

addRemoveReplace.add('123', 'String'); // 123String
```

  Or import directly `add`, `remove` or `replace`:

```javascript
import { add, remove, replace } from 'add-remove-replace';

add('123', 'String'); // 123String
```

## Functions

### add

###### add(content: string, target: ?string, atBeginning: boolean = true)

```javascript
// add 123 at the beginning
add('123', 'String'); // '123String'

// add 123 to the end
add('123', 'String', false); // 'String123'
```

### remove

###### remove(content: string, target: ?string)

```javascript
// remove all 123
remove('123', '123String'); // 'String'
```

### replace

###### replace(content: string, newConten: string, target: ?string)

```javascript
// replace all 123
replace('123', '_', '123String'); // '_String'
```
