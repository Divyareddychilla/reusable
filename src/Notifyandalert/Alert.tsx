import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type AlertType = 'success' | 'info' | 'warning' | 'error';

interface AlertInfo {
  type: AlertType;
  message: string;
}

const Alertnotify: React.FC = () => {
  const alertTypes: AlertInfo[] = [
    { type: 'success', message: 'This is a success Alert.' },
    { type: 'info', message: 'This is an info Alert.' },
    { type: 'warning', message: 'This is a warning Alert.' },
    { type: 'error', message: 'This is an error Alert.' },
  ];

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small">
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit">
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <div className='snackbar'>
        <Snackbar
          open={true}
          autoHideDuration={9000}
          message="Note archived"
          action={action}
        />
      </div>
      <div className='alert'>
        <Stack spacing={2}>
          {alertTypes.map((alert, index) => (
            <Alert key={index} severity={alert.type}>
              {alert.message}
            </Alert>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Alertnotify;
