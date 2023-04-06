import { type NextPage } from 'next';
import { Layout, Header, FeatureCard } from '~/components';
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
  IconTextCaption,
  IconVideo,
  IconScissors,
  IconTimelineEventExclamation,
  IconTemplate,
  IconCloudDownload,
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
              <p className="mb-2 text-sm font-medium text-zinc-700 transition-all duration-[250ms] ease-linear md:text-base ">
                Create social ready short clips from your long videos with AI{' '}
              </p>
              <p className=" text-sm font-medium text-zinc-700 transition-all duration-[250ms] ease-linear md:text-base">
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
              <button className="mr-3 cursor-pointer rounded-full bg-black py-3 pl-5 pr-4 text-center font-medium text-white transition-all duration-[250ms] ease-in-out hover:bg-zinc-700">
                <span className="mr-2">Start for free</span>
                <IconArrowRight
                  size="20"
                  className="relative -top-[1px] inline"
                />
              </button>
              <button className="rounded-full border-2 border-gray-400 bg-transparent py-3 pl-5 pr-4 font-medium text-black transition-all duration-[250ms] ease-in-out hover:bg-rose-200/40">
                <span className="mr-2">Play demo video</span>
                <IconPlayerPlay
                  size="20"
                  className="relative -top-[1px] inline"
                />
              </button>
            </div>
            <p className="font-medium text-zinc-700">
              Get 75 mins of upload for free every month
            </p>
            <div id="hero-footer" className="mt-24 w-full">
              <p className="text-center text-sm font-medium text-zinc-700 md:text-base">
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
          className="relative w-full bg-gradient-to-b from-zinc-50/10 to-rose-50 p-8 lg:p-16"
        >
          <div className="mx-auto mt-8 max-w-screen-xl text-center lg:mt-20">
            <article>
              <h2 className="text-4xl font-medium tracking-tight transition-all duration-[250ms] ease-linear md:text-6xl lg:text-7xl ">
                How it works?
              </h2>
              <p className="mt-4 text-base transition-all duration-[250ms] ease-linear lg:text-lg">
                vidyo.ai automatically selects, edits & captions top moments
                from your videos
              </p>
            </article>
            <div
              id="cards-section"
              className="mt-8 flex flex-col justify-between gap-8 px-4 md:px-20 lg:mt-20 lg:flex-row lg:px-0"
            >
              <div
                id="card"
                className="w-full min-w-[60%] overflow-hidden rounded-3xl md:min-w-[20%]"
              >
                <div className="h-80 bg-gradient-to-tr from-[#ffffff] to-[#ffcbf2]"></div>
                <div className="h-full w-full bg-white p-8">
                  <h3 className="mb-2 text-xl font-medium">
                    Import your Video
                  </h3>
                  <p className="text-zinc-700">
                    Upload a video from your computer or use a YouTube link
                  </p>
                </div>
              </div>
              <div
                id="card"
                className="w-full min-w-[80%] overflow-hidden rounded-3xl md:min-w-[20%]"
              >
                <div className="h-80 bg-gradient-to-tr from-[#ffffff] to-[#ffcbf2]"></div>
                <div className="h-full w-full bg-white p-8">
                  <h3 className="mb-2 text-xl font-medium">
                    Set Your Preferences
                  </h3>
                  <p className="text-zinc-700">
                    Tell us your requirements for platforms, formats, &
                    templates
                  </p>
                </div>
              </div>
              <div
                id="card"
                className="w-full min-w-[80%] overflow-hidden rounded-3xl md:min-w-[20%]"
              >
                <div className="h-80 bg-gradient-to-tr from-[#ffffff] to-[#ffcbf2]"></div>
                <div className="h-full w-full bg-white p-8">
                  <h3 className="mb-2 text-xl font-medium">
                    Get Your Videos In Minutes
                  </h3>
                  <p className="text-zinc-700">
                    Customize short videos with our AI - change colors, fonts,
                    subtitles, and more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== Content Creation Section ===================== */}
        <section
          id="content-creation"
          className="relative w-full bg-gradient-to-b from-rose-50 to-zinc-50/10 p-8 lg:p-16"
        >
          <div className="mx-auto mt-4 max-w-screen-xl text-center">
            <div className="flex xl:gap-8 lg-max:flex-col">
              <article className="flex-1 text-left lg:py-16 lg-max:pt-16 lg-max:text-center">
                <h1 className="mb-4 whitespace-nowrap  text-4xl font-medium tracking-tight transition-all duration-[250ms] ease-linear md:text-5xl xl:mb-8 xl:text-6xl">
                  <span className="mb-4 block">Create amazing content</span>
                  <span> with AI technology</span>
                </h1>
                <p className=" text-zinc-700 xl:text-lg">
                  AI opens up various opportunities to improve video quality to
                  make it more interesting, information and memorable.
                </p>
                <div className="mt-12 flex items-center lg-max:justify-center">
                  <button className="mr-3 cursor-pointer rounded-full bg-black py-3 pl-5 pr-4 text-center font-medium text-white transition-all duration-[250ms] ease-in-out hover:bg-zinc-700">
                    <span className="mr-2">Start for free</span>
                    <IconArrowRight
                      size="20"
                      className="relative -top-[1px] inline"
                    />
                  </button>
                  <button className="rounded-full border border-gray-400 bg-transparent px-8 py-3 text-center font-medium transition-all duration-[250ms] ease-in-out hover:bg-rose-200/40">
                    Learn More
                  </button>
                </div>
              </article>
              <div className="relative flex-grow md-max:min-h-[400px] lg-max:min-h-[450px] md-lg:mt-8">
                <Image
                  src="/images/content-graphic.png"
                  alt="content graphic"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/*  */}
            <div className="mx-auto mt-24 max-w-screen-xl text-center">
              <article className="text-center">
                <h1 className="mb-4 whitespace-nowrap  text-4xl font-medium tracking-tight transition-all duration-[250ms] ease-linear md:text-5xl xl:mb-8 xl:text-6xl">
                  <span className="lg-max:mb-4 lg-max:block">
                    Amazing features that you
                  </span>{' '}
                  <span>can use now</span>
                </h1>
                <p className="mx-auto w-[80%] text-zinc-700 lg:w-2/3 xl:text-lg">
                  Don't miss the chance to try out this amazing, easy-to-use
                  feature! You can use it directly and easily, without having
                  special technical skills.
                </p>
              </article>
              <div
                id="feature-cards"
                className="mx-20 my-16 grid grid-cols-1 gap-8 sm:mx-2 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 xl:mx-20 lg-max:mt-8 md-lg:mx-12"
              >
                {/* grid-cols-3 grid-rows-2 gap-8 md:grid-cols-1 md:grid-rows-6 xl:mx-20 lg-max:grid-cols-2 lg-max:grid-rows-3 md-lg:mx-12 */}
                <FeatureCard
                  icon={
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-rose-100 to-rose-500 drop-shadow-lg">
                      <IconTextCaption size="36" className="text-white" />
                    </div>
                  }
                  heading="Auto-video Captioning"
                  caption="Captions improve video performance by 40%"
                />
                <FeatureCard
                  icon={
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-blue-100 to-blue-500 drop-shadow-lg">
                      <IconTextCaption size="36" className="text-white" />
                    </div>
                  }
                  bgIcon="blue"
                  heading="Video Resizing"
                  caption="Get platform native sizes for videos"
                />
                <FeatureCard
                  icon={
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-pink-100 to-pink-500 drop-shadow-lg">
                      <IconScissors size="36" className="text-white" />
                    </div>
                  }
                  heading="Video Clipping"
                  caption="Get most interesting parts of videos magically"
                />
                <FeatureCard
                  icon={
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-orange-100 to-orange-500 drop-shadow-lg">
                      <IconTimelineEventExclamation
                        size="36"
                        className="text-white"
                      />
                    </div>
                  }
                  heading="Auto-video Chapters"
                  caption="Get chapter timestamps for better descriptions"
                />
                <FeatureCard
                  icon={
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-amber-100 to-amber-500 drop-shadow-lg">
                      <IconTemplate size="36" className="text-white" />
                    </div>
                  }
                  heading="Social Media Templates"
                  caption="High performing & visually appealing looks for your videos"
                />
                <FeatureCard
                  icon={
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-purple-100 to-purple-500 drop-shadow-lg">
                      <IconCloudDownload size="36" className="text-white" />
                    </div>
                  }
                  heading="1080p Downloads"
                  caption="Better quality for your video content"
                />
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
