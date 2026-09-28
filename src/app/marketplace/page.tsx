import FrontendLayout from "@/components/layouts/FrontendLayout";
import FilterButton from "@/components/marketplace/FilterButton";
import MarketPlace from "@/components/marketplace/MarketPlace";
import Navbar from "@/components/navbar/Navbar";
import PropertyCard from "@/components/properties/PropertyCard";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import Button from "@/components/ui/Button";
import { dummyProperties } from "@/constants/dummyProperties";
import { Suspense } from "react";
import { HiOutlineAdjustments } from "react-icons/hi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

type MarketPageProps = {
  searchParams: Promise<{
    search?: string;
    propertyType?: string;
    location?: string;
    address?: string;
    minPrice?: number;
    maxPrice?: number;
  }>;
};

export default async function MarketPage({ searchParams }: MarketPageProps) {
  const params = await searchParams;
  return (
    <FrontendLayout>
      <Navbar variant="solid" />

      <div className="mx-auto max-w-7xl p-6 lg:px-12 w-full">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-text md:text-3xl">Explore</h2>

          {/* import filter component */}
          <FilterButton />
        </div>

        {/* Market place component */}
        <Suspense fallback={<CardSkeleton />}>
          <MarketPlace searchParams={params} />
        </Suspense>
      </div>
    </FrontendLayout>
  );
}
