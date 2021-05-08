import { createContext, useState } from 'react';
import Account from '../models/Account';
import json from "../Assets/input.json";
import ApiInput from '../models/ApiInput';

type ContextProps = { 
    getAccounts: () => {},
    accounts: Account[],
    getAccount: (id: number) => Account
  };

export const AccountContext = createContext<Partial<ContextProps>>({});

const AccountService: React.FunctionComponent = ({ children }) => {

    const [accounts, setAccounts] = useState<Account[]>([]);

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
   
    return (
        <AccountContext.Provider value={{
            getAccounts,
            accounts
        }}>
            {children}
        </AccountContext.Provider>
    );
};

export default AccountService;