/*
  Warnings:

  - The primary key for the `Carousel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Carousel_id` on the `Carousel` table. All the data in the column will be lost.
  - The required column `carousel_id` was added to the `Carousel` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Carousel" DROP CONSTRAINT "Carousel_pkey",
DROP COLUMN "Carousel_id",
ADD COLUMN     "carousel_id" TEXT NOT NULL,
ADD CONSTRAINT "Carousel_pkey" PRIMARY KEY ("carousel_id");
