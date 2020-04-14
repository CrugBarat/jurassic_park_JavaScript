const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let park;

  beforeEach(function () {
    dino1 = new Dinosaur('T-Rex', 'carnivore', 75);
    dino2 = new Dinosaur('Diplo', 'herbivore', 50);
    dino3 = new Dinosaur('Stega', 'herbivore', 40);
    dino4 = new Dinosaur('T-Rex', 'carnivore', 75);
    park = new Park('Jurassic Park', 15.00);
    park.dinoCollection = [dino1, dino2]
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.equal(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.equal(actual, 15.00);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dino1, dino2]);
    assert.strictEqual(actual.length, 2);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino3);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3]);
    assert.strictEqual(actual.length, 3);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDino(dino1);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dino2]);
    assert.strictEqual(actual.length, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.dinoMostVisitors();
    assert.deepStrictEqual(actual, dino1)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDino(dino4)
    const actual = park.findDinoBySpecies('T-Rex');
    assert.deepStrictEqual(actual, [dino1, dino4]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.totalNumberOfVisitorsPerDay();
    assert.equal(actual, 125)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.totalNumberOfVisitorsPerYear();
    assert.equal(actual, 45625)
  });

  it('should be able to calculate total revenue for one year');

});
