const Park = function(name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = [];
};

Park.prototype.addDino = function(dinosaur) {
  this.dinoCollection.push(dinosaur)
};

Park.prototype.removeDino = function(dinosaur) {
  const index = this.dinoCollection.indexOf(dinosaur);
  if (index > -1) {
    this.dinoCollection.splice(index, 1)
  };
};

Park.prototype.dinoMostVisitors = function() {
  let result = this.dinoCollection.sort((a, b) => b.guestsAttractedPerDay - a.guestsAttractedPerDay)
  return result[0]
};

module.exports = Park;
