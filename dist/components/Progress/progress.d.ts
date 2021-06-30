import React, { FC } from 'react';
import { ThemeProps } from '../Icon/icon';
export interface PropgressProps {
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    styles?: React.CSSProperties;
    theme?: ThemeProps;
}
declare const Progress: FC<PropgressProps>;
export default Progress;
