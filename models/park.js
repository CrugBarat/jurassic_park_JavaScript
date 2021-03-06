const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = [];
}

Park.prototype.greeting = function () {
  return `Welcome..... to ${this.name}!`;
}

Park.prototype.addDino = function (dinosaur) {
  this.dinoCollection.push(dinosaur);
}

Park.prototype.removeDino = function (dinosaur) {
  const index = this.dinoCollection.indexOf(dinosaur);
  if (index > -1) {
    this.dinoCollection.splice(index, 1);
  }
}

Park.prototype.sortsByMostVisitors = function () {
  const result = this.dinoCollection.sort((a, b) => b.guestsAttractedPerDay - a.guestsAttractedPerDay);
  return result;
}

Park.prototype.dinoMostVisitors = function () {
  const resultArray = [];
  const sortedDinos = this.sortsByMostVisitors();
  for (dino of sortedDinos) {
    if (dino.guestsAttractedPerDay === sortedDinos[0].guestsAttractedPerDay) {
      resultArray.push(dino)
    }
  }
  return resultArray
}


//aleternative to find the dinosaur that attracts the most visitors
//
// Park.prototype.mvpDinos = function() {
//   let most_visits = 0;
//   const mvpDinos = [];
//   for (let dino of this.dinosaurs){
//     if (dino.guestsAttractedPerDay > most_visits){
//       mvpDinos = [dino];
//       most_visits = dino.guestsAttractedPerDay;
//     }else if (dino.guestsAttractedPerDay === most_visits) {
//       mvpDinos.push(dino);
//     }else{
//       continue;
//     }
//   }
//   return mvpDinos;
// };


Park.prototype.findDinoBySpecies = function (species) {
  const resultArray = [];
  for (dino of this.dinoCollection) {
    if (dino.species === species) {
      resultArray.push(dino);
    }
  }
  return resultArray;
}

Park.prototype.totalNumberOfVisitorsPerDay = function () {
  let totalNumberOfVisitors = 0;
  for (dino of this.dinoCollection) {
    totalNumberOfVisitors += dino.guestsAttractedPerDay;
  }
  return totalNumberOfVisitors;
}

Park.prototype.totalNumberOfVisitorsPerYear = function () {
  const result = (this.totalNumberOfVisitorsPerDay() * 365);
  return result;
}

Park.prototype.yearlyTicketSales = function () {
  const result = (this.totalNumberOfVisitorsPerYear() * this.ticketPrice);
  return result;
}

Park.prototype.removeDinoBySpecies = function (species) {
  for (dino of this.findDinoBySpecies(species)) {
    this.removeDino(dino);
  }
}

Park.prototype.findDinoByDiet = function (diet) {
  const resultArray = [];
  for (dino of this.dinoCollection) {
    if (dino.diet === diet) {
      resultArray.push(dino);
    }
  }
  return resultArray;
}

Park.prototype.findDiets = function () {
  const resultArray = [];
  for (dino of this.dinoCollection) {
    resultArray.push(dino.diet);
  }
  return resultArray;
}

Park.prototype.dietDataObject = function () {
  const dietDataObject = {};
  for (diet of this.findDiets()) {
    dietDataObject[diet] = this.findDinoByDiet(diet).length;
  }
  return dietDataObject;
}

module.exports = Park;
