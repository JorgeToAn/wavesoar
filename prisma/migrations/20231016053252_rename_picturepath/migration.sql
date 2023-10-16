/*
  Warnings:

  - You are about to drop the column `picture_path` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `picture_path`,
    ADD COLUMN `picture_url` VARCHAR(191) NOT NULL DEFAULT '/images/default_user.png';
