import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "Tickets", path: "/tickets" },
    { name: "Technicians", path: "/technicians" },
  ];

  return (
    <aside className="w-64 bg-blue-800 text-white flex flex-col min-h-screen">
      <div className="text-2xl font-bold p-6">IE Network</div>
      <nav className="flex-1">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-6 py-3 hover:bg-blue-700 ${
                isActive ? "bg-blue-900" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
