import "./AccountDetail.css"

type AccountDetailProps = {
    reservedHeight: number;
}

const AccountDetail: React.FunctionComponent<AccountDetailProps> = (props) => {
    return (
        <div className="account-detail"
            style={{height: `calc(100vh - ${props.reservedHeight}px - 20px)`}}
        >
            <div  className="tab-bar">

            </div>
        
        </div>
    )
}

export default AccountDetail