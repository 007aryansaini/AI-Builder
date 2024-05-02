import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import ResponseContext from "../context/AiContext";

const PrivateRoutes = () => {
 const { responseState } = useContext(ResponseContext);
  return responseState ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
