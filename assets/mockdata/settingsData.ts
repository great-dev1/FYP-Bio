import accountIcon from 'assets/img/settings/account.svg';
import urlManagementIcon from 'assets/img/settings/url-management.svg';
import paymentIcon from 'assets/img/settings/payment.svg';
import integrationIcon from 'assets/img/settings/integration.svg';
import nsfwIcon from 'assets/img/settings/nsfw.svg';
import searchIcon from 'assets/img/settings/search.svg';
import analyticsIcon from 'assets/img/settings/analytics.svg';
import upgradeAccount from 'assets/img/settings/upgrade-account.svg';
import accountWhiteIcon from 'assets/img/settings/account-white.svg';
import urlManagementWhiteIcon from 'assets/img/settings/url-management-white.svg';
import paymentWhiteIcon from 'assets/img/settings/payment-white.svg';
import integrationWhiteIcon from 'assets/img/settings/integration-white.svg';
import nsfwWhiteIcon from 'assets/img/settings/nsfw-white.svg';
import searchWhiteIcon from 'assets/img/settings/search-white.svg';
import analyticsWhiteIcon from 'assets/img/settings/analytics-white.svg';
import upgradeWhiteIcon from 'assets/img/settings/upgrade-white.svg';

export const settingsMenuList = [
  {
    id: 'account-information',
    title: 'Account Information',
    icon: accountIcon,
    width: 27,
    height: 27,
    mdWidth: 17.3,
    mdHeight: 16.8,
    whiteIcon: accountWhiteIcon,
    dWidth: 13.7,
    dHeight: 13.3
  },
  {
    id: 'url-management',
    title: 'Url Management',
    icon: urlManagementIcon,
    whiteIcon: urlManagementWhiteIcon,
    width: 23.3,
    height: 23.3,
    mdWidth: 19.3,
    mdHeight: 19.3,
    dWidth: 14.4,
    dHeight: 14.4
  },
  {
    id: 'payment',
    title: 'Payment',
    icon: paymentIcon,
    width: 22,
    height: 22,
    mdWidth: 19.04,
    mdHeight: 19.04,
    whiteIcon: paymentWhiteIcon,
    dWidth: 14.4,
    dHeight: 14.4
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: integrationIcon,
    width: 19.8,
    height: 21.4,
    mdWidth: 17.6,
    mdHeight: 19,
    whiteIcon: integrationWhiteIcon,
    dWidth: 12.66,
    dHeight: 13.7
  },
  {
    id: 'nsfw-warning',
    title: 'NSFW Warning',
    icon: nsfwIcon,
    width: 28,
    height: 28,
    mdWidth: 23,
    mdHeight: 23,
    whiteIcon: nsfwWhiteIcon,
    dWidth: 15.3,
    dHeight: 13.54
  },
  {
    id: 'seo',
    title: 'SEO',
    icon: searchIcon,
    width: 22,
    height: 22,
    mdWidth: 18,
    mdHeight: 18,
    whiteIcon: searchWhiteIcon,
    dWidth: 16.2,
    dHeight: 16.2
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: analyticsIcon,
    width: 20,
    height: 20,
    mdWidth: 16,
    mdHeight: 16,
    whiteIcon: analyticsWhiteIcon,
    dWidth: 14.3,
    dHeight: 14.3
  },
  {
    id: 'upgrade-account',
    title: 'Upgrade Account',
    icon: upgradeAccount,
    width: 27,
    height: 27,
    mdWidth: 20,
    mdHeight: 20,
    whiteIcon: upgradeWhiteIcon,
    dWidth: 16,
    dHeight: 16
  }
];

export const currencyList = [
  {
    label: 'United States Dollar (USD)',
    data: 'USD'
  },
  {
    label: 'EURO (EUR)',
    data: 'EUR'
  },
  {
    label: 'United Kingdom Pounds (GBP)',
    data: 'GBP'
  },
  {
    label: 'Canadian Dollars (CAD)',
    data: 'CAD'
  },
  {
    label: 'Japanese Yen (JPY)',
    data: 'JPY'
  },
  {
    label: 'Australian Dollar (AUD)',
    data: 'AUD'
  }
];

export const freeOptions = [
  'Unlimited links and Link Apps', 'Clicks and views for past 28 days', 'Collect payments, tips and donations', '0% transaction fees for a limited time'
];

export const proOptions = [
  'Remove Fyp.bio Logo and Branding',
  "5% Monetization Fees (for free it's 10%)",
  "Five Exclusive Themes",
  "Fyp.bio Verification Badge",
  "Promotion on Explore Page",
  "Priority Support"
];

export const userLevels = [
  {
    data: 'owner',
    label: 'Owner'
  },
  {
    data: 'admin',
    label: 'Admin'
  },
  {
    data: 'manager',
    label: 'Manager'
  }
];
