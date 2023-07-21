import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import SupportLayout from 'components/layouts/supportLayout';
import CustomImage from 'components/customImage';
import PlanCard from './planCard';
import ComparisonRow from './comparisonRow';

import freePlanImg from 'assets/img/premium/free-plan.svg';
import starterPlanImg from 'assets/img/premium/starter-plan.svg';
import premiumPlanImg from 'assets/img/premium/premium-plan.svg';

import styles from 'assets/jss/pages/premiumPageStyles';
const useStyles = makeStyles(styles);

const PremiumPage: FC = () => {

  const classes = useStyles();

  return (
    <SupportLayout title='Premium Page' className={classes.pageWrapper}>
      <Box className={classes.wrapper}>
        <Box className={classes.bannerBox} display='flex' alignItems='center' flexDirection='column'>
          <Typography variant='h1' color='#fff' fontWeight={600} fontSize={45} lineHeight='63px'>
            Choose your Plan
          </Typography>
          <Typography variant='body1' fontWeight={300} fontSize={14} lineHeight='25px' color='rgba(0, 0, 0, 0.74)' align='center'>
            The perks of our Premium plans are that you can remove branding, unlock themes & features, and decrease fees for monetized content
          </Typography>
        </Box>
        <Box className={classes.mainContents} mx='auto'>
          <Box className={classes.plansSection}>
            <Grid container rowSpacing={{ xs: '64px', md: '0' }}>
              <Grid item xs={12} md={4} lg={4} xl={4} className='free-card-wrapper' >
                <PlanCard
                  title='Free'
                  price='0'
                  description='We offer free complete customizability & unlimited links to ensure anybody can successfully use our platform'
                  options={[
                    'Complete Customizability',
                    'In-depth Analytics on audience and earnings',
                    'Sell products and collect tips',
                    'FYP takes 10% on sales made through the platform']
                  }
                  logoIcon={<CustomImage src={freePlanImg} alt='' width={128} height={128} mdWidth={79} mdHeight={79} />}
                />
              </Grid>

              <Grid item xs={12} md={4} lg={4} xl={4}>
                <PlanCard
                  title='Starter'
                  price='5.00'
                  description='Remove branding, lower fees, and unlock themes for creators who want unlimited customizability. '
                  options={[
                    'Remove FYP logo & branding',
                    'Unlock 5 exclusive themes',
                    'Priority support',
                    'FYP takes 7% on sales made through the platform']
                  }
                  logoIcon={<CustomImage src={starterPlanImg} alt='' width={128} height={128} mdWidth={79} mdHeight={79} />}
                />
              </Grid>

              <Grid item xs={12} md={4} lg={4} xl={4}>
                <PlanCard
                  title='Premium'
                  price='15.00'
                  description='Verified checkmark, unlock embeds, and ten more themes. Premium also lowers transaction fees to 4% for all sales made through our platform'
                  options={[
                    'Verification Badge',
                    'Unlock 15 exclusive themes',
                    'Exclusive embeds and customizability',
                    'FYP takes 4% on sales made through the platform']
                  }
                  logoIcon={<CustomImage src={premiumPlanImg} alt='' width={128} height={128} mdWidth={79} mdHeight={79} />}
                />
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.comparisonSection}>
            <Box className={classes.comparisonHeader} display='flex' alignItems='center'>
              <Box className='title-col'>
                <Typography variant='h3' color='#000' fontSize={30} fontWeight={700} lineHeight='43px'>
                  Feature Comparison
                </Typography>
              </Box>

              <Box className='plan-col free-col' display='flex' flexDirection='column' alignItems='center'>
                <Typography variant='h4' className='plan-title' color='#000' fontSize={21} fontWeight={700} lineHeight='29px'>
                  Free
                </Typography>
                <Box className='plan-price' display='flex' alignItems='center'>
                  <Box display='flex' alignItems='center'>
                    <Typography variant='h5' color='#000' fontFamily='Roboto mono' fontSize={23} fontWeight={500} lineHeight='31px'>
                      $
                    </Typography>
                    <Typography variant='h4' color='#000' fontSize={25} lineHeight='35px'>
                      0
                    </Typography>
                  </Box>
                  <Typography variant='body1' color='#000' fontSize={16} fontWeight={300} lineHeight='23px'>
                    / Month
                  </Typography>
                </Box>

                <Button variant='outlined' className='join-btn'>
                  Join Free
                </Button>
              </Box>

              <Box className='plan-col starter-col' display='flex' flexDirection='column' alignItems='center'>
                <Typography variant='h4' color='#fff' fontSize={21} fontWeight={700} lineHeight='29px'>
                  Starter
                </Typography>
                <Box className='plan-price' display='flex' alignItems='center'>
                  <Box display='flex' alignItems='center'>
                    <Typography variant='h5' color='#fff' fontFamily='Roboto mono' fontSize={23} fontWeight={500} lineHeight='31px'>
                      $
                    </Typography>
                    <Typography variant='h4' color='#fff' fontSize={25} lineHeight='35px'>
                      5
                    </Typography>
                  </Box>
                  <Typography variant='body1' color='#fff' fontSize={16} fontWeight={300} lineHeight='23px'>
                    / Month
                  </Typography>
                </Box>

                <Button variant='outlined' className='join-btn'>
                  Join Starter
                </Button>
              </Box>

              <Box className='plan-col premium-col' display='flex' flexDirection='column' alignItems='center'>
                <Typography variant='h4' color='#000' fontSize={21} fontWeight={700} lineHeight='29px'>
                  Premium
                </Typography>
                <Box className='plan-price' display='flex' alignItems='center'>
                  <Box display='flex' alignItems='center'>
                    <Typography variant='h5' color='#000' fontFamily='Roboto mono' fontSize={23} fontWeight={500} lineHeight='31px'>
                      $
                    </Typography>
                    <Typography variant='h4' color='#000' fontSize={25} lineHeight='35px'>
                      15
                    </Typography>
                  </Box>
                  <Typography variant='body1' color='#000' fontSize={16} fontWeight={300} lineHeight='23px'>
                    / Month
                  </Typography>
                </Box>

                <Button variant='outlined' className='join-btn'>
                  Join Premium
                </Button>
              </Box>
            </Box>

            <Box className={classes.comparisonContents}>
              <ComparisonRow title='Themes' free='10' starter='15' premium='25'
                description="Unlock more themes that experts have designed to improve your page's layout."
              />
              <ComparisonRow title='Transaction Fee on sales made through the platform' free='10%' starter='7%' premium='4%'
                description="If you want to make some serious income, Premium has lower transaction fees. At a 4% fee per transaction, we give you one of the lowest rates in the market."
              />
              <ComparisonRow title='Remove FYP Branding' free={false} starter={true} premium={true}
                description="Premium users can hide our logo at the bottom of your FYP. Make your page YOUR brand."
              />
              <ComparisonRow title='Verification Badge' free={false} starter={false} premium={true}
                description="Get a verification badge that verifies your identity and legitimacy to visitors."
              />
              <ComparisonRow title='Promoted on Explore Page' free={false} starter={true} premium={true}
                description="Get your profile and products advertised to users searching through our explore page. Increase sales and Clicks."
              />
              <ComparisonRow title='Priority Support' free={false} starter={true} premium={true}
                description="Get quicker responses to questions with our dedicated premium support team."
              />
              <ComparisonRow title='RSS Feed Link' free={false} starter={false} premium={true}
                description="Use a real syndication feed link to display recent blog posts, new articles, etc."
              />
              <ComparisonRow title='Mobile App Link Embed' free={false} starter={false} premium={true}
                description=" Unlock our mobile app embed, which displays your app and increases your clicks and downloads."
              />
              <ComparisonRow title='Custom Terms and Conditions' free={false} starter={false} premium={true}
                description="Handle your own legal terms. Unlock customization that lets you enter Terms and Conditions for users signing up to your Email or SMS lists."
              />
              <ComparisonRow title='Export All-time Analytics' free={false} starter={false} premium={true}
                description="View and export your lifetime analytics into a file format."
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </SupportLayout>
  )
}

export default PremiumPage;
