import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
}

export default function getListings(params: IListingsParams) {
  try {
    let query: any = {};
    const { userId } = params;

    if (userId) {
      query.userId = userId;
    }

    const listings = prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}
