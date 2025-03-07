import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos accusam et justo duo dolores ea
            rebum Stet clita.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 mr-4">
                <MapPin className="h-4 w-4" />
              </div>
              <p className="text-gray-900">
                Address: Lorem 142 Str., 2352, Ipsum, State, USA
              </p>
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 mr-4">
                <Phone className="h-4 w-4" />
              </div>
              <a href="tel:+33-257634534" className="text-gray-900">
                Phone: +33-257634 534
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" required />
              </div>
              <Textarea placeholder="Message here…" className="min-h-[200px]" />
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree that my submitted data is being collected and stored.
                </label>
              </div>
              <Button type="submit" className="px-8">
                Send Message
              </Button>
            </form>
          </div>
          <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden bg-gray-200">
            {/* Map would go here - using a placeholder for now */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">
                Google Map would be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
