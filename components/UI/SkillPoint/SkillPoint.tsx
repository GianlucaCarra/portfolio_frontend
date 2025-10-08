export function SkillPoint({ text }: { text: string }) {
  return (
    <div className="flex gap-2 items-start">
      <div className="flex-shrink-0 h-[7px] w-[7px] rounded-full bg-accent mt-[5px]"></div>
      <span className="break-words">{text}</span>
    </div>
  );
}
