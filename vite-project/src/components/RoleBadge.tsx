import type { Role } from "../types/user";
import { ROLE_BADGE_CLASS } from "../constants/users";

type RoleBadgeProps = {
  role: Role;
};

export default function RoleBadge({ role }: RoleBadgeProps) {
  return <span className={ROLE_BADGE_CLASS[role]}>{role}</span>;
}
