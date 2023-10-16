-- DropForeignKey
ALTER TABLE `collection` DROP FOREIGN KEY `Collection_genre_id_fkey`;

-- AlterTable
ALTER TABLE `collection` MODIFY `genre_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Collection` ADD CONSTRAINT `Collection_genre_id_fkey` FOREIGN KEY (`genre_id`) REFERENCES `Genre`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
