/*
  Warnings:

  - Made the column `academicId` on table `enrolledcourse` required. This step will fail if there are existing NULL values in that column.
  - Made the column `courseId` on table `enrolledcourse` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_enrolledcourse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "academicId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    CONSTRAINT "enrolledcourse_academicId_fkey" FOREIGN KEY ("academicId") REFERENCES "academics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enrolledcourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_enrolledcourse" ("academicId", "courseId", "id") SELECT "academicId", "courseId", "id" FROM "enrolledcourse";
DROP TABLE "enrolledcourse";
ALTER TABLE "new_enrolledcourse" RENAME TO "enrolledcourse";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
