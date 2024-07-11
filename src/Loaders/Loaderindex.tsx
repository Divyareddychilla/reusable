import React from 'react';
import Loader from "./Loader";
import { CircularProgressProps } from '@mui/material/CircularProgress';

const Loaderindex: React.FC = () => {
    const loaderDetailsCircular: { color: CircularProgressProps['color'], showProgress: true, progress:number, disableShrink: boolean } = {
        color: 'success',
        showProgress: true,
        progress: 10,
        disableShrink: true ,
    };

    const loaderDetailsLinear: { color: CircularProgressProps['color'], showProgress: true, progress:number } = {
        color: 'primary', 
        showProgress: true,
        progress: 50,
    };

    const customGradientColors = [
        { offset: '0%', color: '#FF5733' },
        { offset: '50%', color: '#C70039' },
        { offset: '100%', color: '#900C3F' },
    ];
    
    const loaderSimple : {color: CircularProgressProps['color']} ={
        color: 'success',
    }

    return (
        <div>
            <div className='circular_loaders'>
                <Loader type="circular" color={loaderDetailsCircular.color} showProgress={loaderDetailsCircular.showProgress} progress={loaderDetailsCircular.progress} disableShrink={loaderDetailsCircular.disableShrink}/>
                <Loader type="circular" showProgress={loaderDetailsCircular.showProgress} color={loaderDetailsCircular.color}/>
                <Loader type="circular" color={loaderDetailsCircular.color}/>
                <Loader type="circular" disableShrink={loaderDetailsCircular.disableShrink} />
            </div>

            <div className='linear_loaders'>
                <Loader type="linear" color={loaderDetailsLinear.color} showProgress={loaderDetailsLinear.showProgress} progress={loaderDetailsLinear.progress}/>
                <Loader type="linear" showProgress={loaderDetailsLinear.showProgress} color={loaderDetailsLinear.color}/>
                <Loader type="linear" />
            </div>

            <div className='customized_loaders'>
                <Loader type="customizedbar" gradientColors={customGradientColors} />
            </div>

            <div className='simplecircular_loader'> 
                <Loader type="simplecircular" color={loaderSimple.color}/>
            </div>

            <div className='integration_loader'>
                <Loader type="integration" />
            </div>

            <Loader />
        </div>
    );
};

export default Loaderindex;
