function createID(firstname, lastname) {
  let a = firstname[0].toLowerCase();

  let b = lastname[0].toUpperCase();

  let c = lastname.slice(1, 3).toLowerCase();

  return `${a}${b}${c}`
}

console.log(createID("Jary", "lamb"))