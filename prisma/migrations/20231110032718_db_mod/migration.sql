/*
  Warnings:

  - You are about to drop the column `gamesId` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the `Games` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nombre` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_gamesId_fkey";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "gamesId",
DROP COLUMN "name",
ADD COLUMN     "nombre" TEXT NOT NULL;

-- DropTable
DROP TABLE "Games";

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "datae" TIMESTAMP(3) NOT NULL,
    "teamLocalId" INTEGER NOT NULL,
    "teamAwayId" INTEGER NOT NULL,
    "imagen" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_teamLocalId_fkey" FOREIGN KEY ("teamLocalId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_teamAwayId_fkey" FOREIGN KEY ("teamAwayId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
