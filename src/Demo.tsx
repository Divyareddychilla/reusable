
import * as React from 'react';
import Stack from '@mui/material/Stack';
//imports for circular percentage loader
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//imports for liner loader for percentage
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';


// funtion of linearprogresswithlabel
function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}



//function of circularprogresswithlabel
function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
  ) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }


const Demo = () => {

   //usestate and useeffect for CircularProgressWithLabel
    const [progress, setProgress] = React.useState(10);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);


   //usestate and useeffect with LinearProgress (with percentage)
    const [linearprogress, setLinearProgress] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setLinearProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);


    //usestate and useeffect with LinearProgressWithLabel
    const [percentageprogress, setPercentageProgress] = React.useState(10);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setPercentageProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);


   

    return (
        <div>
 
 <div className='circular_loaders'>
     <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
     </div>

            <div className="circular_percentage_loaders">
                <CircularProgressWithLabel value={progress} />
            </div>

            <div className='linear_progress'>
                <Box sx={{ width: '80%' }}>
                    <LinearProgress />
                </Box>
            </div>

            <div className='liner_progress_percentage'>
                <Box sx={{ width: '80%' }}>
                    <LinearProgress variant="determinate" value={linearprogress} />
                </Box>
            </div>
            <div className="liner_progress_withlabel">
                <Box sx={{ width: '80%' }}>
                    <LinearProgressWithLabel value={percentageprogress} />
                </Box>
            </div>
        </div>
    )
}
export default Demo;


