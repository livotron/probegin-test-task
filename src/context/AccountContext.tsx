import { createContext, useState } from "react";
import Account from "../models/Account";
import json from "../Assets/input.json";
import ApiInput from "../models/ApiInput";
import AccountType from "../models/AccountType";

type ContextProps = {
  getAccounts: () => void;
  accounts: Account[];
  accountTypes: AccountType[];
  getSelectedAccount: (id: number) => Account | null;
  filterId: number;
  applyFilterId: (id: number) => void;
  setSelectedAccountId: (id: number) => void;
};

export const AccountContext = createContext<ContextProps>({
  accounts: [],
  accountTypes: [],
  getAccounts: () => {},
  getSelectedAccount: (id) => new Account(),
  filterId: -1,
  applyFilterId: (id) => {},
  setSelectedAccountId: (id) => {},
});

const AccountService: React.FunctionComponent = ({ children }) => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [accountTypes, setAccountTypes] = useState<AccountType[]>([]);
  const [filterId, applyFilterId] = useState<number>(-1);
  const [selectedAccountId, setSelectedAccountId] = useState<number>();

  const getAccounts = () => {
    console.log("getting account");
    let input: ApiInput;
    setTimeout(() => {
      input = (json as unknown) as ApiInput;
      console.log("got accounts", input.items);
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

  return (
    <AccountContext.Provider
      value={{
        getAccounts,
        accountTypes,
        accounts,
        getSelectedAccount,
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
