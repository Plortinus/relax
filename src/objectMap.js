// 实现一个 map 函数
const targetData = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};
const objMap = (obj, fn) => {
  if (typeof fn !== "function") {
    throw new TypeError(`${fn} is not a function !`);
  }
  return JSON.parse(JSON.stringify(obj, fn));
};
const a = objMap(targetData, (key, value) => {
  if (value % 2 === 0) {
    return value / 2;
  }
  return value;
})
// {a: 1, b: 3, c: 2, d: 5}

const test1 = obj => {
  const tempObj = {}
  for (let prop in obj) {
    const value = obj[prop]
    if (value % 2 === 0) {
      tempObj[prop] = value /2
    } else {
      tempObj[prop] = value
    }
  }
  return tempObj
}

const b = test1(targetData)