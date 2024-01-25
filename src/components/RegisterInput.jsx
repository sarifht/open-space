import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [id, onIdChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form className="register-input">
      <input type="text" value={name} onChange={onNameChange} placeholder="Nama Lengkap" />
      <input type="text" value={id} onChange={onIdChange} placeholder="ID Pengguna Tanpa Spasi" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Kata Sandi" />
      <button type="button" onClick={() => register({ name, id, password })}>
        Daftar
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
