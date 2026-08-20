export default {
  routes: [
    // ✅ Route custom slug
    {
      method: 'GET',
      path: '/actualites/slug/:slug',
      handler: 'actualite.findBySlug',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // ✅ Routes par défaut rétablies
    {
      method: 'GET',
      path: '/actualites',
      handler: 'actualite.find',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/actualites/:id',
      handler: 'actualite.findOne',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/actualites',
      handler: 'actualite.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/actualites/:id',
      handler: 'actualite.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/actualites/:id',
      handler: 'actualite.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};