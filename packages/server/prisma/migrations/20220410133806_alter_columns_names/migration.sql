-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_tutor_id_fkey";

-- AlterTable
ALTER TABLE "Pet" ALTER COLUMN "tutor_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_tutor_id_fkey" FOREIGN KEY ("tutor_id") REFERENCES "Tutor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
