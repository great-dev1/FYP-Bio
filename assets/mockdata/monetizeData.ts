import pictureImg from 'assets/img/monetize/picture.svg';
import loudspeakerImg from 'assets/img/monetize/loudspeaker.svg';
import videoCallImg from 'assets/img/monetize/video-call.svg';
import donationImg from 'assets/img/monetize/donation.svg';
import discordImg from 'assets/img/monetize/discord.svg';
import telegramImg from 'assets/img/monetize/telegram.svg';

export const monetizeYourFypList: any[] = [
  {
    title: 'Exclusive Content',
    description: 'Start selling your content. Add photos, videos, courses, and more to your FYP page. Earn money and increase your passive income',
    icon: pictureImg,
    pcIconWidth: 38,
    pcIconHeight: 38,
    mdIconWidth: 34,
    mdIconHeight: 34,
    btnText: 'Add Exclusive Content',
    link: '/exclusion'   
  },
  {
    title: 'Personal Shoutout',
    description: 'Sell personalized video messages to your fans. Answer questions & create unforgettable moments through your FYP page',
    icon: loudspeakerImg,
    pcIconWidth: 40,
    pcIconHeight: 40,
    mdIconWidth: 36.27,
    mdIconHeight: 36.27,
    btnText: 'Add Personal Shoutout',
    link: '/personal-shoutout'  
  },
  {
    title: 'Video Calls',
    description: 'Offer your supporters the option to book a 1:1 time to talk with you through Zoom',
    icon: videoCallImg,
    pcIconWidth: 37,
    pcIconHeight: 37,
    mdIconWidth: 33.55,
    mdIconHeight: 33.55,
    btnText: 'Add Video Calls',
    mobileBtnText: 'Create 1:1 Video Call',
    link: '/video-calls' 
  },
  {
    title: 'Tipping',
    description: 'Let your visitors support you or a cause by tipping on a one-time or monthly basis. Grow your income through the support of your fans',
    icon: donationImg,
    pcIconWidth: 43,
    pcIconHeight: 43,
    mdIconWidth: 38,
    mdIconHeight: 38,
    btnText: 'Add Tipping',
    link: '/tipping'  
  },
  {
    title: 'Discord Access',
    description: 'Sell access to Discord communities. Let visitors pay once or monthly to join your group',
    icon: discordImg,
    pcIconWidth: 43,
    pcIconHeight: 43,
    mdIconWidth: 39,
    mdIconHeight: 39,
    btnText: 'Add Discord Access',
    link: '/discord'   
  },
  {
    title: 'Telegram Access',
    description: 'Sell access to Telegram communities. Let visitors pay once or monthly to join your group',
    icon: telegramImg,
    pcIconWidth: 36,
    pcIconHeight: 36,
    mdIconWidth: 36,
    mdIconHeight: 36,
    btnText: 'Add Telegram Access',
    link: '/telegram'   
  }
];
