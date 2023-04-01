import Head from 'next/head';

interface ILayout extends React.PropsWithChildren<any> {}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <title>AI Based Content Repurposing - vidyo.ai</title>
        <meta
          name="twitter:title"
          content="AI Based Content Repurposing - vidyo.ai"
        />
        <meta
          name="description"
          content="Our AI platform helps you convert long form podcasts and videos automatically into shorter shareable clips for TikTok, Reels and Shorts. No CC Required."
        />
        <meta
          name="twitter:description"
          content="Our AI platform helps you convert long form podcasts and videos automatically into shorter shareable clips for TikTok, Reels and Shorts. No CC Required."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="https://vidyo.ai/lib_YnhXziEzftuAcKQm/27pmczp647i2i59m.png?w=1200&amp;h=630&amp;fit=crop"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:image"
          content="https://vidyo.ai/lib_YnhXziEzftuAcKQm/27pmczp647i2i59m.png?w=1200&amp;h=630&amp;fit=crop"
        />
        <link
          rel="icon"
          href="https://vidyo.ai/lib_YnhXziEzftuAcKQm/c43yw9u5hvwk5v4f.png?w=64&amp;h=64"
        />
        <link rel="canonical" href="https://vidyo.ai" />
      </Head>

      {children}
    </>
  );
};

export default Layout;
