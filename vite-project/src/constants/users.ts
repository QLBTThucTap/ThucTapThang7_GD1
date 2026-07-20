import type { Role, User, UserFormData } from "../types/user";

export const ROLES: Role[] = [
  "Admin",
  "Nhân viên đào tạo",
  "Giảng viên",
  "Học viên",
];

export const ROLE_BADGE_CLASS: Record<Role, string> = {
  Admin: "badge badge--admin",
  "Nhân viên đào tạo": "badge badge--training",
  "Giảng viên": "badge badge--teacher",
  "Học viên": "badge badge--student",
};

export const EMPTY_FORM: UserFormData = {
  name: "",
  email: "",
  role: "Học viên",
  status: "active",
};

export const INITIAL_USERS: User[] = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    email: "an.nguyen@example.edu.vn",
    role: "Admin",
    status: "active",
  },
  {
    id: 2,
    name: "Trần Thị Bích",
    email: "bich.tran@example.edu.vn",
    role: "Nhân viên đào tạo",
    status: "active",
  },
  {
    id: 3,
    name: "Lê Hoàng Cường",
    email: "cuong.le@example.edu.vn",
    role: "Giảng viên",
    status: "active",
  },
  {
    id: 4,
    name: "Phạm Thu Dung",
    email: "dung.pham@example.edu.vn",
    role: "Học viên",
    status: "inactive",
  },
  {
    id: 5,
    name: "Đỗ Minh Khang",
    email: "khang.do@example.edu.vn",
    role: "Học viên",
    status: "active",
  },
];
