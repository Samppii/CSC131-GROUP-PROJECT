import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { setupFetch } from "./fetch.ts";

// TODO: get url from .env.development or .env.production
setupFetch(fetch, 'http://localhost:8000');

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
