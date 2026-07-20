import { Plus, Search } from "lucide-react";
import type { Role } from "../types/user";
import { ROLES } from "../constants/users";

type ToolbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  roleFilter: Role | "Tất cả";
  onRoleFilterChange: (value: Role | "Tất cả") => void;
  onAddClick: () => void;
};

export default function Toolbar({
  query,
  onQueryChange,
  roleFilter,
  onRoleFilterChange,
  onAddClick,
}: ToolbarProps) {
  return (
    <div className="toolbar">
      <div className="toolbar__filters">
        <div className="search-box">
          <span className="search-box__icon">
            <Search size={16} />
          </span>
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Tìm theo tên hoặc email..."
            className="search-box__input"
          />
        </div>
        <select
          value={roleFilter}
          onChange={(e) =>
            onRoleFilterChange(e.target.value as Role | "Tất cả")
          }
          className="select"
        >
          <option>Tất cả</option>
          {ROLES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <button onClick={onAddClick} className="btn btn-primary">
        <Plus size={16} />
        Thêm thành viên
      </button>
    </div>
  );
}
