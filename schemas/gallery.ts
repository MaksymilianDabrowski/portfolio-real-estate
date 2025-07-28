// schemas/gallery.ts
export default {
  name: 'galleryImage',
  title: 'Zdjęcie w Galerii',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
    },
  ],
}