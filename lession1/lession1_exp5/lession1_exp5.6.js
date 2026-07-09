function capitalize(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const result = capitalize("hÀ NỘI");
console.log(result);

const same = capitalize("lã NGỌC hUYỀN");
console.log(same);
