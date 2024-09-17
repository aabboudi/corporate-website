const { DB } = require("../setup.ts");
const { Articles, FAQs } = require("../schema.ts");
const fs = require('fs').promises;

async function seedData(data: any[], table: any, dataType: string): Promise<void> {
  try {
    await DB.insert(table).values(data);
    console.log(`✓ Database seeded successfully with ${dataType}.`);
  } catch (error) {
    console.error(`⨯ Error seeding the database with ${dataType}:`, error);
  }
}

async function seedDatabase() {
  try {
    console.log("Seeding database...\n");
    // Extract
    const fileData = JSON.parse(await fs.readFile('drizzle/seed/seedData.json', 'utf-8'));
    const articlesData = fileData.articles;
    const faqsData = fileData.faqs;

    // Prepare
    await Promise.all(articlesData.map(async (article: any) => {
      article.content = JSON.stringify(article.content);
      article.read_time = calculateReadTime(article.content);
    }));

    await Promise.all(faqsData.map(async (faq: any) => {
      faq.keywords = JSON.stringify(faq.keywords);
    }));

    // Seed
    await seedData(articlesData, Articles, 'Articles');
    await seedData(faqsData, FAQs, 'FAQs');
  } catch (error) {
    console.error("⨯ Error seeding the database: ", error);
    process.exit(1);
  } finally {
    console.log("---------------------");
    console.log("Seed script finished.");
    console.log("---------------------");
  }
}

function calculateReadTime(text: string): number {
  const WORDS_PER_MINUTE = 200;
  const cleanedText = text.replace(/\n/g, ' ');
  const wordCount = cleanedText.trim().split(/\s+/).length;
  return Math.ceil(wordCount / WORDS_PER_MINUTE);
}

seedDatabase();

// async function seedDatabase() {
//   try {
//     const fileData = JSON.parse(await fs.readFileSync('drizzle/seed/articles.json', 'utf-8'));
//     await seedArticles(fileData.articles);
//     await seedFAQs(fileData.faqs);
//   } catch (error) {
//     console.error("⨯ Error seeding the database: ", error);
//   }
// }

// seedDatabase().catch(err => {
//   console.error("⨯ Unhandled error during seeding (FAQs):", err);
//   process.exit(1);
// })

// async function seedArticles(articlesData: any) {
//   try {
//     await Promise.all(articlesData.map(async (article: any) => {
//       article.content = JSON.stringify(article.content);
//       article.read_time = calculateReadTime(article.content);
//     }));

//     await DB.insert(Articles).values(articlesData);
//     console.log("✓ Database seeded successfully with articles.");
//   } catch (error) {
//     console.error("⨯ Error seeding the database with articles: ", error);
//   }
// }

// async function seedFAQs(faqData: any) {
//   try {
//     await DB.insert(FAQs).values(faqData);
//     console.log("✓ Database seeded successfully with FAQ.");
//   } catch (error) {
//     console.error("⨯ Error seeding the database with FAQ data: ", error);
//   }
// }
