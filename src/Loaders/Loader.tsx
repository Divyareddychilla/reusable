import React from 'react';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import CustomizedProgressBars from './CustomizedProgressBars';
import CircularIntegration from './CircularIntegration'; 
import CircularUnderLoad from './CircularUnderLoad'; 

type ProgressType = 'circular' | 'linear' | 'customizedbar' | 'integration' | 'simplecircular';

interface LoaderProps {
    type?: ProgressType;
    color?: CircularProgressProps['color'] | LinearProgressProps['color'];
    showProgress?: boolean;
    progress?: number;
    gradientColors?: { offset: string; color: string }[];
    defaultStartColor?: string;
    defaultEndColor?: string;
    disableShrink?: boolean; 
}

const Loader: React.FC<LoaderProps> = ({
    type = 'circular',
    color = 'primary',
    progress = 0,
    showProgress = false,
    gradientColors,
    defaultStartColor,
    defaultEndColor,
    disableShrink = false 
}) => {
    switch (type) {
        case 'circular':
            return (
                showProgress ?
                    <CircularProgressWithLabel
                        color={color as CircularProgressProps['color']} value={progress} disableShrink={disableShrink} // iam passing the disableShrink prop
                    /> :
                    <CircularProgress
                        color={color as CircularProgressProps['color']} disableShrink={disableShrink} // iam passing the disableShrink prop for the cp
                    />
            );
        case 'linear':
            return (
                showProgress ?
                    <LinearProgressWithLabel
                        color={color as LinearProgressProps['color']} value={progress}
                    /> :
                    <LinearProgress
                        color={color as LinearProgressProps['color']}
                    />
            );
        case 'customizedbar':
            return <CustomizedProgressBars
                gradientColors={gradientColors}
                defaultStartColor={defaultStartColor}
                defaultEndColor={defaultEndColor}
            />;
        case 'simplecircular': 
            return <CircularUnderLoad color={color as CircularProgressProps['color']}/>;
        case 'integration':
            return <CircularIntegration />;
        default:
            return <CircularProgress color={color as CircularProgressProps['color']} />;
    }
};

export default Loader;
