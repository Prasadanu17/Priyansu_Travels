export default function SectionHeader({ eyebrow, title, subtitle, light = false, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const subAlignClass = align === 'left' ? '' : 'mx-auto';
  return (
    <div className={`${alignClass} mb-10`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className={light ? 'section-title-light' : 'section-title text-pt-deep'}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${subAlignClass}`}>{subtitle}</p>
      )}
    </div>
  );
}
