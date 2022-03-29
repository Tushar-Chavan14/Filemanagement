// Import Dependencies
import { useContext, useState } from "react";
// import { Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";

// Import Components
import { UiContext } from "../Ui/UiContext";

// Import React Icons
import { AiOutlineFileText } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";

// Import Styles
import style from "./FilePreview.module.css";
import axios from "axios";

export default function FilePreview() {
	const { sOurce, prevState, setprevState } = useContext(UiContext);
	const [rename, setRename] = useState("");
	const [renameActive, setRenameActive] = useState(false);

	const token = localStorage.getItem("token");

	function clsprev() {
		setprevState(false);
		setRenameActive(false);
	}

	function handleNwOpn(e) {
		e.preventDefault();

		window.open(sOurce.url);
	}

	function handledelete(e) {
		e.preventDefault();

		const delUrl = "http://intervc-api.shivila.tech/api/v1/files/";

		if (window.confirm("are sure you want to delete") === true) {
			axios
				.delete(delUrl + sOurce.id, {
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

	const renameHandler = () => {
		setRenameActive(false);
	};

	if ((sOurce.name && sOurce.name.endsWith(".pdf") === true) || (sOurce.name && sOurce.name.endsWith(".txt") === true)) {
		return (
			<div className={style.mainContainer}>
				<ToastContainer />
				{prevState && sOurce && (
					<div className={style.subContainer}>
						<div className={style.headr}>
							<h3 className={style.topHeading}>
								<AiOutlineFileText className={style.icons} /> File Preview
							</h3>
							<i onClick={clsprev} className={style.clsicn}>
								<GrFormClose className={style.icons} />
							</i>
						</div>
						<div className={style.noFile}>
							<div>This File has to be opened in New Window click the below button to View</div>
						</div>
						<div className={style.btns2}>
							<button onClick={handleNwOpn}>
								<IoMdOpen className={style.icons} />
							</button>
							<button className={style.rename} onClick={() => setRenameActive(!renameActive)}>
								Rename
							</button>
							<button onClick={handledelete}>
								<AiFillDelete className={style.icons} />
							</button>
						</div>
						<div className={`${style.input} ${renameActive ? style.active : ""}`}>
							<input className={style.rename} onChange={(e) => setRename(e.target.value)} type="text" placeholder="Enter New File Name" />
							<button className={style.btn} onClick={renameHandler}>
								Submit
							</button>
						</div>
					</div>
				)}
			</div>
		);
	}

	return (
		<div className={style.mainContainer}>
			<ToastContainer />
			{prevState && sOurce && (
				<div className={style.subContainer}>
					<div className={style.headr}>
						<h3 className={style.topHeading}>
							<AiOutlineFileText /> File Preview
						</h3>
						<i onClick={clsprev} className={style.clsicn}>
							<GrFormClose className={style.icon} />
						</i>
					</div>
					<img src={sOurce.url} alt={sOurce.url} />
					<p className={style.fileName}>File : {sOurce.name}</p>
					<div className={style.disp}>
						<p className={style.head}>File Description:</p>
						<p>Date : {sOurce.date}</p>
						{/* <p>file type : {sOurce.type}</p> */}
					</div>
					<div className={style.btns}>
						<button onClick={handleNwOpn}>
							<IoMdOpen className={style.icons} />
						</button>
						<button className={style.rename} onClick={() => setRenameActive(!renameActive)}>
							Rename
						</button>
						<button onClick={handledelete}>
							<AiFillDelete className={style.icons} />
						</button>
					</div>
					<div className={`${style.input} ${renameActive ? style.active : ""}`}>
						<input className={style.rename} onChange={(e) => setRename(e.target.value)} type="text" placeholder="Enter New File Name" />
						<button className={style.btn} onClick={renameHandler}>
							Submit
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
