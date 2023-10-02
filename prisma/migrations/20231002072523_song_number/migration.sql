/*
  Warnings:

  - Added the required column `number` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `song` ADD COLUMN `number` INTEGER NOT NULL;
