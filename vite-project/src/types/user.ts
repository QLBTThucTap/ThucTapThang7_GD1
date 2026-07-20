export type Role = "Admin" | "Nhân viên đào tạo" | "Giảng viên" | "Học viên";

export type Status = "active" | "inactive";

export type User = {
  id: number;
  name: string;
  email: string;
  role: Role;
  status: Status;
};

export type UserFormData = Omit<User, "id">;

export type FormErrors = {
  name?: string;
  email?: string;
};
