import msg from '../src/index'

describe('Messenger', () => {
  describe('#on', () => {
    it('should subscribe to callbacks', () => {
      const messenger = msg.createInstance()
      const hello = () => 'world'
      messenger.on('click', hello)
      expect(messenger.subscriptions.click.length).toEqual(1)
      expect(messenger.subscriptions.click[0].callback).toEqual(hello)
    })
  })
  describe('#off', () => {
    it('should unsubscribe to callbacks', () => {
      const messenger = msg.createInstance()
      const hello = () => 'world'
      messenger.on('click', hello)
      expect(messenger.subscriptions.click.length).toEqual(1)
      expect(messenger.subscriptions.click[0].callback).toEqual(hello)
      messenger.off('click', hello)
      expect(messenger.subscriptions.click.length).toEqual(0)
    })
  })
  describe('#send', () => {
    it('should send to subscriptions', () => {
      const messenger = msg.createInstance()
      let value = 0
      const increment = function (inc) { value = value + inc }
      messenger.on('click', increment)
      messenger.send('click', 3)
      expect(value).toEqual(3)
    })
  })
  describe('#unset', () => {
    it('should unset subscriptions', () => {
      const messenger = msg.createInstance()
      messenger.unset('click')
      expect(messenger.subscriptions.click.length).toEqual(0)
    })
  })
})
