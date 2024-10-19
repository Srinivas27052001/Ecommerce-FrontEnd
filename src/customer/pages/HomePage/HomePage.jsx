import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Men/men_kurta'
import { kurtaPage1 } from '../../../Data/Kurta/kurta'
import { gounsPage1 } from '../../../Data/Gouns/gouns'
import { dressPage1 } from '../../../Data/dress/page1'
import { sareePage1 } from '../../../Data/Saree/page1'
import { mensShoesPage1 } from '../../../Data/shoes'
import { lengha_page1 } from '../../../Data/Women/LenghaCholi'
import { tops_1 } from '../../../Data/Women/tops'
// import { lehngacholiPage2 } from '../../../Data/Saree/lenghaCholiPage2'



const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={mensShoesPage1} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={tops_1} sectionName={"Tops Choli"}/> 
            <HomeSectionCarousel data={sareePage1} sectionName={"Women's Saree"}/>
            <HomeSectionCarousel data={dressPage1} sectionName={"Women's Dress"}/>
            <HomeSectionCarousel data={gounsPage1} sectionName={"Women's Gouns"} />
            <HomeSectionCarousel data={kurtaPage1} sectionName={"Women's Kurtas"} />

     
            

        </div>
    </div>
  )
}

export default HomePage