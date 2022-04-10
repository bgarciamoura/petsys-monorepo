-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_tutor_id_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_user_id_fkey";

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "tutor_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_tutor_id_fkey" FOREIGN KEY ("tutor_id") REFERENCES "Tutor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
