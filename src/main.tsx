import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'normalize.css/normalize.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home.tsx';
import Layout from './Layout.tsx';
import { setupFetch } from './fetch.ts';
import Components from './Components.tsx';

// @ts-expect-error Fontsource packages don't have types
import '@fontsource-variable/libre-bodoni';

// @ts-expect-error Fontsource packages don't have types
import '@fontsource-variable/faustina';

// TODO: get url from .env.development or .env.production
setupFetch(fetch, 'http://localhost:8000');

const root = document.getElementById('root');

if (root) {
	createRoot(root).render(
		<StrictMode>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/components' element={<Components />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</StrictMode>,
	);
} else {
	console.error('Failed to find root element.');
}
