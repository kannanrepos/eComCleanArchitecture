import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import NewsLetterSection from './NewsLetterSection';
import { PaymentBadge, SocialNetworks } from '@/types/footer.type';
import { cn } from '../../../lib/utils';
import Link from 'next/link';
import HeaderTag from '../../common/HeaderTag';
import {
  SiPhonepe,
  SiGooglepay,
  SiApplepay,
  SiMastercard,
  SiVisa,
} from 'react-icons/si';
import { CgPaypal } from 'react-icons/cg';
import LinksSection from './LinksSection';
const socialsData: SocialNetworks[] = [
  {
    id: 1,
    icon: <FaTwitter />,
    url: 'https://twitter.com',
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    url: 'https://facebook.com',
  },
  {
    id: 3,
    icon: <FaInstagram />,
    url: 'https://instagram.com',
  },
  {
    id: 4,
    icon: <FaGithub />,
    url: 'https://github.com/kannansgithub',
  },
];

const paymentBadgesData: PaymentBadge[] = [
  {
    id: 1,
    icon: <SiVisa />,
  },
  {
    id: 2,
    icon: <SiMastercard />,
  },
  {
    id: 3,
    icon: <CgPaypal />,
  },
  {
    id: 4,
    icon: <SiApplepay />,
  },
  {
    id: 5,
    icon: <SiGooglepay />,
  },
  {
    id: 5,
    icon: <SiPhonepe />,
  },
];
const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-primary-foreground"></div>
        <div className="px-4">
          <NewsLetterSection />
        </div>
      </div>
      <div className="pt-8 md:pt-[50px] bg-primary-foreground px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <HeaderTag title="ZentroCart" />
              <p className="text-black/60 text-sm mb-9">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex items-center">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid col-span-9 lg:grid-cols-4 lg:pl-10">
              <LinksSection />
            </div>
            <div className="grid lg:hidden grid-cols-2 sm:grid-cols-4">
              <LinksSection />
            </div>
          </nav>

          <hr className="h-[1px] border-t-black/10 mb-6" />
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-2">
            <p className="text-sm text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1">
              ZentroCart &copy; Made by{' '}
              <Link
                href="https://github.com/kannansgithub"
                className="text-black font-medium"
              >
                Kannan S
              </Link>
              {', '}
              Designed by{' '}
              <Link
                href="https://www.linkedin.com/in/kanns"
                className="text-black font-medium"
              >
                Kannan Subramanian
              </Link>
            </p>
            <div className="flex items-center">
              {paymentBadgesData.map((badge, _, arr) => (
                <span
                  key={badge.id}
                  className={cn([
                    arr.length !== badge.id && 'mr-3',
                    'w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center',
                  ])}
                >
                  {badge.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* <LayoutSpacing /> */}
      </div>
    </footer>
  );
};

export default Footer;
