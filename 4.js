function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
} // метод, который определяет прибор как включенный в розетку 

ElectricalAppliance.prototype.plugIn = function() {
  console.log(this.name + " включен");
  this.isPlugged = true;
}

ElectricalAppliance.prototype.getPowerUsed = function() {
  return this.isPlugged ? this.power : 0;
}


const lampa = new ElectricalAppliance('светильник', 45);
const computer = new ElectricalAppliance('компютер', 900);
const tv = new ElectricalAppliance('телевизор', 200);


console.log(lampa.getPowerUsed() + computer.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed() + tv.getPowerUsed());

computer.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed() + tv.getPowerUsed());