import { calculateReadTime, slugify } from "@/lib/utils";

const fs = require("fs").promises;

const { DB } = require("../setup.ts");
const { Articles, FAQs, Openings } = require("../schema.ts");

async function seedTable(
  data: any[],
  table: any,
  dataType: string,
): Promise<void> {
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
    const fileData = JSON.parse(
      await fs.readFile("drizzle/seed/seedData.json", "utf-8"),
    );
    const articlesData = fileData.articles;
    const faqsData = fileData.faqs;
    const openingsData = fileData.openings;

    // Prepare
    await Promise.all(
      articlesData.map(async (article: any) => {
        article.slug = slugify(article.title);
        article.read_time = calculateReadTime(JSON.stringify(article.content));
      }),
    );

    // Seed
    await seedTable(articlesData, Articles, "Articles");
    await seedTable(faqsData, FAQs, "FAQs");
    await seedTable(openingsData, Openings, "Openings");
  } catch (error) {
    console.error("\n⨯ Error seeding the database: ", error);
    console.log("Exiting with status code: 1");
    process.exit(1);
  } finally {
    console.log("\nSeed script finished");
    console.log("Exiting with status code: 0");
    process.exit(0);
  }
}

seedDatabase();
