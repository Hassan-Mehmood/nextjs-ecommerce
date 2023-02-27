-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "source" TEXT[],
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "size" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);
