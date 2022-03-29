// Import Components
import App from "./App";
import Sidebar from "../../Sidebar/Sidebar";

// Import Styles
import global from "../Global.module.scss";

export default function FileManage() {
	return (
		<section className={global.parentContainer}>
			{/* Quick Access */}
			<section className={global.level_2}>
				<Sidebar />
			</section>

			{/* Main Content */}
			<section className={global.level_3}>
				<App />
			</section>
		</section>
	);
}
