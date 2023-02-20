export default async (context, locale) => {
  return await Promise.resolve({
    home: "Accueil",
    about: "À propos",
    contact: "Contact",
    publication: "Publication",
    blog: "Blog",
  });
};
