"use client";

interface PillSelectorProps {
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
  multiSelect?: boolean;
}

export default function PillSelector({ options, selected, onToggle, multiSelect = false }: PillSelectorProps) {
  const handleClick = (option: string) => {
    onToggle(option);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => handleClick(option)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                       border cursor-pointer
                       ${isSelected
                         ? "bg-gold/15 border-gold text-gold dark:text-gold-light shadow-sm scale-[1.02]"
                         : "bg-surface dark:bg-navy-light border-border dark:border-white/10 text-text-secondary dark:text-gray-400 hover:border-gold/50 hover:text-gold"
                       }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
