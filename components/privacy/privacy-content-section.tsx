// components/privacy/privacy-content-section.tsx
export default function PrivacyContentSection() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="">
          {/* Introduction */}
          <SectionHeadline>Introduction</SectionHeadline>

          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            We protect all the data and information we may collect from visitors
            on our website, and users of our products and services. 'Trust' is
            our watchword so we just want to let you know that we do not trade,
            sell, or rent out any of your data to any third-party for any
            reason. To show our commitment, we'll outline in this policy exactly
            the kind of personal data we collect and why, what we do with your
            personal data, how we secure your personal data and how you can
            change or delete your personal data. Please read the following
            carefully to understand our views on and practices (policies)
            regarding the collection, use, disclosure of personal data when you
            use our services and the choices you have associated with that data.
          </p>

          {/* 1. Definitions */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            1. Definitions
          </h3>

          <SubHeadline>Personal Data</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            Personal data means any information that relates to an identifiable
            individual (one who can be identified directly or indirectly by
            reference to those data).
          </p>

          <SubHeadline>Usage Data</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            This is data generated automatically or from the system's service
            infrastructure itself, relating to a customer's account activity (
            for example the duration of a page visit).
          </p>

          <SubHeadline>Cookies</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            Internet cookies are small pieces of data sent from a website and
            stored on your device (computer or mobile phone) by your web
            browser.
          </p>

          <SubHeadline>Data Controller</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            Data controller means the legal person (or group of individuals) who
            is responsible for keeping and the use of personal information on
            the computer or in structured manual files. A data controller also
            determines the manner in which or the purpose for which any personal
            information is processed. We are the data controllers for your
            personal data so you can be sure that your data is safe.
          </p>

          <SubHeadline>Data Processors (or service providers)</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            We may employ the services of various service providers to ensure
            that your data is processed more effectively. Data processor means
            any legal person who processes a data (but is not have any
            responsibility or control over the data) on behalf of the data
            controller.
          </p>

          <SubHeadline>Data Subject</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            A data subject is one who uses a service (like ours) and whose
            personal information is being collected, held, or processed.
          </p>

          {/* 2. What Information Do We Collect */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            2. What Information Do We Collect and How Do We Collect It?
          </h3>

          <SubHeadline>Personal Data</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            While using our service we may ask you to provide some personal
            information that we can use to identify you. This information may
            include but is not limited to:
          </p>
          <ul className="mt-3 text-base leading-7 text-muted-foreground list-disc list-inside space-y-1">
            <li>Your first name</li>
            <li>Your state</li>
            <li>Your province</li>
            <li>Your Zip/postal code</li>
            <li>Your city</li>
          </ul>

          <SubHeadline>Usage Data</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            We may also collect information such as your computer's IP (internet
            protocol) address, the type of browser you use, your browser
            version, the pages on our website that you visit, the date and time
            of your visit, how long you spend on those web pages, and other
            statistics. This information helps us to ascertain how our service
            is accessed and used.
          </p>

          <SubHeadline>Location Data</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            When you make use of our service, we may also receive and store
            information about your location if you grant us the permission to do
            so. We use this data to provide you with relevant features of our
            services, as well as to improve and customize our service. You can
            easily enable or disable device location when you use our service at
            any time through your device settings.
          </p>

          {/* 3. How Do We Use the Information Collected */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            3. How Do We Use the Information Collected?
          </h3>

          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            If you hold an account or use any of Xponent's service, then we may
            use your basic content information to contact you with relevant
            content such as;
          </p>
          <ul className="mt-3 text-base leading-7 text-muted-foreground list-disc list-inside space-y-1">
            <li>Marketing or promotional materials</li>
            <li>Newsletters</li>
            <li>Blog Posts</li>
            <li>Other relevant information that may find interesting</li>
          </ul>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            If at any point in time you wish to opt-out of receiving any
            marketing messages from us, you can click on the unsubscribe link or
            follow the instruction provided in any email we send you.
          </p>

          {/* 4. Use of Cookies */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            4. Use of Cookies
          </h3>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            Our website uses cookies to collect information about your browsing
            or purchase behavior on a particular device (computer or mobile
            phones) which includes information about pages viewed, the duration
            of time spent on a webpage, products purchased, and your navigation
            around our website. We use these cookies to enhance and deliver a
            better user experience by delivering targeted ads that are relevant
            to you, measuring the effectiveness of marketing campaigns, and even
            limiting the number of times you may see a particular ad. Don't
            worry, we won't use these cookies to steal personal information like
            your name, address, or other classified information on your device,
            nor will we hijack your device. By visiting our website, you grant
            us the permission to send these cookies to your device and accessing
            them when next you visit our site in the future. Through the
            settings section of your website, you can delete cookies or
            configure your internet browser to reject all cookies any time you
            visit our site. However, if you reject cookies, your user experience
            may be affected when using our site.
          </p>

          {/* 5. Do We Share Your Personal Information */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            5. Do We Share Your Personal Information?
          </h3>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            We do not sell or rent any of your data to any other third party.
            However, as an essential part of being able to render our services
            to you, we may share your data with the following categories of
            companies:
          </p>
          <ul className="mt-3 text-base leading-7 text-muted-foreground list-disc list-inside space-y-1">
            <li>
              Professional service providers to help us provide, analyze, and
              improve our service e.g marketing agencies, advertising partners,
              and website hosts
            </li>
            <li>
              Law enforcement or fraud protection agencies to prevent fraud or
              abuse of Xponent or it's users
            </li>
            <li>Payment service providers to handle all cash transaction.</li>
          </ul>

          {/* 6. How Do We Store Your Personal Data */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            6. How Do We Store Your Personal Data?
          </h3>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            We review and enhance our security and privacy policies periodically
            so that only the right individuals have access to the information.
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            Though we have such security measures in place, we cannot guarantee
            that these measures will make our computers 100% secure and prevent
            the individual information on them from being illegally accessed or
            stolen - remember that no method of electronic storage or method of
            transmission over the internet is absolutely secure.
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            A password protects your account for your privacy and security so
            you must carefully choose the appropriate (strong) password,
            restrict unauthorized access to device or computer, and signing off
            once you are done accessing account.
          </p>

          {/* 7. Retention of Information */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            7. Retention of Information
          </h3>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            We may retain and use your data information for a period of time
            that is required to comply with our legal obligation, enforce our
            agreement, or resolve a dispute.
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            If you wish to no longer use your account or request that we cease
            to use your personal information to provide you our service, you can
            send us a mail at support@xponent.com.bd to delete your account and
            we will try to delete your information quickly upon receiving your
            request.
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            We may retain an archived copy of certain records that we deem
            necessary for our accounting and legal purposes or required by law.
          </p>

          {/* 8. Our Privacy Towards Children */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            8. Our Privacy Towards Children
          </h3>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            Here at Xponent, we do not overlook the protection of children
            privacy because it is particularly important in data protection.
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            We'll never knowingly collect any personal data of anyone under the
            age of 13 unless parental consent is made available prior to using
            our service. If we discover any individual information that we may
            have collected from a child (under 13 years), that data will be
            removed from our system immediately.
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            Because we do not collect such information, anyone under the age of
            13 is not eligible to use our service. If you, as a parent or
            guardian obtains actual knowledge that your child is using our
            service without your consent, please contact us at
            support@xponent.com.bd and we'll ensure that all the personal data
            of your child is erased completely from our system.
          </p>

          {/* 9. Your Rights and Access to Information */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            9. Your Rights and Access to Information
          </h3>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            At all times, Xponent is committed to protecting and respecting the
            privacy within your account. Under the GDPR, as a user of our
            service, several rights are available to you in relation to any
            personal data that we hold about you. These rights include:
          </p>

          <SubHeadline>Right to Access</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            You have the right to know the kind of personal data we hold about
            you, how we store it, as well as how we process it. You can obtain
            this information by simply sending a request via email to our
            support team at support@xponent.com.bd
          </p>

          <SubHeadline>The Right of Rectification</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            You have the right to correct any inaccurate information that we
            hold about you.
          </p>

          <SubHeadline>The Right to Stop Marketing Messages</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            You have the right to opt out of any marketing email that we send
            you. To exercise this right, simply click on the 'unsubscribe' link
            in any of our emails.
          </p>

          <SubHeadline>The Right to Erasure</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            Upon receiving your request, we can delete your personal data at any
            time without you having any specific reason for doing so. This is
            also known as the right to be forgotten.
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            As a user of our service, if you wish to exercise any of your rights
            in accordance with the GDPR, please send us a specific request to
            support@xponent.com.bd and we'll grant your request with 30 days,
            where possible.
          </p>

          {/* 10. Changes to This Privacy Policy */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            10. Changes to This Privacy Policy
          </h3>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            We may update our Privacy Policy from time to time, hence you are
            advised to review this privacy policy frequently for any changes to
            stay informed about the measures we are adopting to help protect
            your personal information. Where appropriate, you will be notified
            by email.
          </p>

          {/* 11. Contact Us */}
          <h3 className="mt-8 text-2xl lg:text-3xl tracking-tight font-bold text-foreground">
            11. Contact Us
          </h3>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            If you wish to make an inquiry regarding this privacy policy, our
            services, website or anything else, you can contact us using the
            following information:
          </p>

          <SubHeadline>Address</SubHeadline>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            You have the right to know the kind of personal data we hold about
            you, how we store it, as well as how we process it. You can obtain
            this information by simply sending a request via email to our
            support team at support@xponent.com.bd
          </p>
          <ul className="mt-3 text-base leading-7 text-muted-foreground space-y-1">
            <li className="text-primary font-semibold">XPONENT</li>
            <li>700/B, DT Road.</li>
            <li>Chittagong-4100.</li>
          </ul>

          <ul className="mt-6 text-base leading-7 text-muted-foreground space-y-1">
            <li className="text-primary font-semibold">Email</li>
            <li>support@xponent.com.bd</li>
          </ul>

          <ul className="mt-6 text-base leading-7 text-muted-foreground space-y-1">
            <li className="text-primary font-semibold">Phone Number</li>
            <li>+88 (01713) 432 880</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Section Headline Component
function SectionHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}

// Sub Headline Component
function SubHeadline({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 text-xl lg:text-2xl text-foreground font-bold sm:mt-6">
      {children}
    </p>
  );
}
