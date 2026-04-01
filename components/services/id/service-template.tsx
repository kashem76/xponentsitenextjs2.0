import { IService } from "@/lib/types/services.types";
import ServiceHeroSection from "@/components/services/id/service-hero-section";
import ServiceApproachSection from "@/components/services/id/service-approach-section";
import ServiceCapabilitiesSection from "@/components/services/id/service-capabilities-section";
import ServiceBenefitsSection from "@/components/services/id/service-benefits-section";
import ServiceIndustriesDeliverablesSection from "@/components/services/id/service-industries-deliverables-section";
import ServiceCtaSection from "@/components/services/id/service-cta-section";
import { ServiceStructuredData } from "@/components/services/service-structured-data";

interface IServiceTemplateProps {
  service: IService;
}

export default function ServiceTemplate({ service }: IServiceTemplateProps) {
  return (
    <>
      <ServiceStructuredData service={service} serviceId={service?.id} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <ServiceHeroSection service={service} />

        {/* Approach Section */}
        <ServiceApproachSection approach={service.approach} />

        {/* Capabilities Section */}
        <ServiceCapabilitiesSection capabilities={service.capabilities} />

        {/* Benefits Section */}
        <ServiceBenefitsSection benefits={service.benefits} />

        {/* Industries & Deliverables Section */}
        <ServiceIndustriesDeliverablesSection
          industries={service.industries}
          deliverables={service.deliverables}
        />

        {/* CTA Section */}
        <ServiceCtaSection serviceName={service.name} />
      </div>
    </>
  );
}
