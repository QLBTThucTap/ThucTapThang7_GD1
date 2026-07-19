import type { Product } from "../types/product";
import { ProductItem } from "./ProductItem";

// lọc và hiển thị danh sách sản phẩm
type ListProps = {
  products: Product[];
  Addtocart: (product: Product) => void;
};

export const ProductList = ({ products, Addtocart }: ListProps) => {
  return (
    <>
      <div className="product-list-header">
        <h3>Danh sách sản phẩm ({products.length})</h3>
      </div>
      {products.length === 0 ? (
        <p className="product-empty">Không tìm thấy sản phẩm</p>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <ProductItem
              key={p.id}
              product={p}
              Addtocart={Addtocart}
            ></ProductItem>
          ))}
        </div>
      )}
    </>
  );
};
