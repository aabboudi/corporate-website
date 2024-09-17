# Next.js & NextUI Showcase Website

This is a showcase website for a corporation using Next.js 14 (App router).

Hosted on Vercel here: TBD

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Open Graph](https://ogp.me/)
- [Vercel](https://vercel.com/)

## How to Use

To use this project as a base for your own, run the following command:

### Clone the repository and install the dependencies

```bash
git clone https://github.com/aabboudi/nextjs-drizzle-sqlite-website.git
cd ./nextjs-drizzle-sqlite-website/
npm install
```

### Apply migrations then seed the database

```bash
npm run makemigrations
npm run migrate
npm run seed
```

### Run the development server

```bash
npm run dev
```

### Serve the database user interface

```bash
npm run studio
```

## License

Licensed under the [MIT license](https://github.com/aabboudi/nextjs-sqlite3-corporate-website/blob/master/LICENSE).
