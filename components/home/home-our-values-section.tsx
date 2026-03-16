import { HOME_VALUES } from "@/lib/constants/home";

export default function HomeValuesSection() {
  return (
    <div className="bg-primary py-24 lg:py-32 px-6 lg:px-8 border-t border-primary-foreground/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-white/20 rounded-full">
            <span className="text-sm font-semibold text-white uppercase tracking-wide">
              Our Values
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
            Our Core Values Guide Everything We Do
          </h2>

          <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            The following core values and beliefs define what&apos;s important
            to us:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {HOME_VALUES.map((value, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 lg:p-10 border-4 border-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <span className="flex items-center justify-center h-14 w-14 rounded-full bg-accent text-primary text-2xl font-bold shadow-md">
                    {value.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl lg:text-2xl text-gray-900 mb-3">
                    {value.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
