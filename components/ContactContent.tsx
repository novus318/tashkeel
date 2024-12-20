'use client'
import React, { useRef, useState } from 'react'
import Meteors from './ui/meteors'
import { toast } from '@/hooks/use-toast';
import { Loader2, Map, PhoneCall, Send } from 'lucide-react';
import Link from 'next/link';
import { FaEnvelopeOpen, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactContent = () => {
  const YOUR_SERVICE_ID:any=process.env.NEXT_PUBLIC_YOUR_SERVICE_ID
const YOUR_TEMPLATE_ID:any=process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID
const YOUR_PUBLIC_KEY:any=process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
const [formData, setFormData] = useState({ name: "", email: "", message: "" });
const [isLoading, setIsLoading] = useState(false);
const formRef = useRef<HTMLFormElement | null>(null);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
          toast({
            variant:'destructive',
            title: 'All fields are required',
           description:"Please fill out all the required fields."

          })
        return;
        }
        setIsLoading(true);
        try {
          if (formRef.current) {
            await emailjs.sendForm(
              YOUR_SERVICE_ID,
              YOUR_TEMPLATE_ID,
              formRef.current,
              YOUR_PUBLIC_KEY
            );
            toast({
              variant:'default',
              title: 'Your message has been sent successfully',
            })
            setFormData({ name: "", email: "", message: "" });
          }
        } catch (error:any) {
          console.error(error);
          toast({
            variant:'destructive',
            title: 'Failed to send your message. Please try again later.',
            description: error.text
          })
        } finally {
          setIsLoading(false);
        }
      };
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 mt-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl sm:tracking-tight lg:text-6xl">
            Get in <span className="text-primary font-extrabold">Touch</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-muted-foreground">
            We&apos;re here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>
        <div className="mt-16 bg-white rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-secondary">Send us a message.</span>
              </h2>
              <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label htmlFor="name" className="sr-only">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary ${
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/70"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Send className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
              </span>
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
            </div>
          </div>
          <div className="relative pt-64 pb-10 px-4 sm:pt-48 sm:px-6 lg:px-8 lg:max-w-lg lg:w-full lg:pb-28 xl:pb-32">
            <div className="absolute inset-0">
              <iframe
                width="90%"
                height="70%"
                frameBorder="0"
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1803.8519406196583!2d55.3799611!3d25.2805449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c475ed7622b%3A0xd9e461a20a362c59!2sBin%20Shabib%20Mall!5e0!3m2!1sen!2sin!4v1732443639244!5m2!1sen!2sin"
               style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.9)' }}
              ></iframe>
            </div>
            <div className="relative bg-white rounded-lg shadow-md px-8 py-10 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <Map className="text-primary h-6 w-6 mr-3" />
              <span>Bin shabib mall, office no: M31 AL Qusais Dubai, United Arab Emirates</span>
            </div>
            <Link href="tel:++971505055886"  className="flex items-center text-gray-600">
              <PhoneCall className="text-primary h-6 w-6 mr-3" />
              <span>+971 505055886</span>
            </Link>
            <Link href="mailto:info@tashkeelexpress.com" className="flex items-center text-gray-600">
              <FaEnvelopeOpen className="text-primary h-6 w-6 mr-3" />
              <span>info@tashkeelexpress.com</span>
            </Link>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
            
            <a
              href="https://www.linkedin.com/in/tash-keel-express-6a174933a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-facebook"
                aria-label="Facebook"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
              href="https://www.facebook.com/share/1Attn3hQ4M/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-facebook"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
            href="https://www.instagram.com/tashkeelexpress"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-instagram"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/971505055886"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
          </div>
        </div>
        <div className="relative flex mt-16 bg-white  border-primary p-8 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <h2 className="text-3xl font-medium text-gray-900 mb-6">Why <span className="text-primary font-extrabold">Choose Us</span> for Your UAE Business Needs?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-semibold mb-2">Expertise in UAE Business Landscape</h3>
              <p className="text-muted-foreground text-xs">
                With our experience in the UAE market, we offer unparalleled insights into local business practices, regulations, and opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Comprehensive Business Solutions</h3>
              <p className="text-muted-foreground text-xs">
                From company formation to ongoing support, we provide end-to-end services to ensure your business thrives in the UAE.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Personalized Approach</h3>
              <p className="text-muted-foreground text-xs">
                We tailor our services to meet your specific needs, ensuring a customized strategy for your business success.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Streamlined Process</h3>
              <p className="text-muted-foreground text-xs">
                Our efficient procedures and extensive network help expedite your business setup, saving you time and resources.
              </p>
            </div>
          </div>
    </div>
      </div>
    </div>
  )
}

export default ContactContent