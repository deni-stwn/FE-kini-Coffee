import React from 'react'
import Nav from '../component/nav'
import BannerKopiSepeda from '../component/bannerKopiSepeda/bannerKopiSepeda'
import Footer from '../component/footer'
import ArticleKopiSepeda from '../component/articlesComponent/articleKopiSepeda'

const KopiSepeda = () => {
  return (
    <>
    <Nav navbarClass={'text-[222222]'}/>
    <BannerKopiSepeda/>
    <ArticleKopiSepeda/>
    <Footer />
    </>
    )
}

export default KopiSepeda