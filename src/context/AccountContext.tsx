import { createContext, useEffect, useState } from "react";
import Account from "../models/Account";
import json from "../Assets/input.json";
import ApiInput from "../models/ApiInput";
import AccountType from "../models/AccountType";

type ContextProps = {
  getAccounts: () => void;
  accounts: Account[];
  accountTypes: AccountType[];
  selectedAccount: Account | null;
  filterId: number;
  applyFilterId: (id: number) => void;
  setSelectedAccountId: (id: number) => void;
};

export const AccountContext = createContext<ContextProps>({
  accounts: [],
  accountTypes: [],
  getAccounts: () => {},
  selectedAccount: null,
  filterId: -1,
  applyFilterId: (id) => {},
  setSelectedAccountId: (id) => {},
});

const AccountService: React.FunctionComponent = ({ children }) => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [accountTypes, setAccountTypes] = useState<AccountType[]>([]);
  const [filterId, applyFilterId] = useState<number>(-1);
  const [selectedAccountId, setSelectedAccountId] = useState<number>(-1);
  const [selectedAccount, setSelectedAccount] = useState<Account|null>(null)

  const getAccounts = () => {
    let input: ApiInput;
    setTimeout(() => {
      input = (json as unknown) as ApiInput;
      setAccounts(input.items);
      initAccountTypes(input.items);   
    }, 3000);
    return accounts;
  };

  const initAccountTypes = (accounts:Account[]) => {
    const initAccountTypes: AccountType[] = [];
    accounts.forEach((account) => {
      if (
        !initAccountTypes.find((accountType) => accountType.id === account.type.id)
      ) {
          initAccountTypes.push(new AccountType(account.type.id, account.type.name))
      }
    });
    setAccountTypes(initAccountTypes);
  };
  const getSelectedAccount = () => {
    return accounts.find((acc) => acc.id === selectedAccountId) || null;
  };
  useEffect(() => {
    setSelectedAccount(getSelectedAccount());
    
  },[selectedAccountId])



  return (
    <AccountContext.Provider
      value={{
        getAccounts,
        accountTypes,
        accounts,
        selectedAccount,
        filterId,
        applyFilterId,
        setSelectedAccountId,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountService;
