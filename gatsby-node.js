const path = require('path')

module.exports.createPages = async ({graphql,actions}) => {
    const {createPage} = actions
    const ClientTemplate = path.resolve('./src/Templates/ClientTemplate.js')
    const res = await graphql(`
        query {
            allContentfulClient {
                edges {
                    node {
                        email
                        personalmobile
                        officemobile
                        clientName
                    }
                }
            }
        }
    `)
    res.data.allContentfulClient.edges.forEach((edge) => {
        createPage({
            component: ClientTemplate,
            path: `/${edge.node.clientName}`,
            context: {
                clientName: edge.node.clientName
            }
        })
    });
}

