import Container from "@/app/Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptop</Link>
            <Link href="#">Desktop</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer services</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptop</Link>
            <Link href="#">Desktop</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
              illo incidunt repudiandae asperiores magni impedit, cum laudantium
              sint veniam dolor quasi sequi atque doloribus culpa? Amet
              laudantium iste architecto fugit.
            </p>
            <p>
              &copy; {new Date().getFullYear()} T~Ividy. All rights reserved
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <IoLogoTiktok size={22} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
