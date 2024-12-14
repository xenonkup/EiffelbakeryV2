
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className='text-center text-2xl md:text-4xl uppercase mb-6'>
        <p className="inline-block border-b-2 border-white pb-1">Contact</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl">
        {/* Left Column: Text and Image */}
        <div>
          <h2 className="text-lg md:text-xl uppercase mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at mollitia autem, corrupti quo incidunt.</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias libero inventore corrupti excepturi ea, quaerat vero quidem odio alias iusto!
          </p>
          <div>
            <Image
              src="/assets/test01/01.png"
              alt="Bread Basket"
              width={500}
              height={300}
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <form className="p-6">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-700 text-white font-bold uppercase rounded-lg hover:bg-gray-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
