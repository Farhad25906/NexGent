

const SectionHeader = ({
  badgeText = "Powerful Features",
  icon = "✳️",
  titleStart = "Power Up Your Projects With",
  highlightText = "Nexgent",
  description = "Simplify planning, enhance collaboration, and increase productivity.",
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 py-10">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-600 mb-6">
        <span>{icon}</span>
        <span>{badgeText}</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
        {titleStart}{" "}
        <span className="italic font-serif text-gray-800">
          {highlightText}
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 text-gray-500 text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;