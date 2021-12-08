export class Planet{
    public static listOfPlanets: Planet[] = [new Planet('Earth', 2000, 'Sol'), new Planet('Mars', 3000, 'Sol')];
    public static inventoryCount: number = 2000000000
    public static purchasedPlanets: string[] = []

    private name: string
    size: number
    parentStar: string

    constructor(name: string, size: number, parentStar: string) {
        this.name = name
        this.size = size
        this.parentStar = parentStar
    }

    public get planetName():string {
        return this.name
    }

    public set newName(newValue:string){
        this.name = newValue;
    }
}