import React, { useState } from 'react';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

const FAQ = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index) => {
    setActiveItem((prev) => (prev === index ? null : index));
  };

  console.log(activeItem);

  const accordionItems = [
    {
      title:
        'Lorem ipsum dolor sit amet consectetur. Elit lacus ornare nullam viverra at rhoncus lacus a. Tempor?',
      content:
        'Bulvd offers a wide range of services including buying, selling, and renting residential and commercial properties. We also provide assistance with property management, real estate investments, and relocation services.',
    },
    {
      title:
        'Lorem ipsum dolor sit amet consectetur. Elit lacus ornare nullam viverra at rhoncus lacus a. Tempor?',
      content:
        'Simply enter your desired location, property type, price range, and any other specific criteria you have in mind, and our advanced search engine will provide you with relevant listings.',
    },
    {
      title:
        'Lorem ipsum dolor sit amet consectetur. Elit lacus ornare nullam viverra at rhoncus lacus a. Tempor?',
      content:
        'Yes, we strive to keep our listings as up-to-date as possible. Our team regularly updates the website with new listings and removes any properties that have been sold or rented.',
    },
    {
      title:
        'Lorem ipsum dolor sit amet consectetur. Elit lacus ornare nullam viverra at rhoncus lacus a. Tempor?',
      content: `Absolutely! If you're looking to sell or rent out your property, you can easily list it on our website. Simply navigate to the "List Your Property" section and follow the instructions to create your listing.`,
    },
  ];
  return (
    <section className='tokenemics py-28'>
      <div className='max-w-[80vw] mx-auto flex items-center flex-col justify-center'>
        <div className='w-2/5 mx-auto text-center mb-12'>
          <h3 className='text-white text-[2.125rem] mb-6 not-italic font-bold leading-[normal]'>
            Frequently Asked Questions
          </h3>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur. Sit ac vestibulum feugiat
            nulla placerat risus. Porta quam ridiculus duis ultrices ultrices
            velit in nullam. Eget sed volutpat iaculis
          </p>
        </div>
        {accordionItems.map((item, index) => (
          <div key={index} className='accordion-item'>
            <div
              className={`accordion-title ${
                activeItem === index ? 'active' : ''
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <h4 className=' text-[#3A3A3A] text-2xl'>{item.title}</h4>
              <div className='cursor'>
                {activeItem === index ? (
                  <img src={minus} alt='minus' />
                ) : (
                  <img src={plus} alt='plus' />
                )}
              </div>
            </div>
            {activeItem === index && (
              <div className='accordion-content'>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
