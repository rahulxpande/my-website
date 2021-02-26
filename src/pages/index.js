import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
 
    <div>
      <div classname="Hero">
       <div classname="HeroGroup">
          <h1>Rahul Pande is a brand + experience designer based in India.</h1>
          <p>Find his work in branding, web and mobile below.</p>
          <Link to="/page-2/">Go to page 2</Link> <br />
       </div>
      </div>
    </div>

)

export default IndexPage
