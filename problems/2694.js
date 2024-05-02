class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(event, callback) {
    if (!this.events.has(event)) this.events.set(event, []);

    const listeners = this.events.get(event);
    listeners.push(callback);

    return { unsubscribe: (() => {
      const index = listeners.indexOf(callback);

      if (index !== -1) listeners.splice(index, 1);
    })};
  }

  emit(eventName, args = []) {
    const emitEvents = this.events.get(eventName) ?? [];
    return emitEvents.map((cb) => cb(...args));
  }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
const sub1 = emitter.subscribe('eventOne', (...args) => args.join(','));
const sub2 = emitter.subscribe('eventOne', (...args) => args.join(','));

console.log(emitter.emit('eventOne', [1,2,3]));
sub1.unsubscribe();
console.log(emitter.emit('eventOne', [7,8,9]));


/*
 *
["EventEmitter", "subscribe", "subscribe", "emit", "unsubscribe", "emit"]
[[], ["eventOne", "function cb1(...args) { return args.join(','); }"], ["eventOne", "function cb1(...args) { return args.join(','); }"], ["eventOne", [1,2,3]], [1],  ["eventOne", [7,8,9]]]

Use Testcase
Output
[[],["subscribed"],["subscribed"],["emitted",["1,2,3","1,2,3"]],["unsubscribed",1],["emitted",[]]]
Expected
[[],["subscribed"],["subscribed"],["emitted",["1,2,3","1,2,3"]],["unsubscribed",1],["emitted",["7,8,9"]]]

*/
