import { type NextPage } from 'next';
import { Layout, Header } from '~/components';
import Image from 'next/image';
import {
  IconSparkles,
  IconArrowRight,
  IconPlayerPlay,
  IconBrandTiktok,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandFacebook,
} from '@tabler/icons-react';

const Home: NextPage = () => {
  return (
    <Layout>
      {/* ===================== Header ===================== */}
      <Header />

      <main className="flex min-h-screen flex-col items-center bg-white">
        {/* ===================== Hero Section ===================== */}
        <section
          id="hero-section"
          className="relative flex h-[calc(100vh-50px)] w-full items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat"
        >
          <div className="container mt-20 flex flex-col items-center justify-center gap-4">
            <h1 className="whitespace-nowrap text-center text-4xl font-semibold tracking-tight transition-all duration-[250ms] ease-linear md:text-6xl lg:text-7xl xl:text-8xl">
              <span>Make short videos from</span>
              <br />
              <span>long ones instantly</span>
            </h1>
            <div className="mb-6 mt-8 text-center">
              <p className="mb-2 text-sm font-medium text-black transition-all duration-[250ms] ease-linear md:text-base">
                Create social ready short clips from your long videos with AI{' '}
              </p>
              <p className=" text-sm font-medium text-black transition-all duration-[250ms] ease-linear md:text-base">
                <span>
                  <IconSparkles size="1rem" className="inline text-rose-400" />
                </span>{' '}
                Save 90% time and effort{' '}
                <span>
                  <IconSparkles size="1rem" className="inline text-rose-400" />
                </span>{' '}
              </p>
            </div>
            <div className="mb-2">
              <button className="mr-3 cursor-pointer rounded-full bg-black px-6 py-3 text-center font-medium text-white transition-all duration-[250ms] ease-in-out hover:bg-zinc-700">
                <span className="mr-2">Start for free</span>
                <IconArrowRight
                  size="20"
                  className="relative -top-[1px] inline"
                />
              </button>
              <button className="rounded-full border-2 border-gray-400 bg-transparent px-6 py-3 font-medium text-black transition-all duration-[250ms] ease-in-out hover:bg-pink-200/50">
                <span className="mr-2">Play demo video</span>
                <IconPlayerPlay
                  size="20"
                  className="relative -top-[1px] inline"
                />
              </button>
            </div>
            <p className="font-medium">
              Get 75 mins of upload for free every month
            </p>
            <div id="hero-footer" className="mt-24 w-full">
              <p className="text-center text-sm font-medium md:text-base">
                Make VIRAL short clips with captions, templates, emojis 🤩 &
                more for
              </p>
              <div id="social-logos" className="mt-4 flex justify-evenly ">
                <IconBrandTiktok
                  size="50"
                  className="text-rose-500 drop-shadow-md"
                />
                <IconBrandInstagram
                  size="50"
                  className="text-rose-500 drop-shadow-md"
                />
                <IconBrandYoutube
                  size="50"
                  className="text-rose-500 drop-shadow-md"
                />
                <IconBrandLinkedin
                  size="50"
                  className="text-rose-500 drop-shadow-md"
                />
                <IconBrandFacebook
                  size="50"
                  className="text-rose-500 drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== How It Works Section ===================== */}
        <section
          id="how-it-works"
          className="w-full bg-gray-100 px-24 py-28 text-center"
        >
          <article>
            <h2 className="mb-8 text-4xl font-medium sm:text-[3.5rem]">
              How it works?
            </h2>
            <p className="mb-16 text-base text-gray-500">
              vidyo.ai automatically selects, edits & captions top moments from
              your videos
            </p>
          </article>
          <div id="cards-section" className="flex justify-between gap-8">
            <div
              id="card"
              className="h-[450px] w-full overflow-hidden rounded-3xl"
            >
              <div className="h-3/5 bg-gradient-to-tr from-[#ffffff] to-[#ffcbf2]"></div>
              <div className="h-full w-full bg-white p-8">
                <h3 className="mb-2 text-xl font-medium">Import your Video</h3>
                <p className="text-gray-500">
                  Upload a video from your computer or use a YouTube link
                </p>
              </div>
            </div>
            <div
              id="card"
              className="h-[450px] w-full overflow-hidden rounded-3xl"
            >
              <div className="h-3/5 bg-gradient-to-tr from-[#ffffff] to-[#ffcbf2]"></div>
              <div className="h-full w-full bg-white p-8">
                <h3 className="mb-2 text-xl font-medium">
                  Set Your Preferences
                </h3>
                <p className="text-gray-500">
                  Tell us your requirements for platforms, formats, & templates
                </p>
              </div>
            </div>
            <div
              id="card"
              className="h-[450px] w-full overflow-hidden rounded-3xl"
            >
              <div className="h-3/5 bg-gradient-to-tr from-[#ffffff] to-[#ffcbf2]"></div>
              <div className="h-full w-full bg-white p-8">
                <h3 className="mb-2 text-xl font-medium">
                  Get Your Videos In Minutes
                </h3>
                <p className="text-gray-500">
                  Customize short videos with our AI - change colors, fonts,
                  subtitles, and more
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== Content Creation Section ===================== */}
        <section id="content-creation" className="w-full px-24 py-28 ">
          <div className="mb-20 flex">
            <article className="grow">
              <h1 className="mb-8 text-4xl font-medium leading-tight sm:text-[3rem]">
                Create amazing content with AI technology
              </h1>
              <p>
                AI opens up various opportunities to improve video quality to
                make it more interesting, information and memorable.
              </p>
              <div>
                <button className="mr-3 h-12 rounded-3xl bg-black px-6 py-[6px] font-medium text-white">
                  Start for free ➡️
                </button>
                <button className="h-12 rounded-3xl border border-gray-400 bg-transparent px-4 py-[6px] font-medium">
                  Learn More
                </button>
              </div>
            </article>
            <div className="grow">
              <Image
                src="/images/content-placeholder.jpg"
                alt="placeholder"
                width="450"
                height="400"
              />
            </div>
          </div>
          <div>
            <article className="text-center">
              <h1 className="mb-8 text-4xl font-medium leading-tight sm:text-[3rem]">
                Amazing features that you can use now
              </h1>
              <p>
                Don't miss the chance to try out this amazing, easy-to-use
                feature! You can use it directly and easily, without having
                special technical skills.
              </p>
            </article>
            <div id="feature-cards" className="flex">
              <div id="feature-card">
                <Image
                  className="rounded-3xl"
                  src="/logo.png"
                  alt="company logo"
                  width="30"
                  height="30"
                />
                <h2>Video Resizing</h2>
                <p>Get platform native sizes for videos</p>
              </div>
              <div id="feature-card">
                <Image
                  className="rounded-3xl"
                  src="/logo.png"
                  alt="company logo"
                  width="30"
                  height="30"
                />
                <h2>Video Clipping</h2>
                <p>Get most interesting parts of videos magically</p>
              </div>
              <div id="feature-card">
                <Image
                  className="rounded-3xl"
                  src="/logo.png"
                  alt="company logo"
                  width="30"
                  height="30"
                />
                <h2>Auto-video Chapters</h2>
                <p>Get chapter timestamps for better descriptions</p>
              </div>
              <div id="feature-card">
                <Image
                  className="rounded-3xl"
                  src="/logo.png"
                  alt="company logo"
                  width="30"
                  height="30"
                />
                <h2>Social Media Templates</h2>
                <p>
                  High performing & visually appealing looks for your videos
                </p>
              </div>
              <div id="feature-card">
                <Image
                  className="rounded-3xl"
                  src="/logo.png"
                  alt="company logo"
                  width="30"
                  height="30"
                />
                <h2>1080p Downloads</h2>
                <p>Better quality for your video content</p>
              </div>
              <div id="feature-card">
                <Image
                  className="rounded-3xl"
                  src="/logo.png"
                  alt="company logo"
                  width="30"
                  height="30"
                />
                <h2>Auto-video Captioning</h2>
                <p>Captions improve video performance by 40%</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== Who Can Use Section ===================== */}
        <section></section>

        {/* ===================== Social Media Growth Section ===================== */}
        <section></section>

        {/* ===================== Testimonial Section ===================== */}
        <section></section>

        {/* ===================== FAQ Section ===================== */}
        <section></section>

        {/* ===================== Community Section ===================== */}
        <section></section>

        {/* ===================== Footer ===================== */}
        <footer></footer>
      </main>
    </Layout>
  );
};

export default Home;
