import Link from "next/link";
import { Users, Zap, ArrowRight } from "lucide-react";

export default function AboutCtaSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Start a Project */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/20">
            <Zap className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
              Start a Project
            </h3>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Let&apos;s discuss how we can help you build custom software,
              automate processes, and achieve your digital goals.
            </p>
            <Link href="/#contact">
              <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>

          {/* Join Our Team */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/20">
            <Users className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
              Join Our Team
            </h3>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              We&apos;re always looking for talented individuals who are
              passionate about technology and solving complex problems.
            </p>
            <Link href="/careers">
              <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-white/90 transition-all font-semibold inline-flex items-center gap-2">
                View Open Positions
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
