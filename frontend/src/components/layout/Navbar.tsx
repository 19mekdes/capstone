const Navbar = () => {
  return (
    <nav className="h-16 bg-white shadow flex items-center px-6 justify-end">
      <div className="flex items-center gap-2">
        <span>Admin</span>
        <img
          src="https://via.placeholder.com/32"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
