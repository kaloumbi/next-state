import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";
import { TbBrandTailwind } from "react-icons/tb";

interface InquiryEmailProps {
  senderEmail: string;
  senderName: string;
  senderPhone?: string;
  ownerName: string;
  message: string;
  propertyTitle: string;
  propertyPrice?: string;
}

export default function RealEstateInquiryEmail({
  ownerName,
  propertyTitle,
  propertyPrice,
  senderName,
  senderEmail,
  senderPhone,
  message,
}: InquiryEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <TbBrandTailwind>
        <Head />
        <Preview>
          New property inquiry from {senderEmail} - {propertyTitle}
        </Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <section>
            <Text>Dear {ownerName}, </Text>
          </section>
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[32px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 m-0 mb-[8px]">
                New Property Inquiry
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Bonjour {ownerName},
              </Text>
            </Section>

            {/* Contenu principal adapté avec Tailwind */}
            <Text className="text-[15px] leading-[1.6] text-gray-700 mb-[16px]">
              <strong>{senderName}</strong> a manifesté de lintérêt pour votre
              annonce <strong>{propertyTitle}</strong>{" "}
              {propertyPrice ? `(${propertyPrice})` : ""} et souhaite vous
              contacter.
            </Text>

            <Section className="bg-gray-50 p-[20px] my-[24px] rounded-[6px] border-l-[4px] border-gray-900">
              <Text className="m-0 mb-[8px] text-[14px] text-gray-900">
                <strong>Nom :</strong> {senderName}
              </Text>
              <Text className="m-0 mb-[8px] text-[14px] text-gray-900">
                <strong>Email :</strong> {senderEmail}
              </Text>
              {senderPhone && (
                <Text className="m-0 text-[14px] text-gray-900">
                  <strong>Téléphone :</strong> {senderPhone}
                </Text>
              )}
            </Section>

            <Text className="text-[15px] leading-[1.6] text-gray-700">
              <strong>Message du client :</strong>
              <br />
              <span className="italic text-gray-500">{message}</span>
            </Text>

            <Section className="text-center mt-[32px]">
              <Button
                className="bg-gray-900 rounded-[6px] text-white text-[15px] font-bold no-underline text-center inline-block py-[12px] px-[24px]"
                href={`mailto:${senderEmail}`}
              >
                Répondre à {senderName}
              </Button>
            </Section>

            <Hr className="border-gray-200 my-[32px]" />
            <Text className="text-gray-400 text-[12px] text-center">
              Cet e-mail automatique a été envoyé depuis votre plateforme
              immobilière.
            </Text>
          </Container>
        </Body>
      </TbBrandTailwind>
    </Html>
  );
}
