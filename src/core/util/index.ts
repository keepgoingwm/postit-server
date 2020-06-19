export const promisify = function promisify(func, ...args): Promise<any> {
  const res = func(...args)

  if (res instanceof Promise) {
    return res
  } else {
    return Promise.resolve(res)
  }
}
