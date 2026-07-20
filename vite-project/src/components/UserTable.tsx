import { useState } from "react";
import { Pencil, Trash2, Check, X, UserCircle2 } from "lucide-react";
import type { User } from "../types/user";
import RoleBadge from "./RoleBadge";
import StatusBadge from "./StatusBadge";

type UserTableProps = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
};

export default function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Thành viên</th>
            <th>Vai trò</th>
            <th>Trạng thái</th>
            <th className="align-right">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={4} className="table-empty">
                Không tìm thấy thành viên phù hợp.
              </td>
            </tr>
          )}
          {users.map((u) => (
            <tr key={u.id}>
              <td>
                <div className="user-cell">
                  <UserCircle2 size={28} className="user-avatar" />
                  <div>
                    <div className="user-name">{u.name}</div>
                    <div className="user-email">{u.email}</div>
                  </div>
                </div>
              </td>
              <td>
                <RoleBadge role={u.role} />
              </td>
              <td>
                <StatusBadge status={u.status} />
              </td>
              <td className="align-right">
                <div className="actions">
                  <button
                    onClick={() => onEdit(u)}
                    className="icon-btn"
                    aria-label="Sửa"
                  >
                    <Pencil size={16} />
                  </button>
                  {confirmDeleteId === u.id ? (
                    <div className="confirm-actions">
                      <button
                        onClick={() => {
                          onDelete(u.id);
                          setConfirmDeleteId(null);
                        }}
                        className="icon-btn icon-btn-confirm"
                        aria-label="Xác nhận xóa"
                      >
                        <Check size={16} />
                      </button>
                      <button
                        onClick={() => setConfirmDeleteId(null)}
                        className="icon-btn"
                        aria-label="Hủy"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmDeleteId(u.id)}
                      className="icon-btn icon-btn-danger"
                      aria-label="Xóa"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
