function choice(items) {
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function remove(items, item) {
  let index = items.indexOf(item);
  if (index > -1) {
    items.splice(index, 1);
  }
  return items;
}

export { choice, remove };