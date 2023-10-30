import React from 'react';
import Accordion from './UI/Accordion';

const FAQ = () => {
  const items = [
    {
      id: 1,
      label: 'What Orbiba Robotics do?',
      content: 'We build robots for a variety of applications',
    },
    {
      id: 2,
      label: 'what services do we offer?',
      content:
        'We offer a variety of services for our clients including: 3D printing, CNC machining, and more to come!',
    },
    {
      id: 3,
      label: 'who are we?',
      content:
        'We are a group of engineers and designers who are passionate about robotics and technology.',
    },
  ];

  return (
    <div className="container mx-auto px-4 my-20 py-10">
      <div className="divider mb-10 pb-5"> FAQ section</div>
      <Accordion items={items} />
    </div>
  );
};

export default FAQ;
