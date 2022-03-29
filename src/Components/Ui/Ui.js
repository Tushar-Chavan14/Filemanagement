// Import Dependencies
import React from "react";
import { Worker } from "@react-pdf-viewer/core";

// Import Components
import FilePreview from "../Cards/FilePreview";

export default function Ui() {
	return (
		<>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
				<FilePreview />
			</Worker>
		</>
	);
}
