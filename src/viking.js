// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    super(attack);
  }
}

// Saxon
class Saxon {}

// War
class War {}
