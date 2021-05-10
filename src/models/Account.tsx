import AccountType from "./AccountType";
import Company from "./Company";
import Person from "./Person";

export default class Account  {
    is?: "Account";
    id!: number;
    code?: string;
    is_buyer?: boolean;
    is_organisor?: boolean;
    is_reseller?: boolean;
    is_supplier?: boolean;
    type!: AccountType;
    type_detail!: Company & Person | any;

}