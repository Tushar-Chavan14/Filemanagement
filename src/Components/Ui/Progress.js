// Import Dependencies
import React from "react";
import { useState } from "react";

// Import Stules
import styles from "../Styles/Progress.module.css";

export default function Progress({ done }) {
	const [style, setstyle] = useState({});

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}`,
		};

		setstyle(newStyle);
	}, 200);

	return (
		<div className={styles.progress}>
			<div className={styles.progressDone} style={style}>
				{done}
			</div>
		</div>
	);
}
