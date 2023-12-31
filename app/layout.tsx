import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/searchModal";
import SuspenseSearchParams from "./components/SuspenseSearchParams";
import AppProviders from "./providers/AppProviders";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb",
  description:
    "Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <AppProviders>
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SuspenseSearchParams>
            <SearchModal />
          </SuspenseSearchParams>
          <Navbar currentUser={currentUser} />
          <div className="pt-24 pb-12">{children}</div>
        </AppProviders>
      </body>
    </html>
  );
}
