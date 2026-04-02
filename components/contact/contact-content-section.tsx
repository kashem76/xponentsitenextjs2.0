// components/contact/contact-content-section.tsx
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function ContactContentSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card shadow-xl rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Side - Contact Information */}
            <div className="relative bg-primary p-10 lg:p-12 overflow-hidden">
              {/* Background Decorations */}
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-medium text-white">Address:</h3>
                <h4 className="mt-8 text-primary-foreground/80">XPONENT</h4>
                <p className="text-base text-primary-foreground/80 max-w-3xl">
                  Noor Building, 2nd Floor. 700/B, DT Road. Dewanhat,
                  Chittagong-4100
                </p>

                <dl className="mt-8 space-y-6">
                  <div className="flex items-center text-base text-white">
                    <Phone
                      className="flex-shrink-0 w-6 h-6 text-primary-foreground/70"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+880 (1713) 432 880</span>
                  </div>
                  <div className="flex items-center text-base text-white">
                    <Mail
                      className="shrink-0 w-6 h-6 text-primary-foreground/70"
                      aria-hidden="true"
                    />
                    <span className="ml-3">hr@xponent.com.bd</span>
                  </div>
                </dl>

                {/* Social Links - Facebook & LinkedIn only */}
                <ul role="list" className="mt-8 flex space-x-12">
                  {/* Facebook */}
                  <li>
                    <a
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      href="https://www.facebook.com/xponent.infosystem/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        aria-hidden="true"
                      >
                        <path
                          d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </li>

                  {/* LinkedIn */}
                  <li>
                    <a
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      href="https://www.linkedin.com/company/xponent-infosystem-pvt-limited/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        aria-hidden="true"
                      >
                        <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Send Message */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 flex flex-col justify-center">
              <h3 className="text-lg font-medium text-foreground">
                Send us a message
              </h3>
              <p className="mt-4 text-muted-foreground">
                To learn about employment opportunities, please visit our
                <Link
                  href="/careers"
                  className="text-primary font-bold hover:underline"
                >
                  {" "}
                  careers page
                </Link>
                .
              </p>
              <p className="mt-2 text-muted-foreground">
                For inquiries, please contact our general mailbox below.
              </p>
              <div className="mt-10">
                <a
                  href="mailto:hr@xponent.com.bd"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
