import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthentificationPage = ({handleAuth, setAuthUser}) => {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "Zakaria", email: "zakariyaimzilen@gmail.com", pwd: "root" },
    { id: 2, name: "Hamid", email: "hamid@gmail.com", pwd: "root" },
    { id: 3, name: "Ayman", email: "ayman@gmail.com", pwd: "root" },
  ];

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSignIn = () => {
    // 1- Check if the there is a match in email
    let emailfound = false;
    let pwdfound = false;

    for (const user of users) {
      if (user.email === email) {
        // 1-1 If so: check the pwd
        emailfound = true;
        if (user.pwd === pwd) {
            pwdfound = true
        }
        setAuthUser(users.filter(user => user.email == email));
        break;
      } 
    }

    if ( emailfound && pwdfound ) {
        handleAuth(true);
        navigate("/dashboard");
    } else if ( emailfound && !pwdfound) {
        alert("Password doesn't match our records");
        navigate("/");
    } else {        
        // 1-2 If not: alert.
        alert("Email not found");
        setEmail("");
    }

    setPwd("");
  };

  return (
    <div className="bg-light py-5" style={{ height: "100vh" }}>
      <h1 className="text-center mb-5">Authentification</h1>

      <div className="container mx-auto" style={{ maxWidth: "30vw" }}>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
          />
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">
            Password
          </label>
          <input
            value={pwd}
            onChange={({ target }) => setPwd(target.value)}
            type="password"
            class="form-control"
            name="pwd"
            id="pwd"
            placeholder="..."
          />
        </div>

        <button onClick={handleSignIn} type="button" class="btn btn-info">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default AuthentificationPage;
