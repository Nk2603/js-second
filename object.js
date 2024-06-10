// syntax
const obj = {"key1":"value1","key2":"value2"};
console.log(obj);

const x = {"name":"nisha",surname:"kumari"};
// error doesn't show in keys without doble quote but show in values
// in key error show when there is space between string without double quote
console.log(x);

// const y = {"key":"value","first name":"nisha"};

// square brackets used when there is space in key string
// console.log(y["key"]);
// console.log(y["first name"]);

// dot is used when no space is in key string
// console.log(y.key);
// console.log(y.first name);

const z = {"key":"value","first name":"nisha","age":function(){  return "age"}};
console.log(z.age());
