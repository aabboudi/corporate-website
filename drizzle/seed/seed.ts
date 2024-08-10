const { DB } = require("../setup.ts");
const { Articles } = require("../schema.ts");
const fs = require('fs');

async function seedArticles() {
  try {
    const articlesData = JSON.parse(fs.readFileSync('drizzle/seed/articles.json', 'utf-8'));
    articlesData.forEach((article: any) => { article.content = JSON.stringify(article.content); });
    await DB.insert(Articles).values(articlesData);
  } catch (error) {
    console.error("⨯ Error seeding the database:", error);
  } finally {
    // await DB.close(); // Uncomment if your DB instance needs to be closed
  }
}

seedArticles().catch(err => {
  console.error("⨯ Unhandled error during seeding:", err);
  process.exit(1);
});
