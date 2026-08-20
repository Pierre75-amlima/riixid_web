import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_blocks';
  info: {
    displayName: 'CtaBlock';
    icon: 'paperPlane';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_blocks';
  info: {
    displayName: 'ImageBlock';
    icon: 'landscape';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SectionsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'Section';
    icon: 'bold';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSection1 extends Struct.ComponentSchema {
  collectionName: 'components_sections_section1s';
  info: {
    displayName: 'Section1';
    icon: 'bold';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'sections.cta-block': SectionsCtaBlock;
      'sections.image-block': SectionsImageBlock;
      'sections.section': SectionsSection;
      'sections.section1': SectionsSection1;
    }
  }
}
