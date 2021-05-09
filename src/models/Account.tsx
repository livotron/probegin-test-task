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
    type_detail!: Company & Person;

    // {
    //     "is": "Account",
    //     "id": 1,
    //     "code": "CO0001",
    //     "is_buyer": true,
    //     "is_supplier": true,
    //     "type": {
    //       "is": "AccountType",
    //       "id": 1,
    //       "name": "Company"
    //     },
    //     "type_detail": {
    //       "is": "Comnpany",
    //       "id": 1,
    //       "name": "Somecompany",
    //       "phonenumber": "010-1010101"
    //     }
    //   }
}