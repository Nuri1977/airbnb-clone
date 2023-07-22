import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface ListingPageProps {
  params: {
    listingId: string;
  };
}

const ListingPage: React.FC<ListingPageProps> = async ({
  params: { listingId },
}) => {
  const listing = await getListingById(listingId);
  const reservations = await getReservations({ listingId });
  const currentUser = await getCurrentUser();

  if (!listing)
    return (
      <EmptyState
        title="No listing was found"
        subtitle="Navigate to main page"
        showReset
        resetText="Go to main page"
      />
    );
  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
};

export default ListingPage;
