import React from 'react'
import Outlyer from '../outlyer/Outlyer'
import Hero from '../Hero/Hero'
import SelectedArticles from '../SelectedArticles/SelectedArticles'
import Explore from '../Explore/Explore'
import LatestPosts from '../LatestPosts/LatestPosts'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <>
      <Hero/>
      <SelectedArticles/>
      <Explore/>
      <LatestPosts/>
      <Newsletter/>
    </>
  )
}
