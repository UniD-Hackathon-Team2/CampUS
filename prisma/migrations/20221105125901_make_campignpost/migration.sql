-- CreateTable
CREATE TABLE "CampaignPost" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "maxnum" INTEGER NOT NULL,
    "hashtag" TEXT[],
    "minnum" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,

    CONSTRAINT "CampaignPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CampaignPost" ADD CONSTRAINT "CampaignPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
