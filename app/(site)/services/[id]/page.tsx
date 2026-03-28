// app/(site)/services/[id]/page.tsx
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/services/id/service-template";
import {
  getServiceById,
  getAllServices,
} from "@/lib/utils/services/get-service-by-id";

interface IServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetailPage({
  params,
}: IServiceDetailPageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}
