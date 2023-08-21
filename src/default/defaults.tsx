import inStyleLogo from "../assets/brands/inStyle.png";
import BustleLogo from "../assets/brands/Bustle.png";
import harperBazaarLogo from "../assets/brands/harperBazaar.png";
import versaceLogo from "../assets/brands/versace.png";
import ProductImg1 from "./../assets/products/1.png";
import ProductImg2 from "./../assets/products/2.png";
import ProductImg3 from "./../assets/products/3.png";
import ProductImg4 from "./../assets/products/4.png";
import ProductImg5 from "./../assets/products/5.png";
import ProductImg6 from "./../assets/products/6.png";
import ProductImg7 from "./../assets/products/7.png";
import ProductImg8 from "./../assets/products/8.png";
import ProductImg9 from "./../assets/products/9.png";
import ProductImg10 from "./../assets/products/10.png";
import ProductImg11 from "./../assets/products/11.png";
import aboutImg from "./../assets/about/1.png";
import FooterLogo from "./../assets/logo.svg";
import { FaTwitter, FaInstagram, FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
export const BannerBreands: { id: number; alt: string; logo: any }[] = [
  { id: 1, alt: "inStyle logo", logo: inStyleLogo },
  { id: 2, alt: "Bustle logo", logo: BustleLogo },
  { id: 3, alt: "Harper Bazaar logo", logo: harperBazaarLogo },
  { id: 4, alt: "Versace logo", logo: versaceLogo },
];
export const Products: {
  id: number;
  stripeId: string;
  name: string;
  images: [{ id: number; image: any }];
  sizes: any;
  category: string;
  gender: string;
  price: number;
  detail: string;
  slug: string;
}[] = [
    {
      id: 1,
      stripeId: '',
      name: "Brushed Raglan Sweatshirt",
      sizes: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'],
      images: [{ id: 1, image: ProductImg1 }],
      category: "sweater",
      price: 195,
      detail: 'The Brushed Raglan Sweatshirt is the perfect combination of comfort and style. Crafted with meticulous attention to detail, this sweatshirt is designed to provide a cozy and relaxed fit while keeping you effortlessly fashionable.',
      gender: "female",
      slug: 'brushed-raglan-sweatshirt'
    },
    {
      id: 2,
      stripeId: '',
      name: "Cameryn Sash Tie Dress",
      images: [{ id: 1, image: ProductImg2 }],
      sizes: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'],
      category: "dress",
      price: 545,
      detail: 'The Cameryn Sash Tie Dress is a stylish and versatile clothing item that combines elegance with comfort. This dress features a flattering silhouette with a fitted bodice and a flowing skirt that falls gracefully around the body. It is crafted from high-quality fabric, ensuring a soft and luxurious feel against the skin. The defining feature of this dress is the sash tie detail, which can be wrapped around the waist and tied in a bow or knot, adding a touch of femininity and creating a customized fit. With its timeless design and attention to detail, the Cameryn Sash Tie Dress is perfect for various occasions, from casual outings to more formal events, making it a wardrobe staple for any fashion-forward individual.',
      gender: "female",
      slug: 'ecameryn-sash-ti-dress'
    },
    {
      id: 3,
      stripeId: '',
      name: "Flex Sweatshirt",
      images: [{ id: 1, image: ProductImg3 }],
      sizes: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'],
      category: "sweater",
      price: 175,
      detail: 'The "Flex Sweatshirt" is a versatile and comfortable garment that combines the classic style of a sweatshirt with a stretchy fabric for enhanced flexibility. Stay cozy while enjoying unrestricted movement, making it perfect for workouts, lounging, or casual outings. Experience the ultimate blend of comfort and style.',
      gender: "female",
      slug: 'flex-sweatshirt'
    },
    {
      id: 4,
      stripeId: '',
      name: "Flex Sweatpants",
      images: [{ id: 1, image: ProductImg4 }],
      sizes: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'],
      category: "pants",
      price: 175,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      gender: "female",
      slug: 'flex-sweatpants'
    },
    {
      id: 5,
      stripeId: '',
      name: "Pink Fleece Sweatpants",
      images: [{ id: 1, image: ProductImg5 }],
      sizes: ['XS', 'S', 'L', 'XL'],
      category: "pants",
      price: 195,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      gender: "female",
      slug: 'pink-fleece-sweatpants'
    }
  ];

export const AboutData: {
  heading: string;
  image: any;
  detail: string;
  item: { heading: string; paragraph: string }[];
} = {
  heading: "Unique and Authentic Vintage Designer Jewellery",
  image: aboutImg,
  detail:
    "For the nomadic fashion spirit of now. We specialize in an exclusive collections of casual, semi-formal and formal for your wardrobe. Our garments are designed with care and love to incorporate global fashion as well as tradition.",
  item: [
    {
      heading: "Using Good Quality Materials",
      paragraph: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
    {
      heading: "100% Handmade Products",
      paragraph: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
    {
      heading: "Modern Fashion Design",
      paragraph: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
    {
      heading: "Discount for Bulk Orders",
      paragraph: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
  ],
};

export const FooterData: {
  logo: any;
  siteName: string
  detail: string;
  social: { id: number; link: string; icon: any; alt: string }[];
  company: { id: number; link: string; label: string }[];
  support: { id: number; link: string; label: string }[];
  contact: { id: number; link: string; label: string }[];
} = {
  logo: FooterLogo,
  siteName: 'Khaadi',
  detail:
    "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made",
  social: [
    {
      id: 1,
      link: "https://www.instagram.com/micromerger/",
      icon: <FaInstagram />,
      alt: "micromerger",
    },
    {
      id: 2,
      link: "https://github.com/walkinlogic",
      icon: <FaGithub />,
      alt: "Haroon Abbas",
    },
    {
      id: 3,
      link: "#",
      icon: <FaLinkedinIn />,
      alt: "Haroon",
    },
  ],
  company: [
    {
      id: 1,
      link: "/about",
      label: "About",
    },
    {
      id: 2,
      link: "/terms-use",
      label: "Terms of Use",
    },

    {
      id: 3,
      link: "/privacy-policy",
      label: "Privacy Policy",
    },
    {
      id: 4,
      link: "/how-it-works",
      label: "How it Works",
    },
    {
      id: 5,
      link: "/contact-us",
      label: "Contact Us",
    },

  ],
  support: [
    {
      id: 1,
      link: "/support-center",
      label: "Support Center",
    },
    {
      id: 2,
      link: "/services",
      label: "24h Service",
    },

    {
      id: 3,
      link: "/quick-chat",
      label: "Quick Chat",
    },


  ],
  contact: [
    {
      id: 1,
      link: "https://wa.me/+923235696050",
      label: "Whatsapp",
    },
    {
      id: 2,
      link: "/support",
      label: "Support 24h",
    },



  ],

};
