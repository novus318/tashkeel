import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'
import { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'


export const metadata: Metadata = {
  title: "Contact TASH-KEEL express business setup Service Dubai | TASH-KEEL express",
  description:
    "Looking for business setup services in Dubai? Tash-keel express has been offering company formation and business setup in Dubai, UAE",
  keywords: [
    "Business setup Dubai",
    "company formation",
    "Dubai free zone",
    "company registration",
    "start a business",
    "business license",
    "offshore company setup",
    "mainland company formation",
    "business setup services",
    "Dubai economic department",
    "Bank Account Opening",
"Business Consulting Services",
"Business License Services and Amendments",
"Certificate attestation services",
"Civil Defence Approvals",
"Company Liquidation Services",
"Driving License Services",
"Dubai Chamber & Dubai Customs Services",
"Offshore Company",
 "Free Zone Company Set-up",
"Dubai Economic",
"Dubai Free Zone Company",
"Dubai Mainland Company",
"Ejari Service",
"Emirates Id or Medical Services",
"Golden Visa",
"Government Legal Translations",
"Green Visa",
"Immigration & Labour Services",
"Insurance Services",
"International Visa Services",
"Investor Service Plan",
"Notary Services",
"Payrol Service",
"Business For Sale",
"Strategic Corporate PR Services",
"Tasjeel Service",
"Trade License Services",
"Trademark & ISO Registration Service",
"Trusted Sponsorship Service",
"Vat Registration Service",
  ],
  icons: {
    icon: "/fav.png",
  },
  openGraph: {
    title: "Business setup consultants in UAE | TASH-KEEL express",
    description:
      "Looking for business setup services in Dubai? Tash-keel express has been offering company formation and business setup in Dubai, UAE",
    url: "https://tashkeelexpress.com/contact",
    type: "website",
    images: [
      {
        url: "https://tashkeelexpress.com/og.png",
        width: 1200,
        height: 630,
        alt: "Business setup consultants in UAE | TASH-KEEL express",
      },
    ],
  },
};
const Page = () => {
  
  return (
   <div>
      <Toaster />
     <Navbar/>
<ContactContent/>
    <Footer/>
   </div>
  )
}

export default Page