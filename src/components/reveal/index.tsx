import React, { useEffect, useState } from "react"
import Video from "../video"
import { wallet } from "../../near"
import useTenk from '../../hooks/useTenk'
import * as css from "./reveal.module.css"

const Wrap: React.FC<{ onClose: () => void }> = ({ onClose, children }) => (
  <div className={css.reveal}>
    {children}
    <button onClick={onClose} title="Close">
      &times;
    </button>
  </div>
)

const Reveal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const currentUser = wallet.getAccountId()
  const { stale, nfts } = useTenk()
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    if (!currentUser || (!stale && !nfts.length)) {
      onClose()
    }
  }, [currentUser, stale, nfts])

  if (!currentUser || !nfts.length) return null

  const nft = nfts[nfts.length - 1]

  return (
    <Wrap onClose={onClose}>
      <Video
        src="RevealBackground.mp4"
        autoPlay
        loop
        style={{ display: ended ? undefined : 'none' }}
      />
      <figure
        style={{ display: ended ? undefined : 'none' }}
      >
        <img
          alt={nft.metadata?.title}
          src={nft.media}
        />
        <figcaption>
          #{nft.token_id}
        </figcaption>
      </figure>
      {!ended && (
        <Video
          src="Minting_Animation.mp4"
          autoPlay
          onEnded={() => setEnded(true)}
        />
      )}
    </Wrap>
  )
}

export default Reveal