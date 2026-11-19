-- CreateTable
CREATE TABLE "Nutrition" (
    "id" SERIAL NOT NULL,
    "calories" INTEGER NOT NULL,
    "saltGrams" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "Nutrition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nutrition_recipeId_key" ON "Nutrition"("recipeId");

-- AddForeignKey
ALTER TABLE "Nutrition" ADD CONSTRAINT "Nutrition_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
