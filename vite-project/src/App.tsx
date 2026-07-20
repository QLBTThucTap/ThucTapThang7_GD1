import { useMemo, useState } from "react";
import type { Role, User, UserFormData } from "./types/user";
import { INITIAL_USERS } from "./constants/users";
import Toolbar from "./components/Toolbar";
import UserTable from "./components/UserTable";
import UserFormModal from "./components/UserFormModal";
import "./index.css";

export default function App() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<Role | "Tất cả">("Tất cả");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchQuery =
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.email.toLowerCase().includes(query.toLowerCase());
      const matchRole = roleFilter === "Tất cả" || u.role === roleFilter;
      return matchQuery && matchRole;
    });
  }, [users, query, roleFilter]);

  function handleAddClick() {
    setEditingUser(null);
    setModalOpen(true);
  }

  function handleEditClick(user: User) {
    setEditingUser(user);
    setModalOpen(true);
  }

  function handleDelete(id: number) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  function handleFormSubmit(data: UserFormData) {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editingUser.id ? { ...u, ...data } : u)),
      );
    } else {
      const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      setUsers((prev) => [...prev, { id: newId, ...data }]);
    }
    setModalOpen(false);
  }

  return (
    <div className="app">
      <div className="app__inner">
        <div className="app__header">
          <h1 className="app__title">Quản lý người dùng</h1>
          <p className="app__subtitle">
            {users.length} thành viên · {filteredUsers.length} hiển thị
          </p>
        </div>

        <Toolbar
          query={query}
          onQueryChange={setQuery}
          roleFilter={roleFilter}
          onRoleFilterChange={setRoleFilter}
          onAddClick={handleAddClick}
        />

        <UserTable
          users={filteredUsers}
          onEdit={handleEditClick}
          onDelete={handleDelete}
        />
      </div>

      {modalOpen && (
        <UserFormModal
          key={editingUser?.id ?? "new"}
          editingUser={editingUser}
          existingUsers={users}
          onSubmit={handleFormSubmit}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
