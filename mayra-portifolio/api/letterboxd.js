
import { XMLParser } from 'fast-xml-parser'

const USERNAME = 'maymaylu'

const parser = new XMLParser({
  ignoreAttributes: false,
  removeNSPrefix: false,
  trimValues: true,
})

const text = (value) =>
  typeof value === 'string' || typeof value === 'number'
    ? String(value)
    : ''

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  try {
    const response = await fetch(
      `https://letterboxd.com/${USERNAME}/rss/`,
      {
        headers: {
          Accept: 'application/rss+xml, application/xml, text/xml',
        },
        signal: AbortSignal.timeout(10000),
      }
    )

    if (!response.ok) {
      throw new Error(`Letterboxd retornou ${response.status}`)
    }

    const xml = await response.text()
    const data = parser.parse(xml)

    const rawItems = data?.rss?.channel?.item ?? []
    const items = Array.isArray(rawItems) ? rawItems : [rawItems]

    const films = items
      .filter((item) => item['letterboxd:filmTitle'])
      .map((item, index) => {
        const description = text(item.description)

        const imageMatch = description.match(
          /<img[^>]+src=["']([^"']+)["']/i
        )

        const filmTitle = text(item['letterboxd:filmTitle'])
        const filmYear = text(item['letterboxd:filmYear'])
        const rating = Number(item['letterboxd:memberRating'])

        return {
          id: text(item.guid) || `film-${index}`,
          title: filmTitle,
          type: 'Filmes',
          year: filmYear,
          poster: imageMatch?.[1]?.replaceAll('&amp;', '&') || '',
          rating: Number.isFinite(rating) && rating > 0
            ? rating
            : null,
          watchedDate: text(item['letterboxd:watchedDate']),
          url: text(item.link),
        }
      })
      .sort((a, b) =>
        (b.watchedDate || '').localeCompare(a.watchedDate || '')
      )
      .slice(0, 24)

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=1800, stale-while-revalidate=3600'
    )

    return res.status(200).json(films)
  } catch (error) {
    console.error('Erro na integração Letterboxd:', error)

    return res.status(502).json({
      error: 'Não foi possível carregar o Letterboxd',
    })
  }
}
