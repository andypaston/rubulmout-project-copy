interface AchievementCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const AchievementCard = ({ title, description, icon }: AchievementCardProps) => {
  return (
    <div className="group p-6 rounded-lg glass border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
      {icon && (
        <div className="mb-4 text-primary group-hover:text-accent transition-colors duration-300">
          {icon}
        </div>
      )}
      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h4>
      <p className="text-white/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AchievementCard;