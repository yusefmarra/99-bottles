// var beer = 99;

for (beer = 99; beer >= 0; beer--) {
  if (beer === 1){
    console.log(beer + " more bottle of beer on the wall! Take it down, pass it around");
  } else if (beer === 0) {
    console.log("No more bottles of beer on the wall!");
  } else if (beer === 99){
    console.log(beer + " bottles of beer on the wall, "+ beer + " bottles of beer! Take one down, pass it around ");
  } else {
    console.log(beer + " bottles of beer on the wall! \n" + beer + " bottles of beer on the wall, "+ beer + " bottles of beer! Take one down, pass it around ");
  }
}
