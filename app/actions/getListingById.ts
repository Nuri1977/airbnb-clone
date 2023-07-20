import prisma from "@/app/libs/prismadb";
import { Listing, User } from "@prisma/client";

export default async function getListingById(listingId: string) {
  try {
    if (listingId.length !== 24) return null;
    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) return null;
    return listing as Listing & { user: User };
  } catch (error: any) {
    throw new Error(error);
  }
}
