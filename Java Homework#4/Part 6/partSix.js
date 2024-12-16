function getFullNames(firstNames, lastNames) {
    let fullNames = [];
    for (let i = 0; i < firstNames.length; i++) {
      let fullName = (i + 1) + ". " + firstNames[i] + " " + lastNames[i];
      fullNames.push(fullName);
    }
  
    return fullNames;
  }
  let firstNames = ["Bob", "Jill"];
  let lastNames = ["Gregory", "Wurtz"];
  let fullNames = getFullNames(firstNames, lastNames);
  
  console.log(fullNames);
  