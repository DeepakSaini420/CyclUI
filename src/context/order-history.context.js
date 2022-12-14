import { createContext,useState } from "react";

const addOrderItem = (item,orderHistory)=>{
    return [...orderHistory,item]
}

export const orderContext = createContext({
    orderHistory:[],
    addOrder:()=>null
})

export const OrderHistoryProvider = ({children}) =>{

    const [orderHistory,setOrderHistory] = useState([]);

    const addOrder = (item)=>{
        setOrderHistory(addOrderItem(item,orderHistory))
    };

    const values = { orderHistory,addOrder }

    return <orderContext.Provider value={values}>{children}</orderContext.Provider>
}