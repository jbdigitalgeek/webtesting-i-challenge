module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    const failedItem = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement
    };
    return failedItem;
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    const medEnhItemFail = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement
    };
    return medEnhItemFail;
  } else if (item.enhancement > 16) {
    const highEnhItemFail = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1
    };
    return highEnhItemFail;
  }
  return item;
}

function repair(item) {
  const repairedItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return repairedItem;
}

function get(item) {
  return { ...item };
}
