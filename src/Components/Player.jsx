import React from 'react'

const Player = ({url, titulo}) => {

  return (
    <>
  <iframe
    src={url}
    title={titulo}
    allowFullScreen
    className="w-400 h-200 "
  ></iframe>
    </>
  )
}

export default Player