import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>nav</div>
      <Outlet />
    </>
  )
};

export default Layout;