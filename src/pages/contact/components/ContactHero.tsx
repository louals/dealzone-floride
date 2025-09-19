import heroBg from "/contact.jpg"; 

export function ContactHero() {
  return (
    <section
      className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] min-h-[500px] w-full overflow-hidden mt-22
                 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >

    </section>
  );
}
