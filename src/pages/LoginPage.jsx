import React from "react";
import { IoBodyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action.js";

function LoginPage() {
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  const onLogin = ({ id, password }) => {
    // @TODO: dispatch async action to login
    dispatch(asyncSetAuthUser({ id, password }));
  };

  return (
    <section className="login-page">
      <header className="login-page__hero">
        <h1>
          <IoBodyOutline />
        </h1>
      </header>
      <article className="login-page__main">
        <h2>
          Buat dunia
          <br />
          Mengenal Dirimu
        </h2>

        <LoginInput login={onLogin} />
        <p>
          Belum punya akun? <Link to="/register">Daftar</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
