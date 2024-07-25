/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:MoY4meqG2Uwf@ep-gentle-firefly-a1372gyv.ap-southeast-1.aws.neon.tech/contentodb?sslmode=require'
    }
  };
  