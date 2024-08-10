const { DB } = require("../setup.ts");
const { Articles } = require("../schema.ts");
const fs = require('fs');

async function seedArticles() {
  try {
    const articlesData = JSON.parse(fs.readFileSync('drizzle/seed/articles.json', 'utf-8'));
    articlesData.forEach((article: any) => {
      article.content = JSON.stringify(article.content);
      article.read_time = calculateReadTime(article.content);
    });
    await DB.insert(Articles).values(articlesData);
    console.log("✓ Database seeded successfully with articles.");
  } catch (error) {
    console.error("⨯ Error seeding the database:", error);
  } finally {
    // Code that would run anyway
  }
}

function calculateReadTime(text: string): number {
  const cleanedText = text.replace(/\n/g, ' ');
  const wordCount = cleanedText.trim().split(/\s+/).length;
  return Math.ceil(wordCount / 200);
}

seedArticles().catch(err => {
  console.error("⨯ Unhandled error during seeding:", err);
  process.exit(1);
});
