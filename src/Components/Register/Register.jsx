// Import Dependencies
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// Import Components
import { RingLoader } from "../Loaders/RingLoader/RingLoader";

// Import Styles
import styles from "./Register.module.scss";

// Import React Icons
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export default function MainContentRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => {
    setShowPassword((show) => !show);
  };

  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const toggleConfirmPasswordView = () => {
    setShowConfirmedPassword((show) => !show);
  };

  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setLoading] = useState(false);

  const creden = {
    full_name: Fullname,
    email: Email,
    password: Password,
    /* 	CPassword: CPassword, */
    company_id: 1,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    /* console.log(creden) */
    setMessage("");

    if (CPassword === Password) {
      axios
        .post(
          "http://intervc-api.shivila.tech/api/v1/register/?role=admin",
          creden
        )
        .then((res) => {
          console.log(res);
          setLoading(false);
          setMessage("Created Successfully");
          /*   navigate("/login") */
        })
        .catch((err) => {
          setLoading(false);
          setMessage("something went wrong");
          console.log(err.response.status);
          console.log(err);
        });
    } else {
      setMessage("Invalid Credentials");
    }

    setFullname("");
    setEmail("");
    setPassword("");
    setCPassword("");
  };
  return (
    // Content In Login Page
    <section className={styles.login}>
      {/* Profile Details */}
      {isLoading ? (
        <RingLoader />
      ) : (
        <div className={styles.content}>
          {/* Left Side Message */}
          <div className={styles.message}>
            <h2 className={styles.title}>
              Register To
              <br />
              Get Your Account
            </h2>
            <p className={styles.details}>
              Already Have An Account..?
              <br />
              Sign In{" "}
              <Link to="/login" className={styles.btnSwitch}>
                Here
              </Link>
            </p>
          </div>

          {/* Register Form */}
          <form
            className={styles.loginForm}
            onSubmit={submitHandler}
            action=""
            method="POST"
          >
            {/* Input Fields */}
            <p>{message}</p>
            <div className={styles.inputField}>
              <input
                className={styles.input}
                type="text"
                placeholder="Full Name"
                pattern="^[a-zA-Z\s]{1,100}$"
                value={Fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
              <div className={styles.otpContainer}>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email ID"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                  required
                />
                <button className={styles.otpBtn}>Get OTP</button>
              </div>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter OTP"
              />

              <div className={styles.passwordContainer}>
                <input
                  className={styles.input}
                  type={showPassword ? "text" : "password"}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
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

              <div className={styles.passwordContainer}>
                <input
                  className={styles.input}
                  type={showConfirmedPassword ? "text" : "password"}
                  value={CPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
                <span
                  className={styles.toggleView}
                  onClick={toggleConfirmPasswordView}
                >
                  {showConfirmedPassword ? (
                    <BsEyeFill className={styles.icon} />
                  ) : (
                    <BsEyeSlashFill className={styles.icon} />
                  )}
                </span>
              </div>
            </div>

            {/* Login Button */}
            <input
              className={styles.submit}
              type="submit"
              value="Create Account"
            />

            {/* Divider */}
            {/* <div className={styles.divider}>
							<span className={styles.line}></span>
							<p className={styles.text}>OR</p>
							<span className={styles.line}></span>
						</div> */}

            {/* Social Logins */}
            {/* <div className={styles.social}>
							<button className={styles.google}>
								<BsGoogle className={styles.icon} />
							</button>
							<button className={styles.facebook}>
								<BsFacebook className={styles.icon} />
							</button>
						</div> */}
          </form>
        </div>
      )}
    </section>
  );
}
