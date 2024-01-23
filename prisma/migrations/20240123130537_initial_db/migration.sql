-- CreateTable
CREATE TABLE "academics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "cep" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthdate" DATETIME NOT NULL,
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
    "numberofinstallments" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "enrolledcourse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "academicId" TEXT,
    "courseId" TEXT,
    CONSTRAINT "enrolledcourse_academicId_fkey" FOREIGN KEY ("academicId") REFERENCES "academics" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "enrolledcourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "academicId" TEXT NOT NULL,
    "documentUrl" TEXT NOT NULL,
    CONSTRAINT "Document_academicId_fkey" FOREIGN KEY ("academicId") REFERENCES "academics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "academics_email_key" ON "academics"("email");

-- CreateIndex
CREATE UNIQUE INDEX "academics_cpf_key" ON "academics"("cpf");
