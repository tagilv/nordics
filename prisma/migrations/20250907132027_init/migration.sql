-- CreateTable
CREATE TABLE "public"."Expression" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "expression" TEXT NOT NULL,
    "pronunciation" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Expression_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CountryInfo" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "funFacts" TEXT[],
    "learningTime" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CountryInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Expression_country_idx" ON "public"."Expression"("country");

-- CreateIndex
CREATE INDEX "Expression_date_idx" ON "public"."Expression"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Expression_date_country_key" ON "public"."Expression"("date", "country");

-- CreateIndex
CREATE UNIQUE INDEX "CountryInfo_country_key" ON "public"."CountryInfo"("country");
