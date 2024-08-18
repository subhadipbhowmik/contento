/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:xO0dqTrCePM6@ep-rough-snowflake-a541jvts.us-east-2.aws.neon.tech/contento?sslmode=require',
    }
  };