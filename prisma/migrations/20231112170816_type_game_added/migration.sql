/*
  Warnings:

  - You are about to drop the column `imagen` on the `Game` table. All the data in the column will be lost.
  - Added the required column `type` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "imagen",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "type" INTEGER NOT NULL;
