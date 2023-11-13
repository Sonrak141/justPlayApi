/*
  Warnings:

  - You are about to drop the column `teamAwayId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `teamLocalId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teamAway` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamLocal` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_teamAwayId_fkey";

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_teamLocalId_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "teamAwayId",
DROP COLUMN "teamLocalId",
ADD COLUMN     "teamAway" TEXT NOT NULL,
ADD COLUMN     "teamLocal" TEXT NOT NULL;

-- DropTable
DROP TABLE "Team";
