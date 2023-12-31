import prisma from "@/app/libs/prismadb";
import { Listing, Reservation } from "@prisma/client";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params;
    const query: any = {};
    if (listingId) query.listingId = listingId;
    if (userId) query.userId = userId;
    if (authorId) query.listing = { user: { id: authorId } };
    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return reservations as (Reservation & { listing: Listing })[];
  } catch (error: any) {
    throw new Error(error);
  }
}
