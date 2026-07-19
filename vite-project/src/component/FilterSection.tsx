//hiển thị thanh tìm kiếm và dropdown
type Props = {
  search: string;
  setSearch: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

export const FilterSection = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <div className="filter-section">
      <div className="filter-field filter-search">
        <label>Tìm kiếm</label>
        <input
          className="search-input"
          type="text"
          placeholder="Tìm sản phẩm theo tên "
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>

      <div className="filter-field">
        <label>Danh mục</label>
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
        >
          <option value="All">Tất cả</option>
          <option value="Điện thoại">Điện thoại</option>
          <option value="Laptop">Laptop</option>
          <option value="Phụ kiện">Phụ kiện</option>
        </select>
      </div>
    </div>
  );
};
