-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "pageNumber" INTEGER NOT NULL,
    "cookingMinutes" INTEGER NOT NULL,
    "cookBookId" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_cookBookId_fkey" FOREIGN KEY ("cookBookId") REFERENCES "Cookbook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
