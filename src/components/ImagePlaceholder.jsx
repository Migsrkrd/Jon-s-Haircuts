import { ImageIcon } from './icons'

export default function ImagePlaceholder({
  label,
  hint,
  aspectRatio = '16 / 9',
  rounded = false,
  className = '',
}) {
  return (
    <div
      className={`image-placeholder ${rounded ? 'image-placeholder--rounded' : ''} ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <ImageIcon size={40} />
      <span className="image-placeholder__label">{label}</span>
      {hint && <span className="image-placeholder__hint">{hint}</span>}
    </div>
  )
}
