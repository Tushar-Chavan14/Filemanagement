// Import Dependencies
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {NavLink} from "react-router-dom"

import userlogo from "./Male.png";
import UserProfile from "../../UserProfile/UserProfile"

// Import Actions
import { Logout } from "../../../ReduxStore/Actions/LogoutAction";

import styles from "./Main.module.scss";
import { useState } from "react";

import { BsDoorOpenFill } from "react-icons/bs";

export default function NavigationMain() {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <section className={styles.nav}>
      {/* Navigation Profile Image */}
      <div className={styles.logoContainer}>
        <button
          className={styles.logo}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <img className={styles.image} src={userlogo} alt="Account" />
        </button>
        {modalOpen && <UserProfile setOpenModal={setModalOpen} />}
      </div>
      {/* System Links */}
      <div className={styles.admin}>
        <Link
          to="/login"
          onClick={dispatch(Logout)}
          className={`${styles.adminLink} ${styles.logout}`}
        >
          <BsDoorOpenFill className={styles.icon} />
        </Link>
      </div>
    </section>
  );
}
