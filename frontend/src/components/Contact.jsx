function Contact() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          Contact Us
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          We're here to help! Whether you have questions about our vehicles,
          services, or anything else, our team is ready to assist you. Reach out
          to us through the channels below, and we'll get back to you as soon as
          possible.
        </p>
      </div>
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
            General Inquiries
          </h2>
          <div className="bg-white dark:bg-background-dark/50 rounded-lg p-6 shadow-sm">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </dt>
                <dd className="mt-1 text-base font-semibold text-primary">
                  <a
                    className="hover:underline"
                    href="mailto:info@autohaus.com"
                  >
                    info@autohaus.com
                  </a>
                </dd>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Phone
                </dt>
                <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                  (555) 123-4567
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
            Sales Department
          </h2>
          <div className="bg-white dark:bg-background-dark/50 rounded-lg p-6 shadow-sm">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </dt>
                <dd className="mt-1 text-base font-semibold text-primary">
                  <a
                    className="hover:underline"
                    href="mailto:sales@autohaus.com"
                  >
                    sales@autohaus.com
                  </a>
                </dd>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Phone
                </dt>
                <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                  (555) 987-6543
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
            Service Department
          </h2>
          <div className="bg-white dark:bg-background-dark/50 rounded-lg p-6 shadow-sm">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </dt>
                <dd className="mt-1 text-base font-semibold text-primary">
                  <a
                    className="hover:underline"
                    href="mailto:service@autohaus.com"
                  >
                    service@autohaus.com
                  </a>
                </dd>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Phone
                </dt>
                <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                  (555) 456-7890
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
            Parts Department
          </h2>
          <div className="bg-white dark:bg-background-dark/50 rounded-lg p-6 shadow-sm">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </dt>
                <dd className="mt-1 text-base font-semibold text-primary">
                  <a
                    className="hover:underline"
                    href="mailto:parts@autohaus.com"
                  >
                    parts@autohaus.com
                  </a>
                </dd>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Phone
                </dt>
                <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                  (555) 789-0123
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
