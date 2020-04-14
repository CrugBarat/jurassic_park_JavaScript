const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = [];
};

Park.prototype.addDino = function (dinosaur) {
  this.dinoCollection.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur) {
  const index = this.dinoCollection.indexOf(dinosaur);
  if (index > -1) {
    this.dinoCollection.splice(index, 1);
  };
};

Park.prototype.dinoMostVisitors = function () {
  let result = this.dinoCollection.sort((a, b) => b.guestsAttractedPerDay - a.guestsAttractedPerDay);
  return result[0];
};

Park.prototype.findDinoBySpecies = function (species) {
  let resultArray = [];
  for (dino of this.dinoCollection) {
    if (dino.species === species) {
      resultArray.push(dino);
    };
  };
  return resultArray;
};

Park.prototype.totalNumberOfVisitorsPerDay = function () {
  let totalNumberOfVisitors = 0;
  for (dino of this.dinoCollection) {
    totalNumberOfVisitors += dino.guestsAttractedPerDay;
  };
  return totalNumberOfVisitors;
};

Park.prototype.totalNumberOfVisitorsPerYear = function () {
  let result = (this.totalNumberOfVisitorsPerDay() * 365);
  return result;
};

Park.prototype.yearlyTicketSales = function () {
  let result = (this.totalNumberOfVisitorsPerYear() * this.ticketPrice);
  return result;
};

Park.prototype.removeDinoBySpecies = function (species) {
  for (dino of this.findDinoBySpecies(species)) {
      this.removeDino(dino);
    };
};

Park.prototype.findDinoByDiet = function (diet) {
  let resultArray = [];
  for (dino of this.dinoCollection) {
    if (dino.diet === diet) {
      resultArray.push(dino);
    };
  };
  return resultArray;
};

Park.prototype.findDiets = function () {
  let resultArray = [];
  for (dino of this.dinoCollection) {
    resultArray.push(dino.diet);
  };
  return resultArray;
};

Park.prototype.dietDataObject = function () {
 let dietDataObject = {};
  for (diet of this.findDiets()) {
    dietDataObject[diet] = this.findDinoByDiet(diet).length;
  };
  return dietDataObject;
};

module.exports = Park;
