import { Planet } from "./Planet";

export default class IceGiant extends Planet {
    fluidElements:string[];
    constructor(name:string, size:number, parentStar:string, fluidElements:string[]) {
        super(name, size, parentStar) 
        this.fluidElements = fluidElements;
    }

    public get fluids():string{
        return this.fluidElements.join(', ')
    }
}