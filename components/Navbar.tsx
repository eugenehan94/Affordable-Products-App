const Navbar = () => {
  return (
    <div className="flex justify-between pt-4 pr-4 pl-4">
      <div className="flex justify-center gap-x-3">
        <h1>Logo</h1>
        <h1>Flyers</h1>
        <h1>Coupons</h1>
        <h1>Shopping List</h1>
        <h1>Search</h1>
      </div>

      <div className="flex justify-center gap-x-3">
        <h1>About Flipp</h1>
        <h1>Flipp Mobile App</h1>
        <h1>Blog</h1>
      </div>
    </div>
  );
};

export default Navbar;
