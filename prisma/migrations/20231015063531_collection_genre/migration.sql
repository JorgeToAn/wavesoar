/*
  Warnings:

  - You are about to drop the column `genre_id` on the `song` table. All the data in the column will be lost.
  - Added the required column `genre_id` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `song` DROP FOREIGN KEY `Song_genre_id_fkey`;

-- AlterTable
ALTER TABLE `collection` ADD COLUMN `genre_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `song` DROP COLUMN `genre_id`;

-- AddForeignKey
ALTER TABLE `Collection` ADD CONSTRAINT `Collection_genre_id_fkey` FOREIGN KEY (`genre_id`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
