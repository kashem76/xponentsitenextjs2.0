import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/services/service-template";
import {
  getServiceById,
  getAllServices,
} from "@/lib/utils/services/get-service-by-id";

interface IServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: IServiceDetailPageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | Xponent Services`,
    description: service.shortDescription,
  };
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
