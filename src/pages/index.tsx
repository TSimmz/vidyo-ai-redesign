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
  IconUsersGroup,
  IconUser,
  IconStarFilled,
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
              <p className="mt-8 text-base transition-all duration-[250ms] ease-linear lg:text-lg">
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
                <h1 className="whitespace-nowrap  text-4xl font-medium tracking-tight transition-all duration-[250ms] ease-linear md:text-5xl xl:mb-8 xl:text-6xl">
                  <span className="lg-max:mb-4 lg-max:block">
                    Amazing features that
                  </span>{' '}
                  <span>you can use now</span>
                </h1>
                <p className="mx-auto mt-8 w-[80%] text-zinc-700 lg:w-2/3 xl:text-lg">
                  Don't miss the chance to try out this amazing, easy-to-use
                  feature! You can use it directly and easily, without having
                  special technical skills.
                </p>
              </article>
              <div
                id="feature-cards"
                className="mx-8 my-16 grid grid-cols-1 gap-8 sm:mx-2 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 xl:mx-20 lg-max:mt-12 md-lg:mx-12"
              >
                {/* TODO - animate idea: randomly 'hover' each card or cycle through them since data is static */}
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
                      <IconVideo size="36" className="text-white" />
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
        <section className="relative w-full bg-use-pattern bg-cover bg-center bg-no-repeat p-8 text-white lg:p-16">
          <div className="mx-auto mt-8 max-w-screen-xl lg:mt-20">
            <article className="text-center">
              <h2 className="text-4xl font-medium tracking-tight transition-all duration-[250ms] ease-linear md:text-6xl lg:text-7xl ">
                Who can use vidyo.ai?
              </h2>
              <p className="mt-8 text-base transition-all duration-[250ms] ease-linear lg:text-lg">
                Content repurposing can grow your online presence significantly
              </p>
            </article>
            <div
              id="who-can-use-cards"
              className="mx-8 my-20 grid grid-cols-1 gap-8 sm:mx-2 md:grid-cols-2 xl:mx-24 lg-max:mt-12 sm-lg:mx-12"
            >
              <div className="flex flex-col rounded-2xl border border-white/50 bg-gradient-to-br from-white/5 to-white/20 px-6 py-8 backdrop-blur-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white bg-gradient-to-br from-white/5 to-white/50 drop-shadow-lg">
                  <IconBrandYoutube size="36" className="text-white" />
                </div>
                <h3 className="mt-8 text-3xl">Video podcasters & creators</h3>
                <p className="mt-4 text-lg text-zinc-300">
                  Grow faster on social media by sharing more content from your
                  main videos with the power of content repurposing
                </p>
                <button className="mr-auto mt-auto cursor-pointer rounded-full bg-white py-3 pl-5 pr-4 text-center font-medium text-black transition-all duration-[250ms] ease-in-out hover:bg-rose-100 md-max:mt-16">
                  <span className="mr-2">Learn more</span>
                  <IconArrowRight
                    size="20"
                    className="relative -top-[1px] inline"
                  />
                </button>
              </div>
              <div className="flex flex-col rounded-2xl border border-white/50 bg-gradient-to-br from-white/5 to-white/20 px-6 py-8 backdrop-blur-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white bg-gradient-to-br from-white/5 to-white/50 drop-shadow-lg">
                  <IconUsersGroup size="36" className="text-white" />
                </div>
                <h3 className="mt-8 text-3xl">For Content Teams</h3>
                <p className="mt-4 text-lg text-zinc-300">
                  Your content marketing efforts can yield up to 4x results with
                  the right kind of content repurposing for webinars, workshop,
                  and more
                </p>
                <button className="mr-auto mt-16 cursor-pointer rounded-full bg-white py-3 pl-5 pr-4 text-center font-medium text-black transition-all duration-[250ms] ease-in-out hover:bg-rose-100">
                  <span className="mr-2">Learn more</span>
                  <IconArrowRight
                    size="20"
                    className="relative -top-[1px] inline"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== Social Media Growth Section ===================== */}
        <section className="relative w-full p-8 lg:p-16 sm-max:p-3">
          <div className="mx-auto mt-8 max-w-screen-xl lg:mt-20">
            <article className="text-center">
              <h2 className="text-4xl font-medium tracking-tight transition-all duration-[250ms] ease-linear md:text-6xl lg:text-7xl ">
                Grow on social media fast
              </h2>
              <p className="mt-8 text-base transition-all duration-[250ms] ease-linear lg:text-lg">
                Don't dismiss the opportunity to use it easily and immediately,
                even without required special technical expertise
              </p>
            </article>
            {/* TODO - animate idea: randomly 'hover' each card or cycle through them since data is static */}
            <div className="mx-8 my-20 flex flex-wrap gap-8 xl:mx-20 sm-max:mx-2 lg-max:mt-12 sm-lg:mx-12">
              <div className="flex min-w-[350px] flex-1 flex-col rounded-2xl bg-gradient-to-tr from-white to-pink-200 px-4 pb-2 pt-1">
                <div id="three-dots" className="flex gap-2 p-2">
                  <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                </div>
                <div className="relative min-h-[500px] md-max:min-h-[400px] lg-max:min-h-[450px]">
                  <Image
                    src="/images/cut-magic.png"
                    alt="content graphic"
                    fill
                    className="object-contain"
                  />
                </div>
                <div id="three-dots" className="mt-auto flex gap-2 p-2">
                  <div className="h-[10px] flex-1 rounded-full bg-black"></div>
                  <div className="h-[10px] flex-1 rounded-full bg-black"></div>
                  <div className="h-[10px] flex-1 rounded-full bg-black"></div>
                </div>
              </div>
              <div className="flex min-w-[350px] flex-1 flex-col gap-4 rounded-2xl">
                <div className="rounded-2xl bg-gradient-to-b from-fuchsia-500 to-indigo-500">
                  <div className="h-full w-full rounded-xl bg-gradient-to-r from-white via-white/70 to-white/10 p-1">
                    <div id="three-dots" className="flex gap-2 p-2">
                      <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                      <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                      <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                    </div>
                    <div className=" rounded-2xl border border-white/50 bg-gradient-to-r from-transparent to-white/40 p-6">
                      <h3 className="text-2xl font-semibold">
                        Get short videos from long ones
                      </h3>
                      <p className="mt-3 text-zinc-600">
                        Optimize your time and effort in producing videos from
                        long to short using only AI technology
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-b from-fuchsia-500 to-indigo-500">
                  <div className="h-full w-full rounded-xl bg-gradient-to-r from-white via-white/70 to-white/10 p-1">
                    <div id="three-dots" className="flex gap-2 p-2">
                      <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                      <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                      <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                    </div>
                    <div className=" rounded-2xl border border-white/50 bg-gradient-to-r from-transparent to-white/40 p-6">
                      <h3 className="text-2xl font-semibold">
                        Get 100+ templates for videos
                      </h3>
                      <p className="mt-3 text-zinc-600">
                        By adopting the aritificial intelligence (AI) technology
                        that we provide, you can get more than 100 ready-to-use
                        video templates
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-b from-fuchsia-500 to-indigo-500">
                  <div className="h-full w-full rounded-xl bg-gradient-to-r from-white via-white/70 to-white/10 p-1">
                    <div id="three-dots" className="flex gap-2 p-2">
                      <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                      <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                      <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                    </div>
                    <div className=" rounded-2xl border border-white/50 bg-gradient-to-r from-transparent to-white/40 p-6">
                      <h3 className="text-2xl font-semibold">
                        Goodbye to agencies & freelancers
                      </h3>
                      <p className="mt-3 text-zinc-600">
                        You can produce high-quality independently, easily and
                        effectively using AI technology, without the need for
                        freelancers or agency assitance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== Testimonial Section ===================== */}
        <section className="relative w-full p-8 lg:p-16">
          <div className="mx-auto mt-8 max-w-screen-xl lg:mt-20">
            <h2 className="mb-20 text-center text-4xl font-medium tracking-tight transition-all duration-[250ms] ease-linear md:text-6xl lg:text-7xl ">
              Loved by 30K+ podcasters & creators
            </h2>
            <div id="testimonial-cards" className="flex flex-wrap gap-4">
              <div
                id="testimonial-card"
                className="shrink grow basis-80 rounded-2xl bg-white px-4 py-2 drop-shadow-lg"
              >
                <div className="mb-2 flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-600 drop-shadow-lg">
                    <IconUser size="16" className="text-white" />
                  </div>
                  <h3 className="mr-1 font-medium text-black">Nuseir Yassin</h3>
                  <h4>- aka NAS Daily</h4>
                </div>
                <p className="mb-2">
                  I was surprised by the ease and speed of the video editing
                  service based on the AI technology from this site. The results
                  are amazing and very satisfying.
                </p>
                <div className="flex items-center gap-1">
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-zinc-300" />
                </div>
              </div>
              <div
                id="testimonial-card"
                className="shrink grow basis-80 rounded-2xl bg-white px-4 py-2 drop-shadow-lg"
              >
                <div className="mb-2 flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-600 drop-shadow-lg">
                    <IconUser size="16" className="text-white" />
                  </div>
                  <h3 className="mr-1 font-medium text-black">Nuseir Yassin</h3>
                  <h4>- aka NAS Daily</h4>
                </div>
                <p className="mb-2">
                  I was surprised by the ease and speed of the video editing
                  service based on the AI technology from this site. The results
                  are amazing and very satisfying.
                </p>
                <div className="flex items-center gap-1">
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-zinc-300" />
                </div>
              </div>
              <div
                id="testimonial-card"
                className="shrink grow basis-80 rounded-2xl bg-white px-4 py-2 drop-shadow-lg"
              >
                <div className="mb-2 flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-600 drop-shadow-lg">
                    <IconUser size="16" className="text-white" />
                  </div>
                  <h3 className="mr-1 font-medium text-black">Nuseir Yassin</h3>
                  <h4>- aka NAS Daily</h4>
                </div>
                <p className="mb-2">
                  I was surprised by the ease and speed of the video editing
                  service based on the AI technology from this site. The results
                  are amazing and very satisfying.
                </p>
                <div className="flex items-center gap-1">
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-zinc-300" />
                </div>
              </div>
              <div
                id="testimonial-card"
                className="shrink grow basis-80 rounded-2xl bg-white px-4 py-2 drop-shadow-lg"
              >
                <div className="mb-2 flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-600 drop-shadow-lg">
                    <IconUser size="16" className="text-white" />
                  </div>
                  <h3 className="mr-1 font-medium text-black">Nuseir Yassin</h3>
                  <h4>- aka NAS Daily</h4>
                </div>
                <p className="mb-2">
                  I was surprised by the ease and speed of the video editing
                  service based on the AI technology from this site. The results
                  are amazing and very satisfying.
                </p>
                <div className="flex items-center gap-1">
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-zinc-300" />
                </div>
              </div>
              <div
                id="testimonial-card"
                className="shrink grow basis-80 rounded-2xl bg-white px-4 py-2 drop-shadow-lg"
              >
                <div className="mb-2 flex items-center">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-600 drop-shadow-lg">
                    <IconUser size="16" className="text-white" />
                  </div>
                  <h3 className="mr-1 font-medium text-black">Nuseir Yassin</h3>
                  <h4>- aka NAS Daily</h4>
                </div>
                <p className="mb-2">
                  I was surprised by the ease and speed of the video editing
                  service based on the AI technology from this site. The results
                  are amazing and very satisfying.
                </p>
                <div className="flex items-center gap-1">
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-yellow-500" />
                  <IconStarFilled size="20" className="text-zinc-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FAQ Section ===================== */}
        <section className="relative w-full bg-gradient-to-b from-zinc-50/10 to-rose-50 p-8 lg:p-16">
          <div className="mx-auto mt-8 max-w-screen-xl lg:mt-20">
            <article className="text-center">
              <h2 className="text-4xl font-medium tracking-tight transition-all duration-[250ms] ease-linear md:text-6xl lg:text-7xl ">
                Frequently Asked Questions
              </h2>
              <p className="mt-8 text-base transition-all duration-[250ms] ease-linear lg:text-lg">
                Here we have compiled a list of common questions and their
                answers to help you better understand our product and services
              </p>
            </article>
            <div id="faq-list"></div>
          </div>
        </section>

        {/* ===================== Community Section ===================== */}
        <section className="relative w-full bg-hero-pattern bg-cover bg-center bg-no-repeat p-8 lg:p-16">
          <div className="mx-auto mt-8 max-w-screen-xl lg:mt-20">
            <article className="flex flex-col items-center">
              <h2 className="text-center text-4xl font-medium tracking-tight transition-all duration-[250ms] ease-linear md:text-6xl lg:text-7xl ">
                Join our community for a better understanding of our product and
                best practices
              </h2>
              <button className="mb-24 mt-12 cursor-pointer rounded-full bg-black py-3 pl-5 pr-4 text-center font-medium text-white transition-all duration-[250ms] ease-in-out hover:bg-zinc-700">
                <span className="mr-2">Join Discord Server</span>
                <IconArrowRight
                  size="20"
                  className="relative -top-[1px] inline"
                />
              </button>
            </article>
          </div>
        </section>

        {/* ===================== Footer ===================== */}
        <footer></footer>
      </main>
    </Layout>
  );
};

export default Home;
