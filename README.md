# messenger.js
A simple publish/subscribe implementation for node and the browser.

## Installation
Use:
```
npm i @harryhope/messenger
```

## Usage
```js
import messenger from '@harryhope/messenger'

messenger.on('myEvent', name =>
  console.log(`Hello there, ${name}`)
)

messenger.send('myEvent', 'Elvis')
```

## API

#### messenger.on
Subscribe to an event/topic with a callback function.
```js
const myCallback = str => console.log(`Hello ${str}`)
messenger.on('hello', myCallback)
```

#### messenger.off
Unsubscribe to an event.
```js
messenger.off('hello', myCallback)
```

#### messenger.send
Broadcast a message to all subscribers of an event.
```js
messenger.send('hello', 'world')
// Displays 'Hello world' in the console.
```

## Development
To build the src just run `npm run build`.

Tests can be run with `npm test`.
