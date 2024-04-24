export interface IItem {
    name: string;
}

export class Item implements IItem {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}