import prisma from "@/app/libs/prismadb";
import { Listing, User } from "@prisma/client";

export default async function getListingByUser(userID: string) {
  try {
    const listings = await prisma.listing.findMany({
      where: {
        userId: userID,
      },
      include: {
        user: true,
      },
    });

    if (!listings) return null;
    return listings as (Listing & { user: User })[];
  } catch (error: any) {
    throw new Error(error);
  }
}
