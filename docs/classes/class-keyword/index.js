export const FACTIONS = {
    Autobots: 'Autobots',
    Decepticons: "Deceptions"
}

export class Robot {
    constructor(name, faction) {
        this.name = name;
        this.faction = faction;
        this.power = 1000;
        this.toughness = this.power * 2;

    }

    get Name() {
        return this.name;
    }

    get Power() {
        return this.power;
    }


    set Power(power) {
        if (power >= 100) {
            this.power = power;
        }
    }
    get Toughness() {
        return this.toughness;
    }

    set Toughness(toughness) {
        this.toughness = toughness;
    }
    greet() {
        return `Hi, I'm ${this.name}`;
    }
}; // closer end of Transformer class

export class OptimusPrime extends Robot {
    constructor() {
        super('Optimus Prime', FACTIONS.Autobots);
    }

    tuant() {
        return "I will tear off your legs like they are toothpicks!";
    }
};


export class Megatron extends Robot {
    constructor() {
        super('Megatron', FACTIONS.Decepticons);
    }

    taunt() {
        return 'I will eat your eyes for dinner!';
    }
};




export default {
    optimusPrime: new OptimusPrime(),
    megatron: new Megatron()

}