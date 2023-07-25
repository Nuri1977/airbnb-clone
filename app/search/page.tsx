"use client";
import { useCallback, useEffect, useState } from "react";
import { IListingsParams } from "../actions/getListings";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import ListingCard from "../components/listings/ListingCard";
import { Listing, User } from "@prisma/client";
import qs from "query-string";
import { useSession } from "next-auth/react";

interface FilterPageProps {
  searchParams: IListingsParams;
}

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

async function getListingsApi(searchParams: FilterPageProps) {
  const { searchParams: listingsParams } = searchParams;

  // Convert IListingsParams to a URL query string
  const searchString = qs.stringify(listingsParams);

  if (!searchString) {
    return [];
  }

  const res = await fetch(`${serverUrl}/api/search?${searchString}`, {
    cache: "no-store",
  });
  const listings = await res.json();
  return listings;
}

export default function SearchPage(searchParams: FilterPageProps) {
  const { data: session, status } = useSession();
  const [listings, setListings] = useState<Listing[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const start = useCallback(async () => {
    const listingsResponse = await getListingsApi(searchParams);
    setListings(listingsResponse);
  }, [searchParams]);

  useEffect(() => {
    start();
  }, [start]);

  useEffect(() => {
    setCurrentUser(session?.user as User);
  }, [session?.user]);

  if (!listings || listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <main>
      <Container>
        <div
          className="
            pt-28
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
