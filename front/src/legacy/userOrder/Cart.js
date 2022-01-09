import React, { useState } from 'react';

const Cart = (props) => {
    const [orderList, setOrderList] = useState([]);
    setOrderList(props.orderList);
    

    return (
        <aside>
            <div>
                {orderList.map((item) => {
                    const { id } = item;
                    const prototype = orderList.find((p) => p.id === id);

                    return (
                        prototype && <>
                            <div>
                                <div key={id}>
                                    {prototype.title} x {order.quantity}
                                </div>
                                <div>
                                    $ {prototype.price * order.quantity}
                                </div>
                                <button onClick={() => props.remove(id)}>
                                    삭제하기
                                </button>
                            </div>
                        </>
                    );
                })}
            </div>
            <div>
                <div>Total</div>
                <div>$ {props.totalPrice} </div>
                <button onClick={() => { props.removeAll }}>모두 삭제하기</button>
            </div>
        </aside>
    )

};

export default Cart;
//카트에 상품 추가하기
// const addToOrder = useCallback((id) => {
//     setOrders(orderList => {
//         const find = orderList.find(item => item.id === id);
//         if (find === undefined) {
//             return [...orderList, {
//                 id: id,
//                 quantity: 1
//             }]
//         } else {
//             return orderList.map(item => item.id === id ? { id, quantity: item.quantity + 1 } : item);
//         }
//     });
// }, []);

// const remove = useCallback((id) => {
//     setOrders(orders => {
//         return orders.filter(one => one.id !== id);
//     })
// }, []);

// const removeAll = useCallback((id) => {
//     setOrders([]);
// }, []);

// const totalPrice = useMemo(() => {
//     return orders.map((item) => {
//         const { id, quantity } = item;
//         const prototype = orders.find((item) => item.id === id);
//         if (prototype) {
//             return prototype.price * quantity;
//         } else { return false }
//     })
//         .reducer((acc, cur) => acc + cur, 0);
// }, [orders, prototype]);

// if (orders.length === 0) {
//     return (
//         <aside>
//             <div>장바구니가 비어있습니다.</div>
//         </aside>
//     )
// }






// ****************************************************
// const [orders, setOrders] = useState([]);

//     const addToCart = useCallback((id) => {
//         setOrders(orders => {
//             const find = orders.find(one => one.id === id);
//             if (find === undefined) {
//                 return [...orders, {
//                     id: id,
//                     quantity: 1
//                 }]
//             } else {
//                 return orders.map(one => one.id === id ? { id, quantity: one.quantity + 1 } : one);
//             }
//         });
//     }, []);

//     const remove = useCallback((id) => {
//         setOrders(orders => {
//             return orders.filter(one => one.id !== id);
//         })
//     }, []);

//     const removeAll = useCallback((id) => {
//         setOrders([]);
//     }, []);

// const totalPrice = useMemo(() => {
//     return orders.map((item) => {
//         const { id, quantity } = item;
//         const prototype = orders.find((item) => item.id === id);
//         if (prototype) {
//             return prototype.price * quantity;
//         } else { return false }
//     })
//         .reducer((acc, cur) => acc + cur, 0);
// }, [orders, prototype]);

// if (orders.length === 0) {
//     return (
//         <aside>
//             <div>장바구니가 비어있습니다.</div>
//         </aside>
//     )
// }


// return (
//     <aside>
//         <div>
//             {orders.map((order) => {
//                 const { id } = orders;
//                 const prototype = itemDatas.find((p) => p.id === id);

//                 return (
//                     prototype && <>
//                         <div>
//                             <div key={id}>
//                                 {prototype.title} x {order.quantity}
//                             </div>
//                             <div>
//                                 $ {prototype.price * order.quantity}
//                             </div>
//                             <button onClick={() => remove(id)}>
//                                 삭제하기
//                             </button>
//                         </div>
//                     </>
//                 );
//             })}
//         </div>
//         <div>
//             <div>Total</div>
//             <div>$ {totalPrice} </div>
//             <button onClick={() => { removeAll }}>모두 삭제하기</button>
//         </div>
//     </aside>
// )