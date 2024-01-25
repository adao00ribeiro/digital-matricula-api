-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_academics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "cep" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_academics" ("birthday", "cep", "city", "cpf", "createdAt", "email", "id", "name", "phone", "state", "updatedAt") SELECT "birthday", "cep", "city", "cpf", "createdAt", "email", "id", "name", "phone", "state", "updatedAt" FROM "academics";
DROP TABLE "academics";
ALTER TABLE "new_academics" RENAME TO "academics";
CREATE UNIQUE INDEX "academics_email_key" ON "academics"("email");
CREATE UNIQUE INDEX "academics_cpf_key" ON "academics"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
