import { Listing } from "@prisma/client";
import { create } from "zustand";

interface RentModalState {
  isOpen: boolean;
  isEdit: boolean;
  data: Listing | null;
  onOpen: () => void;
  onClose: () => void;
  onOpenEdit: (listing: Listing) => void;
}

const useRentModal = create<RentModalState>((set) => ({
  isOpen: false,
  isEdit: false,
  data: null,
  onOpen: () => set({ isOpen: true, isEdit: false, data: null }),
  onClose: () => set({ isOpen: false, isEdit: false, data: null }),
  onOpenEdit: (listing) => set({ isOpen: true, isEdit: true, data: listing }),
}));

export default useRentModal;
