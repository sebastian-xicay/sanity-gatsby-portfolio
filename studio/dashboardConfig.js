export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b7b155f2d60814b4257af9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-knephsrn',
                  apiId: 'c3becc02-f936-4e47-b27a-a8865527047b'
                },
                {
                  buildHookId: '61b7b1563b80ad1262af859f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fj6vtirm',
                  apiId: '5c19eb6f-d00f-4fe4-aadb-f05909faf367'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sebastian-xicay/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fj6vtirm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
