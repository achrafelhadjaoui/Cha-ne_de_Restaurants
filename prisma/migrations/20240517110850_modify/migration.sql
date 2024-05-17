/*
  Warnings:

  - You are about to drop the column `categorieId` on the `repas` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nom]` on the table `Categorie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categorieNom` to the `Repas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `repas` DROP FOREIGN KEY `Repas_categorieId_fkey`;

-- AlterTable
ALTER TABLE `repas` DROP COLUMN `categorieId`,
    ADD COLUMN `categorieNom` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Categorie_nom_key` ON `Categorie`(`nom`);

-- AddForeignKey
ALTER TABLE `Repas` ADD CONSTRAINT `Repas_categorieNom_fkey` FOREIGN KEY (`categorieNom`) REFERENCES `Categorie`(`nom`) ON DELETE RESTRICT ON UPDATE CASCADE;
