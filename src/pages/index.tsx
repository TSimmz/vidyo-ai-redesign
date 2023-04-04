import { type NextPage } from 'next';
import { Layout, Header } from '~/components';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <main className="flex min-h-screen flex-col items-center bg-white">
        <section
          id="hero-section"
          className="relative h-screen w-full bg-hero-pattern bg-cover bg-center bg-no-repeat"
        >
          <div className="container mx-auto mt-20 flex flex-col items-center justify-center gap-4 py-20">
            <h1 className="w-8/12 text-center text-4xl font-semibold leading-tight tracking-tight sm:text-[5rem]">
              Make short videos from long ones instantly
            </h1>
            <p className="mb-6 mt-4 text-base font-medium text-gray-400">
              Create social ready short clips from your long videos with AI 🌟
              Save 90% time and effort
            </p>
            <div>
              <button className="mr-3 h-12 rounded-3xl bg-black px-6 py-[6px] font-medium text-white">
                Start for free ➡️
              </button>
              <button className="h-12 rounded-3xl border border-gray-400 bg-transparent px-4 py-[6px] font-medium">
                Play demo video ▶️
              </button>
            </div>
            <p className="text-[1rem] font-medium text-gray-500">
              Get 75 mins of upload for free every month
            </p>
            <div id="hero-footer" className="mt-24 w-full">
              <p className="text-center text-gray-600">
                Make VIRAL short clips with captions, templates, emojis 🤩 &
                more for
              </p>
              <div id="social-logos" className="mt-12 flex justify-evenly">
                <p>TikTok</p>
                <p>Instagram</p>
                <p>YouTube</p>
                <p>LinkedIn</p>
                <p>FaceBook</p>
              </div>
            </div>
          </div>
        </section>
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
      </main>
    </Layout>
  );
};

export default Home;
