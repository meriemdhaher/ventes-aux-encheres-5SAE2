import { useState } from "react";
import axios from "axios";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      const { token } = response.data.token;
      localStorage.setItem("token", token);  // Sauvegarder le token dans le stockage local
      // Rediriger vers une autre page après succès
      window.location.href = "/dashboard";
    } catch (error) {
      setErrorMessage("Invalid credentials, please try again.");
    }
  };

  return (
    <section className="regsiter pt-16 relative">
      {/* Votre code HTML */}
      <form onSubmit={handleLogin} className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
        {/* Champ Email */}
        <div className="py-5 mt-8">
          <Caption className="mb-2">Enter Your Email *</Caption>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={commonClassNameOfInput}
            placeholder="Enter Your Email"
            required
          />
        </div>
        {/* Champ Mot de Passe */}
        <div>
          <Caption className="mb-2">Password *</Caption>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={commonClassNameOfInput}
            placeholder="Enter Your Password"
            required
          />
        </div>
        {/* Affichage des erreurs */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <PrimaryButton className="w-full rounded-none my-5">LOGIN</PrimaryButton>
      </form>
    </section>
  );
};
