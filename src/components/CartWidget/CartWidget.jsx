import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className=" carrito position-relative">
            <i className="bi bi-cart4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    );
}

export default CartWidget;