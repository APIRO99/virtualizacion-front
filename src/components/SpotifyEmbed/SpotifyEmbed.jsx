import React from 'react'

const SpotifyEmbed = ({id}) => {
  let src = `https://open.spotify.com/embed/track/${id}?utm_source=generator`
  return (
    <iframe
      title={id}
      style={{
        borderRadius: "12px",
        margin: 30,
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
      }}
      src={src}
      width="320"
      height="380"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  )
}

export default SpotifyEmbed