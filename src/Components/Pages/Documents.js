import Loading from "../../Components/Loaders/SquareLoader/loading";
import { useEffect, useState } from "react";

import axios from "axios";

import Card from "../Cards/Card";

// Import Styles
import styles from "./Page.module.scss";

export default function Documents({ user, isloading }) {
	const [docs, setdocs] = useState();
	const [loading, setloading] = useState(false);

	const fileurl = `http://intervc-api.shivila.tech/api/v1/files/filter/?file_type=pdf&user_id=${user}`;

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
				setloading(false);
				setdocs(res.data);
			})
			.catch((err) => {
				setloading(false);
				console.log(err.response);
			});
	}, [token, fileurl]);

	return <>{!loading ? <div className={`${styles.main} ${styles.home}`}>{docs && docs.map((dat) => <Card key={dat.id} name={dat.name} url={dat.file} date={dat.created_at} />)}</div> : <Loading />}</>;
}
