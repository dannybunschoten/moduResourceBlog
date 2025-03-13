import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-moduspec-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8 relative w-[180px] h-[40px]">
            <img
              src="/moduSpec.svg"
              alt="ModuSpec Logo"
              className="object-contain w-full h-full brightness-0 invert"
            />
          </div>

          <div className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <Link
                  to="/"
                  className="font-medium hover:text-moduspec-red transition-colors"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-medium hover:text-moduspec-red transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-medium hover:text-moduspec-red transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            © Copyright {currentYear} - All Rights Reserved by{" "}
            <a
              href="https://moduspec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ModuResources
            </a>{" "}
            Distributed By{" "}
            <a
              href="https://www.smartflowapps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Smartflow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
