import { useMemo, useState } from "react";
import "./App.css";
import type { Product } from "./types/product";
import { data } from "./constants/productsData";
import { FilterSection } from "./component/FilterSection";
import { ProductList } from "./component/ProductList";
import { ShoppingCart } from "./component/ShoppingCart";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setselectedCategory] = useState("All");
  const [cart, setCart] = useState<Product[]>([]);

  const filter = useMemo(() => {
    return data.filter((product) => {
      const keySearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const keyCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return keyCategory && keySearch;
    });
  }, [search, selectedCategory]);

  // --- Hàm logic xử lý thêm sản phẩm vào giỏ hàng ---
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
    <div className="app-container">
      <h2 className="app-title">Product List</h2>
      <p className="app-subtitle">
        Tìm và thêm sản phẩm yêu thích vào giỏ hàng của bạn
      </p>
      <FilterSection
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setselectedCategory}
      ></FilterSection>
      <div className="main-content">
        <div className="product-list-wrapper">
          <ProductList
            products={filter}
            Addtocart={handleAddToCart}
          ></ProductList>
        </div>

        <ShoppingCart cart={cart} setCart={setCart}></ShoppingCart>
      </div>
    </div>
  );
}

export default App;
