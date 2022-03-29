// Import Dependencies
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import Actions
import { LoginAction } from "../../ReduxStore/Actions/LoginAction";

// Import Components
import Loading from "../Loaders/SquareLoader/loading";
// import { RingLoader } from "../loaders/RingLoader/RingLoader";

// Import Styles
import styles from "./Login.module.scss";

// Import React Icons
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

export default function MainContentLogin() {
  const auth = useSelector((state) => state.auth);
  const { isLoading } = auth;

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => {
    setShowPassword((show) => !show);
  };

  const dispatch = useDispatch();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const credentials = {
    email: Username,
    password: Password,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(LoginAction(credentials, navigate));
  };

  return (
    // Content In Login Page
    <section className={styles.login}>
      {!isLoading ? (
        <>
          {/* Profile Details */}
          <div className={styles.content}>
            {/* Left Side Message */}
            <div className={styles.message}>
              <h2 className={styles.title}>
                Sign In To
                <br />
                Your Account
              </h2>
              <p className={styles.details}>
                Don't Have Any Account..?
                <br />
                Register{" "}
                <Link to="/register" className={styles.btnSwitch}>
                  Here
                </Link>
              </p>
            </div>

            {/* Login Form */}
            <div className={styles.loginForm}>
              <form onSubmit={submitHandler}>
                {/* Input Fields */}
                <div className={styles.inputField}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Email ID"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className={styles.passwordContainer}>
                    <input
                      className={styles.input}
                      type={showPassword ? "text" : "password"}
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                    <span
                      className={styles.toggleView}
                      onClick={togglePasswordView}
                    >
                      {showPassword ? (
                        <BsEyeFill className={styles.icon} />
                      ) : (
                        <BsEyeSlashFill className={styles.icon} />
                      )}
                    </span>
                  </div>
                </div>

                {/* Forget Password Link */}
                <div className={styles.extra}>
                  <button className={styles.forget}>
                    <p className={styles.text}>Forget Password</p>
                  </button>
                </div>

                {/* Login Button */}

                <input
                  type="submit"
                  className={styles.submit}
                  value="Login To Account"
                  onSubmit={() => dispatch(LoginAction(credentials))}
                />
              </form>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
}
