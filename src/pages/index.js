import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Rahul Pandey is a brand + experience designer based in India.</h1>
      <p>Find his work in branding, web and mobile below.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </div>

  </Layout>
)

export default IndexPage
