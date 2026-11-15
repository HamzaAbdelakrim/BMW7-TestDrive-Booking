import { useContext, useState } from "react";
import UserContext from "../context/UserContext.js";

function SignIn() {
  const { loginName, setLoginName } = useContext(UserContext);
  const [name, setName] = useState(loginName);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim().length < 2) {
      setMessage("Please enter at least 2 characters for your name.");
      return;
    }
    setLoginName(name.trim());
    setMessage("Welcome, " + name.trim() + "! Your name appears in the navigation bar.");
  }

  return (
    <section className="form-page">
      <div className="sign">
        <h1>SIGN IN DEMO</h1>
        <p className="auth-demo-note">Enter a display name to try React Context. This is not a real login.</p>
        <form onSubmit={handleSubmit}>
          <label className="input-group">
            <span className="field-icon" aria-hidden="true">👤</span>
            <input
              type="text"
              aria-label="Display name"
              placeholder="Your name..."
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength="40"
              required
            />
          </label>
          <button type="submit">CONTINUE</button>
          {message && <p className="form-message" role="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}

export default SignIn;
