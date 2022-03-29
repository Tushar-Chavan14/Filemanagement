import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

import styles from "./Sidebar.module.scss";
import {
  BsChevronLeft,
  BsFillFolderFill,
  BsFillFileEarmarkBreakFill,
  BsCardImage,
  BsCloudArrowUpFill,
} from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Sidebar() {
  const docfile = new FormData();

  const fileurl = "http://intervc-api.shivila.tech/api/v1/files/";
  const fileref = useRef();

  function fileuploadHandler(e) {
    console.log(e.target.files[0]);

    docfile.append("name", e.target.files[0].name);
    docfile.append("file", e.target.files[0]);

    upload(docfile);
  }

  async function upload(file) {
    const token = localStorage.getItem("token");

    if (!file) {
      alert("select a file");
    }

    await axios
      .post(fileurl, file, {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then(() => {
        toast("sucessfully uploaded");
        window.setTimeout(function () {
          window.location.reload();
        }, 4000);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  // console.log(progrss);

  // Compact/Expand Quick Access
  const [compact, setCompact] = useState(false);
  const toggleView = () => {
    setCompact((show) => !show);
  };

  return (
    <div className={`${styles.overview} ${compact ? styles.compact : ""}`}>
      {/* Expand/Compact Icon */}
      <ToastContainer />
      <button className={styles.view} onClick={toggleView}>
        <BsChevronLeft className={styles.icon} />
      </button>

      {/* Heading */}
      <div className={styles.head}>
        <h2 className={styles.details}>Manage Files</h2>
      </div>

      <div className={styles.quickLinks}>
        <button className={styles.link} onClick={() => fileref.current.click()}>
          <input
            type="file"
            className={styles.filePicker}
            onChange={fileuploadHandler}
            ref={fileref}
          />
          <BsCloudArrowUpFill className={styles.icon} />
          <p className={styles.title}>Upload Document</p>
        </button>

        <NavLink
          to="/filemange/docs"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          <BsFillFolderFill className={styles.icon} />
          <p className={styles.title}>All Files</p>
        </NavLink>

        <NavLink
          to="/filemange/files"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          <BsFillFileEarmarkBreakFill className={styles.icon} />
          <p className={styles.title}>All Documents</p>
        </NavLink>

        <NavLink
          to="/filemange/media"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          <BsCardImage className={styles.icon} />
          <p className={styles.title}>All Media</p>
        </NavLink>
      </div>
    </div>
  );
}
