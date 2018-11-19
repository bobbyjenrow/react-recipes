const urlBase = 'https://dashboard.heroku.com/apps/foodie-apps';
const unsplash = process.env.UNSPLASH_API_URL;
const unsplashKey = process.env.UNSPLASH_API_KEY;

exports.recipes = `${urlBase}/api/recipes`
exports.unsplash = `https://source.unsplash.com/collection/251966`
exports.unsplash800 = `https://source.unsplash.com/collection/251966/800x800`
