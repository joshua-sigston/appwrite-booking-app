"use client";

import { Room } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import DateComponent from "./date-component";
import { Button } from "./ui/button";

interface CardProps {
  room: Room;
  details?: boolean;
}

export default function Card({ room, details }: CardProps) {
  return (
    <div className="border border-gray-200 rounded-md fit-content p-4">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:space-x-4">
        <div className="flex flex-col space-y-4  space-x-4 mb-4 md:flex-row md:items-center">
          <Image
            src={`/assets/images/${room.image}`}
            alt={room.name}
            width={200}
            height={200}
            className="object-cover w-full md:w-48 md:h-48 h-32 rounded-md mt-4"
          />
          <div className="text-sm">
            <h3 className="font-bold text-lg">{room.name}</h3>
            <p className="">
              <span className="font-semibold">Address:</span> {room.address}
            </p>
            <p className="">
              <span className="font-semibold">Availability:</span>{" "}
              {room.availability}
            </p>
            <p className="">
              <span className="font-semibold">Price:</span> $
              {room.price_per_hour}
            </p>
          </div>
        </div>

        {!details && (
          <Link
            href={`/room/${room.$id}`}
            className="bg-gray-700 text-white p-2 rounded-md text-sm text-center"
          >
            View Room
          </Link>
        )}
      </div>
      {details && (
        <>
          <div className="mb-4">
            <p className="">{room.description}</p>
          </div>
          <div className="">
            <DateComponent />
          </div>
          <div className="mt-4 ">
            <Button className="w-full">Book Now</Button>
          </div>
        </>
      )}
    </div>
  );
}
