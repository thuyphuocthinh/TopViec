import "./assets/style/index.scss";
import { AdminRoute, AuthRoute, ClientsRoute } from "./routes/appRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <AuthRoute />
      <AdminRoute />
      <ClientsRoute />
      <Toaster />
    </div>
  );
}

export default App;
