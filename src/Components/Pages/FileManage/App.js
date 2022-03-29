// Import Dependencies
import { Outlet } from "react-router-dom";

// Import Components
import Ui from "../../Ui/Ui";

// Import
import styles from "./App.module.scss";

export default function App() {
	return (
		<div className={styles.container}>
			<div className={styles.fileList}>
				<Outlet />
			</div>
			<div className={styles.filePreview}>
				<Ui />
			</div>
		</div>
	);
}
