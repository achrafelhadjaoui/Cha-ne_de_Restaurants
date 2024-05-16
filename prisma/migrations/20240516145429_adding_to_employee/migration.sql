/*
  Warnings:

  - You are about to drop the column `restorantId` on the `employee` table. All the data in the column will be lost.
  - Added the required column `restorantNom` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_restorantId_fkey`;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `restorantId`,
    ADD COLUMN `restorantNom` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_restorantNom_fkey` FOREIGN KEY (`restorantNom`) REFERENCES `Restorant`(`nom`) ON DELETE RESTRICT ON UPDATE CASCADE;
