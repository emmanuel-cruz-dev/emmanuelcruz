import fs from "fs";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Obtener __dirname equivalente en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Crear el directorio si no existe
const buildInfoDir = join(__dirname, "../src");
if (!fs.existsSync(buildInfoDir)) {
  fs.mkdirSync(buildInfoDir, { recursive: true });
}

try {
  // Obtener la fecha del último commit
  const gitLastCommitDate = execSync("git log -1 --format=%cd")
    .toString()
    .trim();

  const buildInfo = {
    lastModified: gitLastCommitDate,
  };

  // Escribir el archivo buildInfo.json
  fs.writeFileSync(
    join(buildInfoDir, "buildInfo.json"),
    JSON.stringify(buildInfo, null, 2)
  );

  console.log("✅ Build info generated successfully");
} catch (error) {
  console.error("Error generating build info:", error);

  // Si hay un error, crear un buildInfo.json con la fecha actual
  const buildInfo = {
    lastModified: new Date().toISOString(),
  };

  fs.writeFileSync(
    join(buildInfoDir, "buildInfo.json"),
    JSON.stringify(buildInfo, null, 2)
  );
}
