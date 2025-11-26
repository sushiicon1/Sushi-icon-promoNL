/*
  Warnings:

  - You are about to drop the column `name` on the `ProductCategory` table. All the data in the column will be lost.
  - Added the required column `name_en` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_nl` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_uk` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ProductCategory" DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_nl" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL,
ADD COLUMN     "name_uk" TEXT NOT NULL;
