-- CreateTable
CREATE TABLE "Chef" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "town" TEXT NOT NULL,

    CONSTRAINT "Chef_pkey" PRIMARY KEY ("id")
);
