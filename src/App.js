import "./assets/style/index.scss";
import { AdminRoute, AuthRoute } from "./routes/appRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <AuthRoute />
      <AdminRoute />
      <Toaster />
    </div>
  );
}

export default App;
