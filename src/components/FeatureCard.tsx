interface IFeatureCard extends React.PropsWithChildren<any> {
  icon: React.ReactNode;
  heading: string;
  caption: string;
}

const FeatureCard: React.FC<IFeatureCard> = ({ icon, heading, caption }) => {
  return (
    <div
      id="feature-card"
      className="group min-h-[250px] basis-[300px] rounded-2xl bg-white p-4 drop-shadow-lg transition-colors duration-500 ease-in-out hover:bg-gradient-to-tr hover:from-blue-200 hover:via-white hover:to-pink-200 md-max:shrink-0 md-max:snap-center"
    >
      <div className="flex h-full flex-col rounded-xl border border-white p-4 transition-colors duration-[250ms] ease-in-out group-hover:bg-white/50">
        {icon}
        <h2 className="mb-2 text-xl font-medium">{heading}</h2>
        <p className="text-lg text-zinc-700">{caption}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
