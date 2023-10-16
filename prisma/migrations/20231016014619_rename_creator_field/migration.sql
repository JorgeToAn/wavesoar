/*
  Warnings:

  - You are about to drop the column `creator_id` on the `song` table. All the data in the column will be lost.
  - Added the required column `artist_id` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `song` DROP FOREIGN KEY `Song_creator_id_fkey`;

-- AlterTable
ALTER TABLE `song` DROP COLUMN `creator_id`,
    ADD COLUMN `artist_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Song` ADD CONSTRAINT `Song_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
