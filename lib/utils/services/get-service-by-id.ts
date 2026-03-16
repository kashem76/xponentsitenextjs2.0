import { servicesData } from "@/lib/data/services.data";
import { IService } from "@/lib/types/services.types";

export function getServiceById(id: string): IService | undefined {
  return servicesData.services.find((service) => service.id === id);
}

export function getAllServices(): IService[] {
  return servicesData.services;
}
