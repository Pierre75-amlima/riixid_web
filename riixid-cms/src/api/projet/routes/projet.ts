export default {
  routes: [
    // ✅ Route custom slug
    {
      method: 'GET',
      path: '/projets/slug/:slug',
      handler: 'projet.findBySlug',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // ✅ Routes par défaut rétablies
    {
      method: 'GET',
      path: '/projets',
      handler: 'projet.find',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/projets/:id',
      handler: 'projet.findOne',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/projets',
      handler: 'projet.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/projets/:id',
      handler: 'projet.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/projets/:id',
      handler: 'projet.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};