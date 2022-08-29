import React from 'react'
import { Fragment } from "react";
import Header from '../components/Header/Header'
import Herosection from '../components/HeroSection/HeroSection'
import CompanySection from '../components/Company-section/Company'
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
const Home = () => {
  return (
<Fragment>
  <Header/>
 <Herosection/>
 <CompanySection/>
 <AboutUs/>
 <Courses/>
 </Fragment>
  )
}

export default Home