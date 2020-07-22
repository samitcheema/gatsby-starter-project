import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      siteData: { author },
    },
  } = data
  return (
    <Layout>
      <div>
        <h1 style={{ color: "red" }}>Hello from examples page</h1>
        <Header />
        <HeaderStatic />
        <h5>author: {author}</h5>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      siteData: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

export default examples
