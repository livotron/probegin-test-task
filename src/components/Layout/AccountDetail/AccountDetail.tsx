import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountContext";
import "./AccountDetail.css";

type AccountDetailProps = {
  reservedHeight: number;
};

const AccountDetail: React.FunctionComponent<AccountDetailProps> = (props) => {
  const { accountTypes, selectedAccount } = useContext(AccountContext);

  const [selectedTypeId, setSelectedTypeId] = useState(-1);

  const onMainPressed = () => {
    setSelectedTypeId(-1);
  };
  const onDetailPressed = (id: number) => {
    setSelectedTypeId(id);
  };
  useEffect(() => {
    setSelectedTypeId(-1);
  }, [selectedAccount]);
  return (
    <div
      className="account-detail"
      style={{ height: `calc(100vh - ${props.reservedHeight}px - 20px)` }}
    >
      <div className="tab-bar">
        <button
          onClick={onMainPressed}
          className={selectedTypeId === -1 ? "selected-tab" : ""}
        >
          Main
        </button>
        {accountTypes.map((accType, index) => (
          <button
            key={index}
            onClick={() => onDetailPressed(accType.id)}
            className={accType.id === selectedTypeId ? "selected-tab" : ""}
            disabled={selectedAccount?.type.id !== accType.id}
          >
            {accType.name}
          </button>
        ))}
      </div>
      <div className="detail-fields">
        {selectedAccount && selectedTypeId === -1 ? (
          <>
            <div>{`Code - ${selectedAccount.code}`}</div>
            <div>{`Buyer - ${selectedAccount.is_buyer}`}</div>
            <div>{`Supplier - ${selectedAccount.is_supplier}`}</div>
          </>
        ) : selectedAccount ? (
          <div>
            {Object.entries(selectedAccount?.type_detail).map(
              (keyValue, index) => {
                return <div key={index}>{`${keyValue[0]} - ${keyValue[1]}`}</div>;
              }
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AccountDetail;
