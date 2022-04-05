import * as React from "react"
import { PageProps } from "gatsby"

import Hero from "../components/hero"
import MyNFTs from "../components/my-nfts"
import Section from "../components/section"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Markdown from "../components/markdown"
import type { DecoratedLocale } from "../../lib/locales"

type PageContext = {
  locale: DecoratedLocale
}

const Landing: React.FC<PageProps<{}, PageContext>> = ({ data, location, pageContext: { locale } }) => {
  const params = new URLSearchParams(location.search)
  const transactionHashes = params.get('transactionHashes')

  // if (transactionHashes) {
    // console.log(data)

    // return <>Do Video Stuff</>
    // return (
    //   <Video
    //     poster={undefined}
    //     autoPlay
    //     muted
    //     loop
    //     sources={[videos.webm, videos.mp4]}
    //   />
    // )
  // }

  return (
    <Layout title={locale.title}>
      <Seo lang={locale.id} title={locale.title} description={locale.description} />
      <MyNFTs />
      <Hero heroTree={locale.hero} />
      {locale.extraSections?.map((section, i) => (
        <Section key={i} {...section}>
          <Markdown children={section.text} />
        </Section>
      ))}
    </Layout>
  )
}

export default Landing

/*
export const pageQuery = graphql`
  query OneVideo {
    file(relativePath: { eq: "RevealBackground.mp4" }) {
      childVideoFfmpeg {
        webm: transcode(
          outputOptions: ["-crf 20", "-b:v 0"]
          maxWidth: 900
          maxHeight: 480
          fileExtension: "webm"
          codec: "libvpx-vp9"
        ) {
          width
          src
          presentationMaxWidth
          presentationMaxHeight
          originalName
          height
          fileExtension
          aspectRatio
        }
        mp4: transcode(
          maxWidth: 900
          maxHeight: 480
          fileExtension: "mp4"
          codec: "libx264"
        ) {
          width
          src
          presentationMaxWidth
          presentationMaxHeight
          originalName
          height
          fileExtension
          aspectRatio
        }
      }
    }
  }
`
*/