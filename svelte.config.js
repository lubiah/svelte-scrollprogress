import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";


const mode = process.env.NODE_ENV;


/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),
    prerender: {
      default: true 
    },
    paths: {
			base: mode === "development" ? ""  : "/svelte-scrollprogress"
		}
  },

  preprocess: [mdsvex(mdsvexConfig)],
};

export default config;
