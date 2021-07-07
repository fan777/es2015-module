function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
  if (items.indexOf(item) === -1)
    return undefined;
  else
    return items.splice(items.indexOf(item), 1);
}

export { choice, remove };