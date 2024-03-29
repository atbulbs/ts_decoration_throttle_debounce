export function throttle (duration: number = 0): Function {
 return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const rawFunction: Function = descriptor.value
    const getNewFunction: Function = (): Function => {
      let start: number = Date.now()
      const newFunction: Function = (...args) => {
        const now: number = Date.now()
        if (now - start >= duration) {
          start = now
          rawFunction.call(this, args)
        }
      }
      return newFunction
    }
    descriptor.value = getNewFunction()
    return descriptor
  }
}


export function debounce (delay: number): Function {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const rawFunction: Function = descriptor.value
    const getNewFunction: Function = (): Function => {
      let timer
      const newFunction: Function = (...args) => {
        if (timer) {
          window.clearTimeout(timer)
        }
        timer = setTimeout(() => {
          rawFunction.call(this, args)
        }, delay)
      }
      return newFunction
    }
    descriptor.value = getNewFunction()
    return descriptor
  }
}

export function throttleDebounce (delay: number): Function {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const rawFunction: Function = descriptor.value
    const getNewFunction: Function = (): Function => {
      let timer
      let start: number = Date.now()
      const newFunction: Function = (...args) => {
        const now: number = Date.now()
        if (now - start >= delay) {
          start = now
          rawFunction.call(this, args)
        } else {
          if (timer) {
            window.clearTimeout(timer)
          }
          timer = setTimeout(() => {
            rawFunction.call(this, args)
          }, delay)
        }
      }
      return newFunction
    }
    descriptor.value = getNewFunction()
    return descriptor
  }
}