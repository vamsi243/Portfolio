declare module '@splinetool/react-spline' {
  import { ReactElement } from 'react';
  
  interface SplineProps {
    scene: string;
    className?: string;
    style?: React.CSSProperties;
    onLoad?: (spline: any) => void;
    onMouseDown?: (e: any) => void;
    onMouseUp?: (e: any) => void;
    onMouseHover?: (e: any) => void;
    onKeyDown?: (e: any) => void;
    onKeyUp?: (e: any) => void;
    onStart?: (e: any) => void;
    onLookAt?: (e: any) => void;
    onFollow?: (e: any) => void;
    onScroll?: (e: any) => void;
  }

  export default function Spline(props: SplineProps): ReactElement;
}
