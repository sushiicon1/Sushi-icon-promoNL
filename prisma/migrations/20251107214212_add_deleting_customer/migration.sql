-- DropForeignKey
ALTER TABLE "public"."MessageSubscription" DROP CONSTRAINT "MessageSubscription_customerId_fkey";

-- AddForeignKey
ALTER TABLE "public"."MessageSubscription" ADD CONSTRAINT "MessageSubscription_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
