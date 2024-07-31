import React from 'react';
import Typography from '@mui/material/Typography';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level, children, className }) => (
  <Typography
    variant={`h${level}`}
    className={className}
  >
    {children}
  </Typography>
);

export default Heading;
