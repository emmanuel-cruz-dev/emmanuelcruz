import fs from "fs";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildInfoDir = join(__dirname, "../src");
if (!fs.existsSync(buildInfoDir)) {
  fs.mkdirSync(buildInfoDir, { recursive: true });
}

try {
  const gitLastCommitDate = execSync("git log -1 --format=%cd")
    .toString()
    .trim();

  const buildInfo = {
    lastModified: gitLastCommitDate,
  };

  fs.writeFileSync(
    join(buildInfoDir, "buildInfo.json"),
    JSON.stringify(buildInfo, null, 2)
  );

  console.log("✅ Build info generated successfully");
} catch (error) {
  console.error("Error generating build info:", error);

  const buildInfo = {
    lastModified: new Date().toISOString(),
  };

  fs.writeFileSync(
    join(buildInfoDir, "buildInfo.json"),
    JSON.stringify(buildInfo, null, 2)
  );
}
