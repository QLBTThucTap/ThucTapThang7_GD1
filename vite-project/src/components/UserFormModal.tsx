import { useState, type FormEvent } from "react";
import { X } from "lucide-react";
import type { User, UserFormData, FormErrors } from "../types/user";
import { ROLES, EMPTY_FORM } from "../constants/users";

type UserFormModalProps = {
  editingUser: User | null;
  existingUsers: User[];
  onSubmit: (data: UserFormData) => void;
  onClose: () => void;
};

function getInitialForm(editingUser: User | null): UserFormData {
  if (!editingUser) return EMPTY_FORM;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: _id, ...rest } = editingUser;
  return rest;
}

export default function UserFormModal({
  editingUser,
  existingUsers,
  onSubmit,
  onClose,
}: UserFormModalProps) {
  const [form, setForm] = useState<UserFormData>(() =>
    getInitialForm(editingUser),
  );
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Vui lòng nhập họ tên";

    if (!form.email.trim()) {
      nextErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Email không hợp lệ";
    } else {
      const duplicate = existingUsers.some(
        (u) =>
          u.email.toLowerCase() === form.email.toLowerCase() &&
          u.id !== editingUser?.id,
      );
      if (duplicate) nextErrors.email = "Email đã tồn tại";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(form);
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">
            {editingUser ? "Sửa thông tin thành viên" : "Thêm thành viên mới"}
          </h2>
          <button onClick={onClose} className="modal-close" aria-label="Đóng">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Họ tên</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`form-input ${errors.name ? "form-input--error" : ""}`}
              placeholder="Nguyễn Văn A"
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`form-input ${errors.email ? "form-input--error" : ""}`}
              placeholder="ten@example.com"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Vai trò</label>
              <select
                value={form.role}
                onChange={(e) =>
                  setForm({
                    ...form,
                    role: e.target.value as UserFormData["role"],
                  })
                }
                className="select"
              >
                {ROLES.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Trạng thái</label>
              <select
                value={form.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.value as UserFormData["status"],
                  })
                }
                className="select"
              >
                <option value="active">Hoạt động</option>
                <option value="inactive">Ngừng hoạt động</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
            >
              Hủy
            </button>
            <button type="submit" className="btn btn-primary">
              {editingUser ? "Lưu thay đổi" : "Thêm thành viên"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
