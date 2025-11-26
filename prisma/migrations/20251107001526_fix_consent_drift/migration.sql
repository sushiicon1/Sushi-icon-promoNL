/*
  Warnings:

  - The `marketingConsent` column on the `Customer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
ALTER TABLE "public"."Customer" DROP COLUMN "marketingConsent",
ADD COLUMN     "marketingConsent" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."FormDraft" ADD COLUMN     "birthDate" TIMESTAMP(3);

-- DropTable
DROP TABLE "public"."Product";

-- DropTable
DROP TABLE "public"."ProductCategory";
