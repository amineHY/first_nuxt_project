export default async (context, locale) => {
  return await Promise.resolve({
    home: "Home",
    about: "About",
    contact: "Contact",
    publication: "Publication",
    blog: "Blog",
  });
};
