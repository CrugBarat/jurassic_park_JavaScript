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

Park.prototype.totalNumberOfVisitors = function () {
  let totalNumberOfVisitors = 0;
  for (dino of this.dinoCollection) {
    totalNumberOfVisitors += dino.guestsAttractedPerDay
  };
  return totalNumberOfVisitors;
};

module.exports = Park;
