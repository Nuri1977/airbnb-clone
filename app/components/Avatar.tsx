"use client";
import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  currentUser?: User | null;
}

const Avatar: React.FC<AvatarProps> = ({ currentUser }) => {
  return (
    <Image
      src={currentUser?.image || "/images/placeholder.jpg"}
      width={30}
      height={30}
      className="rounded-full"
      alt="user image"
    />
  );
};

export default Avatar;
