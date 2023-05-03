import './MyLabel.css'

export interface MyLabelProps {
  /**
   * Message will appear in the tag
   */
  label?: string;
  /**
   * This is the default label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Capitalize label
   */
  allCaps?: boolean;
  /**
   * Set the color 
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Set font color 
   */
  fontColor?: string;
}

export const MyLabel = ({ 
    allCaps= false,
    color  = 'primary',
    label  = 'No label ', 
    size   = 'normal',
    fontColor = ''
}: MyLabelProps) => {
  return (
    <span 
      className={`label ${size} text-${color}`} 
      style={{ color: fontColor }}
    >
      { allCaps ? label.toUpperCase() : label}
    </span>
  )
}