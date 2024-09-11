import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Where work happens | Slack',
    short_name: 'Slack',
    description: 'Slack is a new way to communicate with your team. It’s faster, better organized, and more secure than email.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4A154B',
    icons: [
      {
        src: './favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: './favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}