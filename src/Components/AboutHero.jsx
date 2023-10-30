import React from 'react';
import Logo from './../assets/6842463_3456180.svg';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className="container mx-auto px-4 my-16">
      <div className="card">
        <figure className="h-92">
          <Image src={Logo} alt="Orbiba Robotics" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-4">
            İnnovation in Agriculture with Orbiba Robotics
          </h2>
          <p>
            Orbiba stands for &ldquo;an organic bond&rdquo; motto. Our basic
            philosophy is the idea of &ldquo;People become what they eat&rdquo;.
            We believe that the cleaner the basic foods that sustain a
            person&rsquo;s life, the cleaner his body, spiritual and
            intellectual development will be.
            <br />
            <br /> Orbiba Robotics is an agriculture teknoloji startup that we
            established to produce affordable robot platforms that process data
            with AI for every individual who wants to contribute in the field of
            clean agriculture.
            <br />
            <br /> With this initiative, we want to support organic agriculture
            practitioners who take the initiative to solve the problem of access
            to safe food, the awareness of which is increasing day by day in the
            world, with smart small robots that we will design and develop, with
            minimal carbon footprint, using renewable energy, low cost and high
            return on investment.
            <br />
            <br /> While providing this support, we aim to provide solutions in
            line with new technological developments by discussing the
            difficulties experienced in organic agriculture with our relevant
            stakeholders.
            <br />
            <br />
          </p>
          <div>
            <h1 className="text-2xl font-bold mb-4">Our Initiative Values</h1>

            <div className="mb-4">
              <h2 className="text-lg font-bold mb-2">
                1. Beneficial to Nature and its Contents
              </h2>
              <p>
                We strive to create initiatives that are beneficial to nature
                and all that it encompasses.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-bold mb-2">2. Innovative</h2>
              <p>
                We promote and embrace innovation in all our endeavors, aiming
                to make a positive difference.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2">
                3. Sharing with Humanity with Open Source Philosophy
              </h2>
              <p>
                We believe in sharing our knowledge and creations with humanity
                through the open-source philosophy, fostering collaboration and
                progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
