
const path = require('path')


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions 

    return new Promise((resolve, reject)=>{

        graphql(
            `
                {
                    allWordpressPage{
                        edges{
                            node{
                                id
                                slug
                                title
                                content
                                
                            }
                        }
                    }
                    allWordpressPost{
                        edges{
                            node{
                                id
                                slug
                                title
                               featured_media{
                                   source_url
                               }
                                author {
                                    name
                                }
                                date(formatString:"MMMM DD, YYYY")
                                categories {
                                    name
                                }
                            }
                        }
                    }
                    allWordpressCategory{
                        edges{
                            node{
                                name
                                slug
                            }
                        }
                    }
                }
            `
        ).then(result => {
        if(result.errors) {
            console.log(result.errors)
            reject(result.errors)
        }

            result.data.allWordpressPage.edges.forEach(({ node }) => {
                createPage({
                    path: node.slug,
                    component: path.resolve('./src/pages/page.js'),
                    context: {
                        slug: node.slug,
                    },
                })
            })
            result.data.allWordpressPost.edges.forEach(({node})=>{
                createPage({
                    path:node.slug,
                    component: path.resolve('./src/pages/post.js'),
                    context:{
                        slug: node.slug,
                    },
                })
            })
            result.data.allWordpressCategory.edges.forEach(({ node }) => {
                createPage({
                    path: node.slug,
                    component: path.resolve('./src/pages/archive.js'),
                    context: {
                        slug: node.slug,
                    },
                })
            })

        resolve()
    })
})
}
