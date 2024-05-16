-- CreateTable
CREATE TABLE `Restorant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `dateCreation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ville` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `nombreEmployee` INTEGER NOT NULL,

    UNIQUE INDEX `Restorant_nom_key`(`nom`),
    UNIQUE INDEX `Restorant_adress_key`(`adress`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `nombrePerson` INTEGER NOT NULL,
    `Request` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `psition` VARCHAR(191) NOT NULL,
    `restorantId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Repas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `prix` DOUBLE NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `categorieId` INTEGER NOT NULL,
    `restorantId` INTEGER NOT NULL,

    UNIQUE INDEX `Repas_nom_key`(`nom`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NewsLetter` (
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `NewsLetter_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_restorantId_fkey` FOREIGN KEY (`restorantId`) REFERENCES `Restorant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Repas` ADD CONSTRAINT `Repas_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `Categorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Repas` ADD CONSTRAINT `Repas_restorantId_fkey` FOREIGN KEY (`restorantId`) REFERENCES `Restorant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
