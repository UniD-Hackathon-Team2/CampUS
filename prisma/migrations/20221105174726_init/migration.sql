-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "gender" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userPassword" TEXT NOT NULL,
    "participatedPost" INTEGER[],
    "hashtag" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaignpost" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "text" TEXT,
    "location" TEXT,
    "maxnum" INTEGER,
    "hashtag" TEXT[],
    "minnum" INTEGER,
    "views" INTEGER,
    "participant" INTEGER NOT NULL DEFAULT 0,
    "isfund" BOOLEAN,

    CONSTRAINT "Campaignpost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Authpost" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "photo" TEXT[],
    "hashtag" TEXT[],
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "campaignPostId" INTEGER NOT NULL,
    "participant" INTEGER NOT NULL DEFAULT 0,
    "authUserId" INTEGER NOT NULL,

    CONSTRAINT "Authpost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "writerId" INTEGER,
    "campaignpostId" INTEGER,
    "text" TEXT,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- AddForeignKey
ALTER TABLE "Campaignpost" ADD CONSTRAINT "Campaignpost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Authpost" ADD CONSTRAINT "Authpost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
