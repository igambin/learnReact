import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import classes from "./Auth.module.css";

const Auth = () => {
  const emailRef = useRef();
  const pwRef = useRef();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pw = pwRef.current.value;
    dispatch(authActions.login({ email: email, pw: pw }));
  };

  const authForm = (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={pwRef} type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );

  return <Fragment>{!isAuthenticated && authForm}</Fragment>;
};

export default Auth;
