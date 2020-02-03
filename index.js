const sheldon = {
  lastName: "yu",
  cityBorn: "kaifeng",
  cityVisited: ["San diego", "NYC", "Oklahoma"],
  school: {
    chamTeacher: "Ms.Chang",
    isJROTC: "yes",
    year: 2015
  }
};

document.write(sheldon.lastName + " was born in " + sheldon.cityBorn);
console.log("yu has visited " + sheldon.cityVisited);
window.alert("is yu a JROTC cadit" + sheldon.school.isJROTC);
document.getElementById("demo").innerHTML = sheldon.school.year;
document.getElementsByClassName("hi").innerHTML = sheldon.lastName;

const isLegalToDrink = age => {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

//str.includes
//str.concat
//str.charAt
//str.length
//str.indexOf
//str.match
//str.split
//str.slice


//isNaN(num)
//Number.isInterger(num)
//num.toFixed()
