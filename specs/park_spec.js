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
    park.dinoCollection = [dino1, dino2];
  })

  it('should have a name', function () {
    assert.equal(park.name, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    assert.equal(park.ticketPrice, 15.00);
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinoCollection, [dino1, dino2]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino3);
    assert.deepStrictEqual(park.dinoCollection, [dino1, dino2, dino3]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDino(dino1);
    assert.deepStrictEqual(park.dinoCollection, [dino2]);
  });

  it('should be able to sort by the most visitors', function () {
    park.addDino(dino3);
    park.addDino(dino4);
    assert.deepStrictEqual(park.sortsByMostVisitors(), [dino1, dino4, dino2, dino3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDino(dino3);
    park.addDino(dino4);
    assert.deepStrictEqual(park.dinoMostVisitors(), [dino1, dino4]);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDino(dino4);
    assert.deepStrictEqual(park.findDinoBySpecies('T-Rex'), [dino1, dino4]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    assert.equal(park.totalNumberOfVisitorsPerDay(), 125);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    assert.equal(park.totalNumberOfVisitorsPerYear(), 45625);
  });

  it('should be able to calculate total revenue for one year', function () {
    assert.equal(park.yearlyTicketSales(), 684375.00)
  });

  it('should be able to remove all dinosaurs of particular species', function () {
    park.addDino(dino4);
    park.removeDinoBySpecies('T-Rex');
    assert.deepStrictEqual(park.dinoCollection, [dino2])
  });

  it('should be able to find all dinosaurs of a particular diet', function () {
    park.addDino(dino3);
    assert.deepStrictEqual(park.findDinoByDiet('herbivore'), [dino2, dino3])
  });

  it('should be able to find all diets', function () {
    assert.deepStrictEqual(park.findDiets(), ['carnivore', 'herbivore'])
  });

  it('should be able to return an object with diet and number of diets', function () {
    park.addDino(dino3);
    assert.deepStrictEqual(park.dietDataObject(), {'carnivore': 1, 'herbivore': 2})
  });

});
