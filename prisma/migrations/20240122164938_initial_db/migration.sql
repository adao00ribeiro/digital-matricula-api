-- CreateTable
CREATE TABLE "academics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "cep" TEXT,
    "cpf" TEXT NOT NULL,
    "birthdate" DATETIME,
    "document" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "investmentvalue" REAL NOT NULL,
    "numberofinstallments" INTEGER NOT NULL,
    "academicId" TEXT,
    CONSTRAINT "courses_academicId_fkey" FOREIGN KEY ("academicId") REFERENCES "academics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "academics_cpf_key" ON "academics"("cpf");
