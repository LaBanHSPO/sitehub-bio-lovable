interface CategoryBadgeProps {
  label: string;
}

const CategoryBadge = ({ label }: CategoryBadgeProps) => {
  return (
    <div className="w-full py-3">
      <span className="inline-block px-4 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
        {label}
      </span>
    </div>
  );
};

export default CategoryBadge;
