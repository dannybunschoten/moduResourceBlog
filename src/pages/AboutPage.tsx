export default function AboutPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="about-me">
            <h3 className="text-2xl md:text-3xl font-medium mb-6">
              Hi we are ModuSpec
            </h3>
            <p className="mb-12">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet. , consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo
            </p>

            <div className="relative mb-16 rounded-lg overflow-hidden">
              <div className="absolute -top-12 -right-10 z-0">
                <img
                  src="/images/about/blob1.svg"
                  alt="Decorative shape"
                  className="w-[150px] h-[150px]"
                />
              </div>
              <div className="absolute -bottom-10 -left-16 z-0">
                <img
                  src="/images/about/blob2.svg"
                  alt="Decorative shape"
                  className="w-[150px] h-[150px]"
                />
              </div>
              <img
                src="team.jpg"
                alt="ModuSpec team"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-medium mb-6">
              Hey there, what's up?
            </h3>
            <p className="mb-12">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet. consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet. consetetur sadipscing elitr, sed diam nonumy.
            </p>

            <h3 className="text-2xl md:text-3xl font-medium mb-6">
              We are good at what we do best
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
