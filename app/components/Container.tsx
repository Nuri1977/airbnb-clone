"use client";

import Modal from "./modals/Modal";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <Modal
        isOpen={true}
        onClose={() => {}}
        onSubmit={() => {}}
        title={"Helo"}
        secondaryAction={() => {}}
        secondaryActionLabel={"Cancel"}
      />
      {children}
    </div>
  );
};

export default Container;
