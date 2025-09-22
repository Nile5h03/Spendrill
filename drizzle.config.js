/* eslint-disable no-undef */
module.exports = {
  schema: "./utils/schema.jsx", // Correct path to schema
  out: "./drizzle/migrations", // Path for migrations
  driver: "neon-http",         // Use 'neon-http' for Neon
  dialect: "postgresql",       // Specify PostgreSQL dialect
  dbCredentials: {
    connectionString: process.env.DATABASE_URL, // Connection string from .env
  },
};
