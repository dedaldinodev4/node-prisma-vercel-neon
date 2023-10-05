-- CreateTable
CREATE TABLE "_books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "_books_bar_code_key" ON "_books"("bar_code");
