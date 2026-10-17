import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const basePath = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	const sitemap = site ? new URL('sitemap.xml', new URL(basePath, site)).href : undefined;
	const content = ['User-agent: *', 'Allow: /', ...(sitemap ? [`Sitemap: ${sitemap}`] : [])].join('\n');

	return new Response(`${content}\n`, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
