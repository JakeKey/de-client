import React from "react";

export interface IconProps {
  color: string;
  width: string;
  height: string;
  onClick?: () => void;
}

export const ExitIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} {...props}>
    <path
      fill={color}
      d="M13,2.99999996 L11,2.99999996 L11,13 L13,13 L13,2.99999996 Z M17.83,5.16999997 L16.41,6.58999998 C17.99,7.85999998 19,9.80999999 19,12 C19,15.87 15.87,19 12,19 C8.12999998,19 4.99999996,15.87 4.99999996,12 C4.99999996,9.80999999 6.00999998,7.85999998 7.57999998,6.57999998 L6.16999998,5.16999997 C4.22999997,6.81999998 2.99999996,9.25999999 2.99999996,12 C2.99999996,16.97 7.02999998,21 12,21 C16.97,21 21,16.97 21,12 C21,9.25999999 19.77,6.81999998 17.83,5.16999997 Z"
    ></path>
  </svg>
);

export const BulbIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fill={color}
      d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"
    />
  </svg>
);

export const ChatIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fill={color}
      d="M20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,22 L5.99999996,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M20,16 L5.99999997,16 L3.99999997,18 L3.99999997,3.99999997 L20,3.99999997 L20,16 Z"
    />
  </svg>
);

export const HumanIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fill={color}
      d="M12,1C10.89,1 10,1.9 10,3C10,4.11 10.89,5 12,5C13.11,5 14,4.11 14,3A2,2 0 0,0 12,1M10,6C9.73,6 9.5,6.11 9.31,6.28H9.3L4,11.59L5.42,13L9,9.41V22H11V15H13V22H15V9.41L18.58,13L20,11.59L14.7,6.28C14.5,6.11 14.27,6 14,6"
    />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fill={color}
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fill={color}
      d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
    />
  </svg>
);

export const SendIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fill={color}
      d="M20.642 13.342a3 3 0 0 1-1.342 1.341L7.183 20.742a2.785 2.785 0 0 1-3.969-3.075l1.071-5h16.599a3.007 3.007 0 0 1-.242.675zM7.183 3.258L19.3 9.317a2.994 2.994 0 0 1 1.583 2.016H4.285l-1.07-5a2.785 2.785 0 0 1 3.968-3.075z"
    />
  </svg>
);

export const ReportsIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 36 36" {...props}>
    <defs>
      <rect id="a" width="13" height="13" x="19" y="4" rx="3" />
      <rect id="b" width="13" height="13" x="4" y="19" rx="3" />
    </defs>
    <g fill={color} fillRule="evenodd">
      <rect width="13" height="13" x="4" y="4" fill="#F17105" rx="3" />
      <use fill="#F17105" xlinkHref="#a" />
      <use fill="#FFF" fillOpacity=".4" xlinkHref="#a" />
      <use fill="#F17105" xlinkHref="#b" />
      <use fill="#FFF" fillOpacity=".2" xlinkHref="#b" />
      <path
        stroke="#F17105"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M29.5 29.5l-8-8M21.5 29.5l8-8"
      />
    </g>
  </svg>
);

export const NotesIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 36 36" {...props}>
    <g fill={color} fillRule="evenodd" transform="translate(4 9)">
      <rect width="28" height="5" fill="#E6C229" rx="2.5" />
      <rect width="15" height="5" y="7" fill="#ebce54" rx="2.5" />
      <rect width="22" height="5" y="14" fill="#f0da7f" rx="2.5" />
    </g>
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path fill={color} d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path fill={color} d="M19 13H5v-2h14v2z" />
  </svg>
);

export const EditIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fill={color}
      d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
    />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path fill={color} d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export const ErrorCircleIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
);

export const SuccessCircleIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    />
  </svg>
);

export const AttachIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <path
      fill={color}
      d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
    />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} {...props}>
    <path
      fill={color}
      d="M12,5.89999997 C13.16,5.89999997 14.1,6.83999998 14.1,7.99999998 C14.1,9.15999999 13.16,10.1 12,10.1 C10.84,10.1 9.89999999,9.15999999 9.89999999,7.99999998 C9.89999999,6.83999998 10.84,5.89999997 12,5.89999997 L12,5.89999997 Z M12,14.9 C14.97,14.9 18.1,16.36 18.1,17 L18.1,18.1 L5.89999997,18.1 L5.89999997,17 C5.89999997,16.36 9.02999999,14.9 12,14.9 L12,14.9 Z M12,3.99999997 C9.78999999,3.99999997 7.99999998,5.78999997 7.99999998,7.99999997 C7.99999998,10.21 9.78999999,12 12,12 C14.21,12 16,10.21 16,7.99999997 C16,5.78999997 14.21,3.99999997 12,3.99999997 Z M12,13 C9.32999999,13 3.99999997,14.34 3.99999997,17 L3.99999997,20 L20,20 L20,17 C20,14.34 14.67,13 12,13 Z"
    />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({
  color,
  width,
  height,
  ...props
}) => (
  <svg width={width} height={height} {...props} viewBox="0 0 24 24">
    <path fill={color} d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
  </svg>
);
