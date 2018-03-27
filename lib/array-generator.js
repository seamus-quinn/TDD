const arrayGenerator = (indexes) => {
  const newArray = [];
  for (let i = 0; i < indexes; i++){
    newArray.push(Math.floor(Math.random() * 1000));
  }
  return newArray;
}

module.exports = arrayGenerator;