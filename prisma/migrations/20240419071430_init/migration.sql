/*
  Warnings:

  - Made the column `name` on table `news` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_news" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_news" ("id", "name") SELECT "id", "name" FROM "news";
DROP TABLE "news";
ALTER TABLE "new_news" RENAME TO "news";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
