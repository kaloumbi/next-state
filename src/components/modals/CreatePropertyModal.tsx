"use client";

import { useState } from "react";
import Modal from "./Modal";
import { useCreatePropertyModalStore } from "@/app/store/useCreatePropertyModalStore";
import Button from "../ui/Button";
import { propertyTypes } from "@/constants/PropertyTypes";
import PropertyTypeCard from "../properties/PropertyTypeCard";

const STEPS = {
  TYPE: 0,
  LOCATION: 1,
  DETAILS: 2,
  FEATURE: 3,
  IMAGE: 4,
  PRICING: 5,
};

export default function CreatePropertyModal() {
  const { isOpen, close } = useCreatePropertyModalStore();

  const [step, setStep] = useState(2);

  const [loading, setLoading] = useState(false);

  const [propertyType, setPropertyType] = useState("");

  const stepTitle = () => {
    switch (step) {
      case STEPS.TYPE:
        return "Select property type";
      case STEPS.LOCATION:
        return "Where is the property lacated ?";
      case STEPS.DETAILS:
        return "Share some basics about your place";
      case STEPS.FEATURE:
        return "Property description";
      case STEPS.IMAGE:
        return "Upload property image";
      case STEPS.PRICING:
        return "Set property price";
      default:
        return "";
    }
  };

  const createListing = async () => {};

  return (
    <Modal onClose={close} isOpen={isOpen} title="Create a new listing">
      <div
        className="mb-6 flex items-center justify-between text-sm
      text-gray-500"
      >
        <span> Step {step + 1} of 6 </span>
        <span className="font-medium text-gray-700"> {stepTitle()} </span>
      </div>

      <div
        className="min-h-55 rounded-xl text-gray-400 p-6 border
      border-dashed border-gray-300"
      >
        {step === STEPS.TYPE && (
          <div
            className="grid grid-cols-2 gap-4 w-full max-h-[50vh]
          overflow-y-scroll no-scrollbar"
          >
            {propertyTypes.map((item) => (
              <PropertyTypeCard
                label={item.label}
                icon={item.icon}
                selected={propertyType === item.slug}
                onClick={() => setPropertyType(item.slug)}
                key={item.slug}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 flex gap-3">
        {step > STEPS.TYPE && (
          <Button
            variant="outline"
            fullWidth
            onClick={() => setStep((prev) => prev - 1)}
          >
            Back
          </Button>
        )}

        <Button
          fullWidth
          onClick={() =>
            step < STEPS.PRICING ? setStep((prev) => prev + 1) : createListing()
          }
          loading={loading}
        >
          {step === STEPS.PRICING ? "Create listing" : "Next"}
        </Button>
      </div>
    </Modal>
  );
}
