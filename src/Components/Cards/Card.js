// Import Dependencies
import React from "react";
import { useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Import Components
import { UiContext } from "../Ui/UiContext";

// Import Styles
import styles from "./Card.module.scss";

// Import React Icons
import { BsTrashFill } from "react-icons/bs";

export default function Card(props) {
	const { setsOurce, setprevState } = useContext(UiContext);

	const { name, id } = props;

	const token = localStorage.getItem("token");

	const hanleClick = () => {
		setsOurce(props);
		setprevState(true);
	};

	function handleDelete(e) {
		e.preventDefault();

		const delUrl = "http://intervc-api.shivila.tech/api/v1/files/";

		if (window.confirm("are sure you want to delete") === true) {
			axios
				.delete(delUrl + id, {
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
					console.log(err.response.status);
				});
		}
	}

	return (
		<>
			<ToastContainer />
			<div className={styles.card}>
				<div className={styles.fileNameContainer} onClick={hanleClick}>
					<p className={styles.fileName}>{name}</p>
				</div>
				<button className={styles.btnDelete} onClick={handleDelete}>
					<BsTrashFill className={styles.icon} />
				</button>
			</div>
		</>
	);
}
