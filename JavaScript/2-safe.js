'use strict';

const Singleton = new (function() {
  const single = this;
  return function() {
    return Object.setPrototypeOf(single, Object.getPrototypeOf(this));
  };
})();

// Usage

console.assert(
  new Singleton() === new Singleton() &&
  new Singleton() instanceof Singleton
);
console.log('instances are equal');
