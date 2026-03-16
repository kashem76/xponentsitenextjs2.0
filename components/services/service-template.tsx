import ServiceApproachSection from "@/components/services/service-approach-section";
import ServiceBenefitsSection from "@/components/services/service-benefits-section";
import ServiceCapabilitiesSection from "@/components/services/service-capabilities-section";
import ServiceCtaSection from "@/components/services/service-cta-section";
import ServiceDeliverablesSection from "@/components/services/service-deliverables-section";
import ServiceHeroSection from "@/components/services/service-hero-section";
import ServiceIndustriesSection from "@/components/services/service-industries-section";
import { IService } from "@/lib/types/services.types";

interface IServiceTemplateProps {
  service: IService;
}

export default function ServiceTemplate({ service }: IServiceTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHeroSection service={service} />

      {/* Approach Section */}
      <ServiceApproachSection approach={service.approach} />

      {/* Capabilities Section */}
      <ServiceCapabilitiesSection capabilities={service.capabilities} />

      {/* Benefits Section */}
      <ServiceBenefitsSection benefits={service.benefits} />

      {/* Industries Section */}
      <ServiceIndustriesSection industries={service.industries} />

      {/* Deliverables Section */}
      <ServiceDeliverablesSection deliverables={service.deliverables} />

      {/* CTA Section */}
      <ServiceCtaSection serviceName={service.name} />
    </div>
  );
}
