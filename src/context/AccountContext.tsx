import { createContext, useState } from 'react';
import Account from '../models/Account';
import json from "../Assets/input.json";
import ApiInput from '../models/ApiInput';

type ContextProps = { 
    getAccounts: () => void,
    accounts: Account[],
    getAccount: (id: number) => Account | null,
    filterBy: FilterType,
    applyFilterBy: (f: FilterType) => void
  };

type FilterType = "PERSON" | "COMPANY" | "NONE";

export const AccountContext = createContext<ContextProps>({
    accounts: [],
    getAccounts: () => {},
    getAccount: (id) => new Account(),
    filterBy: "NONE",
    applyFilterBy:  (f) => {}

});

const AccountService: React.FunctionComponent = ({ children }) => {

    const [accounts, setAccounts] = useState<Account[]>([]);
    const [filterBy, applyFilterBy] = useState<FilterType>("NONE");

    const getAccounts = () => {
        console.log("getting account")
        let input: ApiInput;
         setTimeout(() => {
            input = json as unknown as ApiInput;
            console.log("got accounts", input.items);
            setAccounts(input.items)
        }, 3000);
        return accounts;
    }
    
    const getAccount = (id: number) => {
        return accounts.find(acc => 
            acc.id === id
        ) || null
    }
   
    return (
        <AccountContext.Provider value={{
            getAccounts,
            accounts,
            getAccount,
            filterBy,
            applyFilterBy
        }}>
            {children}
        </AccountContext.Provider>
    );
};

export default AccountService;