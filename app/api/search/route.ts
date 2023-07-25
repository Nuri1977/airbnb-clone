import getListingsByParams from "@/app/actions/getListingByParams";
import { NextResponse } from "next/server";
import qs from "query-string";

export async function GET(request: Request) {
  try {
    const rawParams = request.url.split("?")[1];
    let params = qs.parse(rawParams.toString());
    if (!params) return NextResponse.json([]);
    const listings = await getListingsByParams(params);

    // Now you have access to the query String parameters //
    // Or you can do it this way
    return NextResponse.json(listings);
    // also try getAll() I think that might work
  } catch (error: unknown) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
