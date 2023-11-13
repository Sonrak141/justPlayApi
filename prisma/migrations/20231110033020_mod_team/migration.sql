/*
  Warnings:

  - You are about to drop the column `datae` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Team` table. All the data in the column will be lost.
  - Added the required column `date` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "datae",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "nombre",
ADD COLUMN     "name" TEXT NOT NULL;
