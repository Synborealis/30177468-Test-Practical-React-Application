-- CreateTable
CREATE TABLE "Cookbook" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "publishedYear" INTEGER NOT NULL,
    "chefId" INTEGER NOT NULL,

    CONSTRAINT "Cookbook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cookbook" ADD CONSTRAINT "Cookbook_chefId_fkey" FOREIGN KEY ("chefId") REFERENCES "Chef"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
