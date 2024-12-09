function checkType(value) {
    let valueType = typeof value;
    console.log(`The type of the value is: ${valueType}`);
    return valueType;
  }
  checkType({});
  checkType(true);
  checkType(76);
  checkType("Yarn string");
  checkType(undefined);
  