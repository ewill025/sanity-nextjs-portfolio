export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60637433c46cb2163764b633',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-portfolio-studio',
                  apiId: '1e112a43-c706-40ee-9b3e-49de4417c13a'
                },
                {
                  buildHookId: '606374337734a41533ad9748',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-portfolio',
                  apiId: '86b68305-1d18-4c05-90fc-4858cbbf62ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ewill025/sanity-nextjs-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-portfolio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
