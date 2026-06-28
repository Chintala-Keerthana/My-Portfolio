const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: "./config/.env" });

async function setup() {
  console.log("🔄 Starting MySQL Database Setup...");
  console.log(`Connecting to Host: ${process.env.DB_HOST || "localhost"}, User: ${process.env.DB_USER || "root"}`);
  
  try {
    // Connect to MySQL server first (without database name, in case it doesn't exist yet)
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD,
    });

    // Read SQL file
    const sqlFilePath = path.join(__dirname, "../database_schema.sql");
    if (!fs.existsSync(sqlFilePath)) {
      throw new Error(`SQL file not found at ${sqlFilePath}`);
    }
    
    const sqlContent = fs.readFileSync(sqlFilePath, "utf8");

    // Clean and split SQL file by semicolons
    // We split by semicolon, but handle SQL comments correctly
    const rawQueries = sqlContent.split(";");
    const queries = [];
    
    for (let rawQuery of rawQueries) {
      // Clean query lines, removing line comments
      const lines = rawQuery.split("\n");
      const cleanLines = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith("--") || trimmed.startsWith("#")) {
          return "";
        }
        return line;
      });
      
      const query = cleanLines.join("\n").trim();
      if (query.length > 0) {
        queries.push(query);
      }
    }

    console.log(`📌 Found ${queries.length} SQL statements to execute.`);

    for (let i = 0; i < queries.length; i++) {
      const query = queries[i];
      const firstLine = query.split("\n")[0].trim();
      console.log(`⚡ Executing [${i + 1}/${queries.length}]: ${firstLine}...`);
      await connection.query(query);
    }

    console.log("✅ Database Setup Completed Successfully!");
    await connection.end();
  } catch (error) {
    console.error("❌ Database Setup Failed!");
    console.error(error.message);
    console.log("\n💡 TIPS FOR FIXING:");
    console.log("1. Make sure your local MySQL Server is currently running.");
    console.log("2. Open 'backend/config/.env' and double-check your DB_PASSWORD and DB_USER.");
  }
}

setup();
