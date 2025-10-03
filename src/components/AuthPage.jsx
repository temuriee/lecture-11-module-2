import { useContext, useState } from "react";
import { AuthContent } from "../context/AuthContext";

const AuthPage = () => {
  const [user, login, logout] = useContext(AuthContent);
  const [username, setUsername] = useState("");

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome {user}</h1>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Log In"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <button onClick={() => login(username)}></button>
        </>
      )}
    </div>
  );
};

export default AuthPage;
