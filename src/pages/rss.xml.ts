import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { SITE } from '../config';

// Modifica la función de "get" a "GET" y ajusta la generación de items con `pagesGlobToRssItems`.
export async function GET() {
  const items = await pagesGlobToRssItems(import.meta.glob('./blog/**/*.md'));
  
  return rss({
    // `<title>` field in output xml
    title: SITE.title,
    // `<description>` field in output xml (asegúrate de que SITE.description esté definido en tu config)
    description: SITE.description || 'Descripción predeterminada del feed RSS.',
    // base URL for RSS <item> links
    site: SITE.url,
    // list of `<item>`s in output xml, generado por `pagesGlobToRssItems`
    items,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}

