import { type NextPage } from 'next';
import { Layout, Header } from '~/components';

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
            <p className="mb-6 mt-4 text-lg text-gray-500">
              Create social ready short clips from your long videos with AI 🌟
              Save 90% time and effort
            </p>
            <div>
              <button className="mr-3 h-12 rounded-3xl bg-black px-6 py-[6px] text-white">
                Start for free ➡️
              </button>
              <button className="h-12 rounded-3xl border border-gray-400 bg-transparent px-6 py-[6px]">
                Play demo video ▶️
              </button>
            </div>
            <p className="text-gray-500">
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
        {/* <section id="how-it-works">
          <h2>How it works?</h2>
          <p>
            vidyo.ai automatically selects, edits & captions top moments from
            your videos
          </p>
        </section> */}
      </main>
    </Layout>
  );
};

export default Home;
