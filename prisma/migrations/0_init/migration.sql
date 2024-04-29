-- CreateTable
CREATE TABLE "car" (
    "id" BIGSERIAL NOT NULL,
    "make" VARCHAR(100) NOT NULL,
    "model" VARCHAR(100) NOT NULL,
    "price" DECIMAL(19,2) NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person" (
    "id" BIGSERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "gender" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100),
    "date_of_birth" DATE NOT NULL,
    "country_of_birth" VARCHAR(50) NOT NULL,
    "car_id" BIGINT,
    "pet_id" BIGINT,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pet" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "animal" VARCHAR(50) NOT NULL,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "person_car_id_key" ON "person"("car_id");

-- CreateIndex
CREATE UNIQUE INDEX "person_pet_id_key" ON "person"("pet_id");

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "car"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

