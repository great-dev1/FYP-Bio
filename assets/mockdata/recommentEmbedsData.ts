import blackLinkIcon from 'assets/img/black-link.svg';
import sellIcon from 'assets/img/sell.svg';
import tiktokIcon from 'assets/img/tiktok.svg';
import youtubeIcon from 'assets/img/red-youtube.svg';
import musicIcon from 'assets/img/music.svg';
import textIcon from 'assets/img/text.svg';
import twitterIcon from 'assets/img/twitter-blue.svg';
import onlyFansIcon from 'assets/img/onlyfans.svg';

export const carouselConfig = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 9
  },
  tablet: {
    breakpoint: { max: 992, min: 600 },
    items: 8
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3
  }
};

export const embeds: any[] = [
  {
    title: 'Custom Link',
    icon: blackLinkIcon,
    imgWidth: 29.29,
    imgHeight: 29.29
  },
  {
    title: 'Sell Content',
    icon: sellIcon,
    imgWidth: 20.44,
    imgHeight: 34.07
  },
  {
    title: 'Tiktok ',
    icon: tiktokIcon,
    imgWidth: 27.81,
    imgHeight: 31.44
  },
  {
    title: 'Video',
    icon: youtubeIcon,
    imgWidth: 35.33,
    imgHeight: 23.81
  },
  {
    title: 'Music',
    icon: musicIcon,
    imgWidth: 30.42,
    imgHeight: 30.42
  },
  {
    title: 'Text',
    icon: textIcon,
    imgWidth: 27.49,
    imgHeight: 29.29
  },
  {
    title: 'Tweet',
    icon: twitterIcon,
    imgWidth: 31.42,
    imgHeight: 25.73
  },
  {
    title: 'OnlyFans',
    icon: onlyFansIcon,
    imgWidth: 30.91,
    imgHeight: 31.44
  }
];
