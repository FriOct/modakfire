
import { useParams } from "react-router-dom"
import HeaderBack from "../layouts/HeaderBack";


const PaymentDetail = () => {
    const { inputValue } = useParams();

    return (
        <>
            <HeaderBack></HeaderBack>
            <div>{inputValue}</div>
        </>
        
    )
}

export default PaymentDetail