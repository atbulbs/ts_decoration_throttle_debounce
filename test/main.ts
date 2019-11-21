import { throttle, debounce, throttleDebounce } from '../src/main'

class Test {

  @throttle(1000)
  throttleTest () {
    console.warn('throttleTest')
  }

  @debounce(1000)
  debounceTest () {
    console.warn('debounceTest')
  }

  @throttleDebounce(1000)
  throttleDebounce () {
    console.warn('throttleDebounce')
  }

}

const test = new Test()

// console.warn('test', test)
setInterval(()=> {
  test.throttleDebounce()
}, 2000)