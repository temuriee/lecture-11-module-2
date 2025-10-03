import AuthPage from "./components/AuthPage";
import Header from "./components/Header";

import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Header />
        <AuthPage />
      </AuthProvider>
    </div>
  );
};

export default App;
