/* eslint-disable @next/next/no-img-element */
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="mt-4 bg-primary/5">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="mb-4 flex items-center sm:mb-0">
            <img
              src="https://placehold.co/150x50"
              className="mr-3"
              alt="Logo"
            />
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Separator className="mx-auto my-6 max-w-[95vh] bg-white/60" />
        <span className="block text-sm sm:text-center">
          © 2023{" "}
          <a
            href="https://stefan-asandei.netlify.app"
            className="hover:underline"
          >
            Stefan-Alexandru Asandei
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
