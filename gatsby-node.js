
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
                                content
                                featured_media{
                                    source_url
                                }
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

              result.data.allWordpressPage.edges.forEach((edge) => {
                createPage({
                    path: edge.node.slug,
                    component: path.resolve('./src/templates/page.js'),
                    context: {
                        slug: edge.node.slug,
                    },
                })
            }) 
            result.data.allWordpressPost.edges.forEach(({node})=>{
                createPage({
                    path:node.slug,
                    component: path.resolve('./src/templates/post.js'),
                    context:{
                        slug: node.slug,
                    },
                })
            })
            /*result.data.allWordpressCategory.edges.forEach(({ node }) => {
                createPage({
                    path: node.slug,
                    component: path.resolve('./src/templates/archive.js'),
                    context: {
                        slug: node.slug,
                    },
                })
            })  */

        resolve()
    })
})
}
