-- CreateTable
CREATE TABLE "AuthPost" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "photo" TEXT[],
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "campaignPostId" INTEGER NOT NULL,
    "authUserId" INTEGER NOT NULL,

    CONSTRAINT "AuthPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuthPost" ADD CONSTRAINT "AuthPost_authUserId_fkey" FOREIGN KEY ("authUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthPost" ADD CONSTRAINT "AuthPost_campaignPostId_fkey" FOREIGN KEY ("campaignPostId") REFERENCES "CampaignPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
