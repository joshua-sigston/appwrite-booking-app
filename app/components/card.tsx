import { Room } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  room: Room;
  details?: boolean;
}

export default function Card({ room, details }: CardProps) {
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-md p-4">
      <div className="flex items-center space-x-4">
        <Image
          src={`/assets/images/${room.image}`}
          alt={room.name}
          width={200}
          height={200}
          className="object-cover w-48 h-32 rounded-md shrink-0"
        />
        <div className="">
          <h3 className="font-bold text-lg">{room.name}</h3>
          <p className="">
            <span className="font-semibold">Address:</span> {room.address}
          </p>
          <p className="">
            <span className="font-semibold">Availability:</span>{" "}
            {room.availability}
          </p>
          <p className="">
            <span className="font-semibold">Price:</span> ${room.price_per_hour}
          </p>
        </div>
      </div>
      <div className="">
        {!details && (
          <Link href={`/room/${room.$id}`} className="">
            View Room
          </Link>
        )}
      </div>
    </div>
  );
}
