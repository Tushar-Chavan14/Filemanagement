import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AuthenticationAction } from "./ReduxStore/Actions/AuthenticationAction";

import { Navigation } from "./Navigation/Naviagation";
import { UiContext } from "./Components/Ui/UiContext";

export default function App() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const { authenticated, isLoading,user_id } = auth;
	const [nvOpn, setnvOpn] = useState(false);
	const [sOurce, setsOurce] = useState([]);
	const [prevState, setprevState] = useState(false);

	useEffect(() => {
		dispatch(AuthenticationAction());
	}, [dispatch]);

	return (
		<UiContext.Provider value={{ nvOpn, setnvOpn, sOurce, setsOurce, prevState, setprevState,user_id }}>
			<section className="App">
				<Navigation authenticated={authenticated} isLoading={isLoading} user={user_id}/>
			</section>
		</UiContext.Provider>
	);
}
