interface BadgeProps {
  status: "Available" | "Busy" | "Offline" | "Open" | "In Progress" | "Closed";
}

const Badge = ({ status }: BadgeProps) => {
  let color = "bg-gray-400";
  if (status === "Open") color = "bg-red-500";
  else if (status === "In Progress") color = "bg-yellow-400";
  else if (status === "Closed") color = "bg-green-500";
  else if (status === "Available") color = "bg-green-500";
  else if (status === "Busy") color = "bg-yellow-400";
  else if (status === "Offline") color = "bg-red-500";

  return (
    <span className={`${color} text-white px-2 py-1 rounded text-sm`}>
      {status}
    </span>
  );
};

export default Badge;
