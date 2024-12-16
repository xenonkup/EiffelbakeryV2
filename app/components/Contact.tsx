const ContactSection = () => {
  return (
  <section id="Contact">
  {/* (Google Map) */}
  <div className="relative flex flex-col justify-center w-full h-[300px] sm:h-[400px] lg:h-[500px] p-0 m-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7102272392267!2d100.54268237689438!3d13.735985586654301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed8c5fd0c4b%3A0xe6d2dfc879b0851!2sEiffel%20Cafe%20(Sindhorn%20Building%20Branch)!5e0!3m2!1sth!2sth!4v1732185229312!5m2!1sth!2sth"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full "
    ></iframe>
  </div>
</section>

  );
};
export default ContactSection;
