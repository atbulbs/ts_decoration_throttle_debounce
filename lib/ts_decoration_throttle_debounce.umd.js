(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.SingletonClass = {}));
}(this, (function (exports) { 'use strict';

  function throttle(duration) {
      if (duration === void 0) { duration = 0; }
      return function (target, propertyKey, descriptor) {
          var _this = this;
          var rawFunction = descriptor.value;
          var getNewFunction = function () {
              var start = Date.now();
              var newFunction = function () {
                  var args = [];
                  for (var _i = 0; _i < arguments.length; _i++) {
                      args[_i] = arguments[_i];
                  }
                  var now = Date.now();
                  if (now - start >= duration) {
                      start = now;
                      rawFunction.call(_this, args);
                  }
              };
              return newFunction;
          };
          descriptor.value = getNewFunction();
          return descriptor;
      };
  }
  function debounce(delay) {
      return function (target, propertyKey, descriptor) {
          var _this = this;
          var rawFunction = descriptor.value;
          var getNewFunction = function () {
              var timer;
              var newFunction = function () {
                  var args = [];
                  for (var _i = 0; _i < arguments.length; _i++) {
                      args[_i] = arguments[_i];
                  }
                  if (timer) {
                      window.clearTimeout(timer);
                  }
                  timer = setTimeout(function () {
                      rawFunction.call(_this, args);
                  }, delay);
              };
              return newFunction;
          };
          descriptor.value = getNewFunction();
          return descriptor;
      };
  }
  function throttleDebounce(delay) {
      return function (target, propertyKey, descriptor) {
          var _this = this;
          var rawFunction = descriptor.value;
          var getNewFunction = function () {
              var timer;
              var start = Date.now();
              var newFunction = function () {
                  var args = [];
                  for (var _i = 0; _i < arguments.length; _i++) {
                      args[_i] = arguments[_i];
                  }
                  var now = Date.now();
                  if (now - start >= delay) {
                      start = now;
                      rawFunction.call(_this, args);
                  }
                  else {
                      if (timer) {
                          window.clearTimeout(timer);
                      }
                      timer = setTimeout(function () {
                          rawFunction.call(_this, args);
                      }, delay);
                  }
              };
              return newFunction;
          };
          descriptor.value = getNewFunction();
          return descriptor;
      };
  }

  exports.debounce = debounce;
  exports.throttle = throttle;
  exports.throttleDebounce = throttleDebounce;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ts_decoration_throttle_debounce.umd.js.map
