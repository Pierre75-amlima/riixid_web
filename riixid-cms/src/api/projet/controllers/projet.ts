import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::projet.projet', ({ strapi }) => ({

  async find(ctx) {
    return super.find(ctx);
  },

  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const results = await strapi.db.query('api::projet.projet').findMany({
      where: { slug },
      populate: {
        heroImage: true,
        content: {
          on: {
            'sections.section': true,
            'sections.image-block': {
              populate: { image: true },
            },
            'sections.cta-block': true,
          },
        },
      },
    });

    const entity = results?.[0];
    if (!entity) return ctx.notFound('Projet introuvable');

    return { data: entity };
  },
}));