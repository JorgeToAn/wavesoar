/*
  Warnings:

  - You are about to drop the column `collection_id` on the `song` table. All the data in the column will be lost.
  - You are about to drop the `collection` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `album_id` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `collection` DROP FOREIGN KEY `Collection_creator_id_fkey`;

-- DropForeignKey
ALTER TABLE `collection` DROP FOREIGN KEY `Collection_genre_id_fkey`;

-- DropForeignKey
ALTER TABLE `song` DROP FOREIGN KEY `Song_collection_id_fkey`;

-- AlterTable
ALTER TABLE `song` DROP COLUMN `collection_id`,
    ADD COLUMN `album_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `collection`;

-- CreateTable
CREATE TABLE `Album` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `picture_url` VARCHAR(191) NOT NULL DEFAULT '/images/default_album.png',
    `genre_id` INTEGER NULL,
    `artist_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Playlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `picture_url` VARCHAR(191) NOT NULL DEFAULT '/images/default_album.png',
    `is_private` BOOLEAN NOT NULL DEFAULT false,
    `creator_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PlaylistToSong` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PlaylistToSong_AB_unique`(`A`, `B`),
    INDEX `_PlaylistToSong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Song` ADD CONSTRAINT `Song_album_id_fkey` FOREIGN KEY (`album_id`) REFERENCES `Album`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_genre_id_fkey` FOREIGN KEY (`genre_id`) REFERENCES `Genre`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Playlist` ADD CONSTRAINT `Playlist_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlaylistToSong` ADD CONSTRAINT `_PlaylistToSong_A_fkey` FOREIGN KEY (`A`) REFERENCES `Playlist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlaylistToSong` ADD CONSTRAINT `_PlaylistToSong_B_fkey` FOREIGN KEY (`B`) REFERENCES `Song`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
