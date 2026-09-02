import { Property } from "@/types/property";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={`/property/${property.id}`}
      className="group relative h-125 overflow-hidden rounded-4xl"
    >
      <div className="w-full h-full relative">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="inset-0 object-cover transition duration-700 group-hover:scale-110"
        />

        {/* dark ovelay */}
        <div
          className="absolute inset-0
        bg-linear-to-t from-black/90 via-black/20 to-transparent"
        />

        {/* top badge */}
        <div
          className="absolute left-5 top-5 z-20 rounded-full bg-white/80
        px-4 py-2 text-sm
        font-semibold text-primary"
        >
          {property.status === "rent" ? "For Rent" : "For Sale"}
        </div>
      </div>
    </Link>
  );
}
