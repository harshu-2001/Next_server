"use client";

import Image from 'next/image';
import background from "../../../assets/images/hero-bg.jpg";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function HeroSection() {
  const form = useRef<HTMLFormElement | null>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current === null) {
      setStatus('Form reference is not set.');
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'service_g6imoql',
        'template_u165kqs',
        form.current,
        'p0CvmPtwhXBlEuZj-'
      );
      console.log('SUCCESS!', result.text);
      setStatus('Subscription successful!');
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('Subscription failed. Please try again.');
    }

    setEmail('');
  };

  return (
    <section id="hero" className="hero section dark-background">
      <div>
        <Image 
          src={background} 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
          className="aos-init aos-animate"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
              Elevating Concepts to Reality: Explore My Work Here!
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
              I'm Harsh Shrivastava (Software Developer)
            </p>
          </div>
          <div className="col-lg-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="sign-up-form">
                <input
                  type="email"
                  name="to_email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input type="submit" value="Subscribe" />
              </div>
            </form>
            {status && <p>{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
