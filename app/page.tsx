import { rooms } from "@/data/data";
import Card from "../components/card";
import Heading from "@/components/heading";

export default function Home() {
  return (
    <div className="container mx-auto space-y-4">
      <Heading>Available Rooms</Heading>
      {rooms.length > 0 ? (
        rooms.map((room) => <Card key={room.$id} room={room} details={false} />)
      ) : (
        <p className="">No rooms found</p>
      )}
    </div>
  );
}
