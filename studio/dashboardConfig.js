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
                  buildHookId: '621f0fd5f71b8162f18b007c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bt9e3yh1',
                  apiId: 'd92516ac-1f59-40b4-9f44-914f6ce5e6d5'
                },
                {
                  buildHookId: '621f0fd67ee1a3650f712e7c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dirjevfr',
                  apiId: '48a27ed1-21d4-4ba3-84ca-fad5db9d7a13'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CovertCode/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dirjevfr.netlify.app',
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
