// Import Dependencies
import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// Import Components
import NavigationMain from "../../Navigation/Main/Main";
import Loading from "../../Loaders/SquareLoader/loading";

// Import Styles
import global from "../Global.module.scss";

export default function Main() {
	const auth = useSelector((state) => state.auth);
	const { isLoading } = auth;

	return (
		<>
			{!isLoading ? (
				<section className={global.parentContainer}>
					{/* Navigation */}
					<section className={global.level_1}>
						<NavigationMain />
					</section>

					{/* Quick Access & Main Content */}
					<Outlet />
				</section>
			) : (
				<Loading />
			)}
		</>
	);
}
