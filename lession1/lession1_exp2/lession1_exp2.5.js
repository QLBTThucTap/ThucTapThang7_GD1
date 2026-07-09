const mergeObjects = (...objects) => Object.assign({}, ...objects);

const obj1 = { name: "An", age: 20, city: "Hà Nội" };
const obj2 = { age: 22, major: "IT", city: "Đà Nẵng" };
const obj3 = { hobby: "Coding", city: "Hồ Chí Minh" };

const merged = mergeObjects(obj1, obj2, obj3);

console.log(merged);
