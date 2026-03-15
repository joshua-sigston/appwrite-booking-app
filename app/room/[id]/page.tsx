import Card from "@/components/card";
import { rooms } from "@/data/data";
import { Room } from "@/lib/types";

interface RoomPageProps {
  params: {
    id: string;
  };
  room: Room;
}

export default async function RoomsPage({ params }: RoomPageProps) {
  const { id } = await params;
  const room = rooms.find((room) => room.$id === id);
  const details = true;

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="container mx-auto">
      <Card room={room} details={details} />
    </div>
  );
}
