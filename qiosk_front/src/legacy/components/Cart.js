import React from 'react';

const Cart = ({
    orderList,
    remove,
    empty,
    total,
}) => {
    return (
        <aside>
            <div>
                { orderList && orderList.map (item => {
                    const { id, itemname, quantity, price } = item;

                    return (
                        <div>
                            <div key={id}>
                                {itemname} x {quantity}
                            </div>
                            <div>
                                $ {price * quantity}
                            </div>
                            <button onClick={() => remove(item)}>
                                삭제하기
                            </button>
                        </div>
                    );
                })}
            </div>
            <div>
                <div>Total</div>
                <div>$ {total} </div>
                <button onClick={() => empty()}>모두 삭제하기</button>
            </div>
        </aside>
    )

};

export default Cart;