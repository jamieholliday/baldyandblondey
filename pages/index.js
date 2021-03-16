import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baldy and Blondey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-center bg-gray-600 p-4">
        <img
          className="logo"
          height="60"
          width="100"
          src="/baldyblondey.png"
          alt="logo"
        />
      </header>

      <main>
        <div className="bg-gray-600">
          <section className="container mx-auto py-12 pt-4 pb-8 px-6 lg:flex">
            <div className="lg:w-3/6">
              <p className="text-white font-bold">
                10 YEAR WEDDING ANNIVERSARY
              </p>
              <h1 className="text-6xl font-bold mb-8 text-blue-400">
                We're going back to Cyprus!
              </h1>
              <p className="mb-2 text-white">
                Back in May 2012, we got married on a yacht in Pahos, Cyprus.
              </p>
              <p className="mb-2 text-white">
                We had such a ball celebrating with everyone both on the yacht
                and throughout the holiday, that we promised to do it again ten
                years later...
              </p>
              <p className="mb-2 text-white">
                Nine years on, we're still married and even more unbelievably,
                our ten year anniversary is next year!
              </p>
              <p className="text-white">
                So, we'd love to invite you to join us to celebrate, back on the
                yacht in May 2022.
              </p>
            </div>
            <div className="lg:w-3/6 lg:pl-6 pt-8">
              <img src="/main.jpg" alt="People on a boat" />
            </div>
          </section>
        </div>
        <div className="container mx-auto py-8 px-6">
          <section className="mb-16">
            <h2 className="text-4xl mb-4 text-gray-600 font-bold">
              The Details
            </h2>
            <p>
              <strong className="text-gray-600 font-bold">When: </strong>Evening
              of Friday 13th May 2022
            </p>
            <p>
              <strong className="text-gray-600 font-bold">Where: </strong>A Big
              Boat, Paphos Harbour, Cyprus
            </p>
          </section>
          <section className="mb-4 lg:flex">
            <div className="lg:w-3/6 mb-12">
              <h2 className="text-4xl mb-4 text-gray-600 font-bold">
                Travel &amp; Accommodation
              </h2>
              <p className="mb-2">
                We will be staying at the Annabelle Hotel for 5 nights, booked
                via Jet2.
              </p>
              <p className="mb-2">
                We will be flying out from Stansted to Paphos on Weds 11th May
                2022 (9:15) and returning on Mon 16th May 2022 (17:00).
              </p>
              <p className="mb-2">
                If you'd like to join us at the{' '}
                <a
                  target="_blank"
                  href="https://www.jet2holidays.com/cyprus/paphos-area/paphos-resort/annabelle"
                >
                  Annabelle
                </a>
                , fantastic.
                <br /> Jet2 also offer 3 night stays if 5 nights doesn't suit
                you. The Annabelle can also be booked via other holiday
                providers.
              </p>
              <p className="mb-2">
                However, there are lots of other great hotels nearby, plus
                self-catering villas on{' '}
                <a
                  target="_blank"
                  href="https://www.airbnb.co.uk/s/Paphos--Cyprus/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=march&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Paphos%2C%20Cyprus&place_id=ChIJyeIt9GMG5xQR57X0UP_9BWw&checkin=2022-05-11&checkout=2022-05-16&source=structured_search_input_header&search_type=autocomplete_click"
                >
                  Airbnb.
                </a>
              </p>
              <p className="mb-2">
                <a href="https://www.ryanair.com/gb/en">Ryanair</a> also offer
                regular flights to Paphos.
              </p>
              <p>
                How / when you travel and where you stay is entirely up to you,
                we'll just be excited to have you on the yacht on Friday 13th
                May 2022!
              </p>
            </div>
            <div className="lg:w-3/6 lg:pl-20 h-96 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.0111606044916!2d32.41525785050112!3d34.75531168032441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e706c40e4f8e45%3A0xef6b99eeeb6302dc!2sAnnabelle!5e0!3m2!1sen!2suk!4v1615730511868!5m2!1sen!2suk"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-4xl mb-4 text-gray-600 font-bold">RSVP</h2>
            <p className="mb-2 ">
              We kindly ask you to let us know if you will be joining us on the
              yacht. Please click the button to send us an email. <br />
              We hope you can make it!
            </p>
            <p className="font-bold">Jo &amp; Jamie</p>
            <div className="md:flex mt-4">
              <a
                class="md:w-auto p-2 flex items-center justify-center rounded-md bg-green-600 text-white my-2 md:mr-1 no-underline cursor-pointer"
                href="mailto:jo_holliday85@hotmail.co.uk?subject=I am coming"
              >
                I'll be there
              </a>
              <a
                class="md:w-auto p-2 flex items-center justify-center rounded-md bg-red-400 text-white my-2 md:ml-1 no-underline cursor-pointer"
                href="mailto:jo_holliday85@hotmail.co.uk?subject=I can't make it"
              >
                Nope, can't make it
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t text-gray-300">
        &copy; 2021 Baldy &amp; Blondey Inc
      </footer>
    </div>
  );
}
