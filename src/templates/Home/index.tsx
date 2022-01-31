import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Projetin da Lili =)"
        description="Um projeto simples para mostrar alguns observatórios astrônomicos ao redor do mundo."
        canonical=""
        openGraph={{
          url: '',
          title: 'My Locals',
          description:
            'Um projeto simples para mostrar alguns observatórios astrônomicos ao redor do mundo',
          images: [
            {
              url: '',
              width: 1280,
              height: 720,
              alt: 'My Locals'
            }
          ],
          site_name: 'My Locals'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
