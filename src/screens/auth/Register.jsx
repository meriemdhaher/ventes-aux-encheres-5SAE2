import { useState } from "react";
import axios from "axios";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });
      const { token } = response.data;
      console.log("tokeeeeeen",token)
      //localStorage.setItem("token", token);  // Sauvegarder le token dans le stockage local
      // Rediriger après inscription
      window.location.href = "/dashboard";
    } catch (error) {
      setErrorMessage("An error occurred during registration.");
    }
  };

  return (
    <section className="regsiter pt-16 relative">
      {/* Votre code HTML */}
      <form onSubmit={handleRegister} className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
        {/* Champ Nom */}
        <div className="py-5">
          <Caption className="mb-2">Username *</Caption>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={commonClassNameOfInput}
            placeholder="First Name"
            required
          />
        </div>
        {/* Champ Email */}
        <div className="py-5">
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
        {/* Champ Confirmation Mot de Passe */}
        <div>
          <Caption className="mb-2">Confirm Password *</Caption>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={commonClassNameOfInput}
            placeholder="Confirm password"
            required
          />
        </div>
        {/* Affichage des erreurs */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <PrimaryButton className="w-full rounded-none my-5">CREATE ACCOUNT</PrimaryButton>
      </form>
    </section>
  );
};
