import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Icon from '../00-atoms/Icon';

const SocialIcons: React.FC = () => (
  <div>
    <Icon icon={<FacebookIcon color="primary" />} href="https://facebook.com" />
    <Icon icon={<EmailIcon color="primary" />} href="mailto:someone@example.com" />
    <Icon icon={<TwitterIcon color="primary" />} href="https://twitter.com" />
    <Icon icon={<YouTubeIcon color="primary" />} href="https://youtube.com" />
  </div>
);

export default SocialIcons;