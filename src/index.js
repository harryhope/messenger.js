class Messenger {
  constructor () {
    this.subscriptions = {}
  }

  createInstance () {
    return new Messenger()
  }

  set (event) {
    this.subscriptions[event] = this.subscriptions[event] || []
  }

  unset (event) {
    this.subscriptions[event] = []
  }

  on (event, callback, context = null) {
    this.set(event)
    this.subscriptions[event].push({callback, context})
    return this
  }

  off (event, callback) {
    this.set(event)
    this.subscriptions[event] = this.subscriptions[event]
      .filter(sub => callback !== sub.callback)
    return this
  }

  send () {
    const [event, ...values] = arguments
    this.set(event)
    this.subscriptions[event]
      .slice()
      .forEach(({callback, context}) => {
        callback.apply((context || global), values)
      })
    return this
  }
}

const messenger = new Messenger()
module.exports = messenger

