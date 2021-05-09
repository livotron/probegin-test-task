import { createContext, useState } from 'react';
import Account from '../models/Account';
import json from "../Assets/input.json";
import ApiInput from '../models/ApiInput';

type ContextProps = { 
    getAccounts: () => void,
    accounts: Account[],
    getSelectedAccount: (id: number) => Account | null,
    filterBy: FilterType,
    applyFilterBy: (f: FilterType) => void,
    setSelectedAccountId: (id: number) => void
  };

type FilterType = "PERSON" | "COMPANY" | "NONE";

export const AccountContext = createContext<ContextProps>({
    accounts: [],
    getAccounts: () => {},
    getSelectedAccount: (id) => new Account(),
    filterBy: "NONE",
    applyFilterBy:  (f) => {},
    setSelectedAccountId: (id) => {}

});

const AccountService: React.FunctionComponent = ({ children }) => {

    const [accounts, setAccounts] = useState<Account[]>([]);
    const [filterBy, applyFilterBy] = useState<FilterType>("NONE");
    const [selectedAccountId, setSelectedAccountId] = useState<number>()

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
    
    const getSelectedAccount = () => {
        return accounts.find(acc => 
            acc.id === selectedAccountId
        ) || null
    }
   
    return (
        <AccountContext.Provider value={{
            getAccounts,
            accounts,
            getSelectedAccount,
            filterBy,
            applyFilterBy,
            setSelectedAccountId
        }}>
            {children}
        </AccountContext.Provider>
    );
};

export default AccountService;