import React from 'react'
import YouTubePremium from './Premium/YouTubePremium'
import MoviesShows from './Movies & Shows/MoviesShows'
import Gaming from './Gaming/Gaming'
import Live from './Live/Live'
import Learning from './Learning/Learning'
import Sports from './Sports/Sports'


const index = () => {
  return (
    <>
      <h3>MORE FROM YOUTUBE</h3>
      <YouTubePremium />
      <MoviesShows />
      <Gaming />
      <Live />
      <Learning />
      <Sports />
    </>
  )
}

export default index
