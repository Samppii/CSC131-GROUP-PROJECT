import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			$: path.resolve(__dirname, './src'),
			$lib: path.resolve(__dirname, './src/lib'),
		},
	},
	plugins: [react()],
});
