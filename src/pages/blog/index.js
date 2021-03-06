import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

const BlogPage = ({ data }) => {
    return(
        <Layout pageTitle="My Coding Blogs">
        {
            data.allMdx.nodes.map((node)=>(
                <article key={node.id}>
                    <Link to={`/blog/${node.slug}`}>
                      <h2>{node.frontmatter.title}</h2>
                    </Link>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            ))
        }
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage