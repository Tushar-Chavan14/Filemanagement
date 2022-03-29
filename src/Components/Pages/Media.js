// Import Dependencies
import React from "react";

import Loading from "../../Components/Loaders/SquareLoader/loading";

import Card from "../Cards/Card";
import styles from "./Page.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Media({ user, isloading }) {
	const [docs, setdocs] = useState();
	const [loading, setloading] = useState(false);

	const fileurl = `http://intervc-api.shivila.tech/api/v1/files/filter/?file_type=jpg&user_id=${user}`;

	const token = localStorage.getItem("token");

	useEffect(() => {
		setloading(true);
		axios
			.get(fileurl, {
				headers: {
					Authorization: "Token " + token,
				},
			})
			.then((res) => {
				setdocs(res.data);
				setloading(false);
			})
			.catch((err) => {
				setloading(false);
				console.log(err.response);
			});
	}, [token, fileurl]);

	return <>{!loading ? <div className={`${styles.main} ${styles.media}`}>{docs && docs.map((dat) => <Card key={dat.id} name={dat.name} url={dat.file} date={dat.created_at} />)}</div> : <Loading />}</>;
}
