// vite.config.ts
import { defineConfig } from "vite"
import vercel from "vite-plugin-vercel"

export default defineConfig({
        plugins: [vercel()],
        vercel: {
                // All the followings optional

                /**
                 * How long Functions should be allowed to run for every request, in seconds.
                 * If left empty, default value for your plan will be used.
                 */
                defaultMaxDuration: 30,
                /**
                 * Default expiration time (in seconds) for prerender functions.
                 * Defaults to 86400 seconds (24h).
                 */
                expiration: 86400,
                /**
                 * Also known as Server Side Generation, or SSG.
                 * If present, this function is responsible to create static files in `.vercel/output/static`.
                 * Defaults to `false`, which disables prerendering.
                 */
                // prerender(resolvedConfig) {
                //         // Check `/packages/vike/vike.ts` `prerender` for an example
                // },
                /**
                 * See https://vercel.com/docs/projects/project-configuration#rewrites
                 */
                rewrites: [{ source: "/demo", destination: "/demo.html" }],
                /**
                 * See https://vercel.com/docs/projects/project-configuration#redirects
                 */
                redirects: [{ source: "/example", destination: "/demo.html", permanent: false }],
                /**
                 * See https://vercel.com/docs/projects/project-configuration#cleanurls
                 */
                cleanUrls: true,
                /**
                 * See https://vercel.com/docs/projects/project-configuration#trailingslash
                 */
                trailingSlash: true,
                /**
                 * By default, all `api/*` and `_api/*` endpoints are compiled under `.vercel/output/functions/api/*.func`.
                 * If others serverless functions need to be compiled under `.vercel/output/functions`, they should be added here.
                 * For instance, a framework can leverage this to have a generic ssr endpoint
                 * without requiring the user to write any code.
                 */
                // additionalEndpoints: [
                //         {
                //                 // can also be an Object representing an esbuild StdinOptions
                //                 source: "/path/to/file.ts",
                //                 // URL path of the handler, will be generated to `.vercel/output/functions/api/file.func/index.js`
                //                 destination: "/api/file",
                //         },
                // ],
                /**
                 * Advanced configuration to override .vercel/output/config.json
                 * See https://vercel.com/docs/build-output-api/v3/configuration#configuration
                 */
                config: {
                        // routes?: Route[];
                        // images?: ImagesConfig;
                        // wildcard?: WildcardConfig;
                        // overrides?: OverrideConfig;
                        // cache?: string[];
                        // crons?: CronsConfig;
                },
                /**
                 * ISR and SSG pages are mutually exclusive. If a page is found in both, ISR prevails.
                 * Keys are path relative to .vercel/output/functions directory, either without extension,
                 * or with `.prerender-config.json` extension.
                 * If you have multiple isr configurations pointing to the same underlying function, you can leverage the `symlink`
                 * property.
                 *
                 * Can be an object or a function returning an object (or a Promise of an object).
                 *
                 * Check `/packages/vike/vike.ts` `vitePluginVercelVpsIsrPlugin` for advanced usage.
                 */
                // isr: {
                //         // `symlink: 'ssr_'` means that a function is available under `.vercel/output/functions/ssr_.func`
                //         "/pages/a": { expiration: 15, symlink: "ssr_", route: "^/a/.*$" },
                //         "/pages/b/c": { expiration: 15, symlink: "ssr_", route: "^/b/c/.*$" },
                //         "/pages/d": { expiration: 15, symlink: "ssr_", route: "^/d$" },
                //         "/pages/e": { expiration: 25 },
                // },
                /**
                 * Defaults to `.vercel/output`. Mostly useful for testing purpose
                 */
                outDir: ".vercel/output",
        },
})
