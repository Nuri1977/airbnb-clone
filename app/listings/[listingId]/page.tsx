import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface ListingPageProps {
  params: {
    listingId: string;
  };
}

const ListingPage: React.FC<ListingPageProps> = async ({
  params: { listingId },
}) => {
  const listing = await getListingById(listingId);
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
  return <ListingClient listing={listing} currentUser={currentUser} />;
};

export default ListingPage;
