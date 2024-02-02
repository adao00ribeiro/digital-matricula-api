-- CreateTable
CREATE TABLE "courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "investmentvalue" REAL NOT NULL,
    "numberofinstallments" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "enrollments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "personaldatas" (
    "cpf" TEXT NOT NULL PRIMARY KEY,
    "city" TEXT,
    "state" TEXT,
    "cep" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "EnrollmentId" TEXT NOT NULL,
    CONSTRAINT "personaldatas_EnrollmentId_fkey" FOREIGN KEY ("EnrollmentId") REFERENCES "enrollments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "enrolledcourses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "EnrollmentId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    CONSTRAINT "enrolledcourses_EnrollmentId_fkey" FOREIGN KEY ("EnrollmentId") REFERENCES "enrollments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enrolledcourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "documentUrl" TEXT NOT NULL,
    "enrollmentId" TEXT NOT NULL,
    CONSTRAINT "documents_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "enrollments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "enrollments_email_key" ON "enrollments"("email");

-- CreateIndex
CREATE UNIQUE INDEX "enrollments_phone_key" ON "enrollments"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "personaldatas_cpf_key" ON "personaldatas"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "personaldatas_EnrollmentId_key" ON "personaldatas"("EnrollmentId");
