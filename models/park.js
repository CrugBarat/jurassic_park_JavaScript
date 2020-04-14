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

module.exports = Park;
