//hiển thị danh sách thêm vào giỏ và tính tổng tiền

import type React from "react";
import type { Product } from "../types/product";
import { useMemo } from "react";

type ShoppingProps = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const ShoppingCart = ({ cart, setCart }: ShoppingProps) => {
  const total = useMemo(() => {
    console.log("tong tien hang...");
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  const clearCart = () => {
    setCart([]);
  };
  return (
    <div className="cart-wrapper">
      <h3>
        Giỏ hàng
        <span className="cart-count">{cart.length}</span>
      </h3>
      {cart.length === 0 ? (
        <p className="cart-empty">Chưa có sản phẩm trong giỏ</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li className="cart-item" key={index}>
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <span>Tổng tiền</span>
        <span>${total}</span>
      </div>
      <button className="btn-clear" onClick={clearCart}>
        Xóa hết giỏ hàng
      </button>
    </div>
  );
};
