const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
}

sayName(){
    console.log(this.name);
    return this;
}

showStats(){

    console.log(  this.name + " " + this.strength + " " + this.speed + " " + this.health)
    return this;
}


drinkSake(){
    this.health += 10
    return this;

}


class Sensei{
    constructor(name, health, speed, strength, wisdom){
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
}

speakingWisdom(){
    const wisdom = super.drinkSake()
    wisdom
    console.log("Wisdom" + this.wisdom + "What one programmer can do in one month, two programmers can do in two months.")
    returns
}

showStatsSensei(){
    const SenseiStats = super.showStats();
    SenseiStats;
    console.log("Wisdom: " + this.wisdom);
    return this;
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
