/*
  Warnings:

  - Added the required column `isfund` to the `CampaignPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CampaignPost" ADD COLUMN     "isfund" BOOLEAN NOT NULL,
ADD COLUMN     "photo" TEXT[];
