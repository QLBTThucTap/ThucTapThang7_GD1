import type { Status } from "../types/user";

type StatusBadgeProps = {
  status: Status;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isActive = status === "active";
  return (
    <span
      className={`status ${isActive ? "status--active" : "status--inactive"}`}
    >
      <span className="status__dot" />
      {isActive ? "Hoạt động" : "Ngừng hoạt động"}
    </span>
  );
}
