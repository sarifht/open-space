import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [id, onIdChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form className="login-input">
      <input type="text" value={id} onChange={onIdChange} placeholder="ID Pengguna" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Kata Sandi" />
      <button type="button" onClick={() => login({ id, password })}>
        Masuk
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
