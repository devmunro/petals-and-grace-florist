// @ts-check
import { defineConfig } from "astro/config";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isAccountPagesSite = repositoryName === `${repositoryOwner}.github.io`;

export default defineConfig({
	site: isGitHubPagesBuild && repositoryOwner ? `https://${repositoryOwner}.github.io` : undefined,
	base:
		isGitHubPagesBuild && repositoryName && !isAccountPagesSite
			? `/${repositoryName}`
			: "/",
	devToolbar: {
		enabled: false,
	},
});
