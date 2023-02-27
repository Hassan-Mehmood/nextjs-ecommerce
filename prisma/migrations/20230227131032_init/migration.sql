-- CreateTable
CREATE TABLE "Carousel" (
    "Carousel_id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Carousel_pkey" PRIMARY KEY ("Carousel_id")
);
