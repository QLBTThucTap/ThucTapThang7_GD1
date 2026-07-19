import type { Product } from "../types/product";

//thẻ(card) sản phẩm
type ItemProps = {
  product: Product;
  Addtocart: (product: Product) => void;
};

export const ProductItem = ({ product, Addtocart }: ItemProps) => {
  return (
    <div className="product-card">
      <span className="product-category">{product.category}</span>
      <h4 className="product-name">{product.name}</h4>
      <p className="product-price">{product.price}</p>
      <button className="btn-add" onClick={() => Addtocart(product)}>
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};
