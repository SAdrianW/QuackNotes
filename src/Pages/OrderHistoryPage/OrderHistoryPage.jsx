import { checkToken } from "../../Utilities/users-service";

export default function OrderHistoryPage() {
    async function _handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
    }

    return (
        <main>
            <h1>OrderHistoryPage</h1>
            <button onClick={ _handleCheckToken }>Check my Login Expiry</button>
        </main>
    )
};