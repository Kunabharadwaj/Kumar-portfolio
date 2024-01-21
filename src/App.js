import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";


function App() {
  return (
    <>
      <header>
        <title>Kumar Portofolio</title>
        <meta
          name="description"
          content="Kumar web design and developer portofolio"
        />
      </header>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="flex justify-between w-full py-10 mb-10">
            <h1>Kumar Kanchari</h1>
            <ul className="flex gap-3">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/about"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Kumar Kanchari
            </h2>

            <h3 className="text-2xl py-2 md:text-3xl">
              Backend developer experienced in Java-Spring boot framework
            </h3>

            <p className="text-2xl py-2 md:text-3xl">
              Apsiring developer looking to become a full stack developer
            </p>
          </div>

          <div className="flex text-5xl mt-10 justify-center gap-8 text-teal-600">
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>

          <div className="flex mx-auto relative bg-gradiant-to-b from text-teal-500 mt-20 justify-center w-full">
            <img
              class="object-fit"
              src="https://media.istockphoto.com/id/1262199842/photo/profile-picture-of-millennial-asian-girl-posing.jpg?s=1024x1024&w=is&k=20&c=WnGuSja-IoH1Uyzfaf1DgwI0Kp2yBlFbtPx2i6CxfPQ="
              alt="profile picture"
            ></img>
          </div>
        </section>

        <section className="mt-20">
          <div class="">
            <h3 class="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p class="text-lg py-2 leading-8 text-gray-800 dark:text-neutral-300">
              Since the beginning of my journey as a freelancer designer and
              developer, I've done remote work for
              <span class="text-teal-500"> agencies </span>consulted for{" "}
              <span class="text-teal-500">starups </span>and collaborated with
              talented people to create digital products for both business and
              consumer use.
            </p>
            <p class="text-lg py-2 leading-8 text-gray-800 dark:text-neutral-300">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>
        </section>

        <section className="grid mt-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="container mx-auto bg-white rounded-3xl shadow-lg p-8">
            <div className="text-center">
              <h4 className="mb-2">
                Beautiful Designs
              </h4>
              <p className="mb-3">
              Creating elegant designs suited for your needs following core design theory.
              </p>
              <p className="text-teal-600 mb-2">
              Design tools I use
              </p>

              <p>Photoshop</p>
              <p>Illustrator</p>
              <p>Figma</p>
            </div>
          </div>

          <div className="container mx-auto bg-white rounded-3xl shadow-lg p-8">
            <div className="text-center">
              <h4 className="mb-2">
                Beautiful Designs
              </h4>
              <p className="mb-3">
              Creating elegant designs suited for your needs following core design theory.
              </p>
              <p className="text-teal-600 mb-2">
              Design tools I use
              </p>

              <p>Photoshop</p>
              <p>Illustrator</p>
              <p>Figma</p>
            </div>
          </div>

          <div className="container mx-auto bg-white rounded-3xl shadow-lg p-8">
            <div className="text-center">
              <h4 className="mb-2">
                Beautiful Designs
              </h4>
              <p className="mb-3">
              Creating elegant designs suited for your needs following core design theory.
              </p>
              <p className="text-teal-600 mb-2">
              Design tools I use
              </p>

              <p>Photoshop</p>
              <p>Illustrator</p>
              <p>Figma</p>
            </div>
          </div>
        
        </section>
      </main>
    </>
  );
}

export default App;
