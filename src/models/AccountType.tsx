export default class AccountType {
    is? = "AccountType";
    id: number;
    name: string;

    constructor(id:number, name: string) {
        this.id = id;
        this.name = name;
    }
}