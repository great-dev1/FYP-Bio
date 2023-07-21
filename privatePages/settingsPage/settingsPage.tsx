import React, { FC, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { scroller } from "react-scroll";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import PrivateLayout from "components/layouts/privateLayout";
import MobileDevice from "components/mobileDevice";
import CustomButton from "components/customButton";
import AccountInformation from "./accountInformation";
import UrlManagement from "./urlManagement";
import MenuDropdown from "./menuDropdown";
import PaymentMethods from "./paymentMethods";
import Integrations from "./integrations";
import NsfwWarning from "./nsfwWarning";
import SeoSection from "./seoSection";
import Analytics from "./analytics";
import UpgradeAccount from "./upgradeAccount";

import { settingsMenuList } from "assets/mockdata/settingsData";
import undoIcon from "assets/img/settings/undo.svg";
import redoIcon from "assets/img/settings/redo.svg";

import styles from "assets/jss/pages/settingsPageStytles";
const useStyles = makeStyles(styles);

const SettingsPage: FC = () => {
  const classes = useStyles();
  const theme = useTheme();  
  const isMobileMode = useMediaQuery(theme.breakpoints.down("lg"));

  const [tab, setTab] = useState("Account Information"); 

  const handleClickTab = (title: string) => {
    if (!isMobileMode) {
      setTab(title);
    }
  };
    
  return (
    <PrivateLayout
      title="Settings - Account Information"
      className={classes.settingsPage}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        className={classes.wrapper}
        position="relative"
      >
        <MenuDropdown
          tab={tab}
          handleChange={val => {
            scroller.scrollTo(settingsMenuList.find((cell) => cell.title === val)?.id ?? '', {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
              offset: -94
            });
            setTimeout(() => {
              setTab(val);
            }, 1000)
          }}
          data={settingsMenuList.find(cell => cell.title === tab)}
        />
        <Box className={classes.menuWrapper}>
          <Typography variant="h6" fontWeight={700}>
            Settings Menu
          </Typography>
          {settingsMenuList.map(cell => (
            <Link
              underline="none"
              variant="button"
              className={clsx(classes.menuItem, {
                [classes.activeMenu]: tab === cell.title
              })}
              key={cell.title}
              href={`/${cell.id}`}
              onClick={(e) => {
                e.preventDefault();
                setTab(cell.title);
              }}
            >
              <Image
                src={cell.icon}
                alt=""
                width={cell.width}
                height={cell.height}
              />
              <Typography variant="body1">{cell.title}</Typography>
            </Link>
          ))}
        </Box>

        <Box className={clsx(classes.contents)}>
          <AccountInformation
            currentTab={tab === "Account Information" || isMobileMode}
            handleSetTab={() => handleClickTab("Account Information")}
          />
          <UrlManagement
            currentTab={ tab === "Url Management" || isMobileMode }
            handleSetTab={() => handleClickTab("Url Management")}
          />
          <PaymentMethods
            currentTab={tab === "Payment" || isMobileMode}
            handleSetTab={() => handleClickTab("Payment")}
          />
          <Integrations
            currentTab={tab === "Integrations" || isMobileMode}
            handleSetTab={() => handleClickTab("Integrations")}
          />
          <NsfwWarning
            currentTab={tab === "NSFW Warning" || isMobileMode}
            handleSetTab={() => handleClickTab("NSFW Warning")}
          />
          <SeoSection
            currentTab={tab === "SEO" || isMobileMode}
            handleSetTab={() => handleClickTab("SEO")}
          />
          <Analytics
            currentTab={tab === "Analytics" || isMobileMode}
            handleSetTab={() => handleClickTab("Analytics")}
          />
          <UpgradeAccount
            currentTab={tab === "Upgrade Account" || isMobileMode}
            handleSetTab={() => handleClickTab("Upgrade Account")}
          />
        </Box>
        <Box className={classes.mobileDivice}>
          <MobileDevice />
          <Box
            className={classes.mobileBtns}
            display="flex"
            justifyContent="space-between"
          >
            <CustomButton
              variant="contained"
              boxShadow="none"
              className="undo-btn"
            >
              <Image src={undoIcon} alt="" width={20} height={8} />
              <span className="btn-label">Undo</span>
            </CustomButton>
            <CustomButton
              variant="contained"
              background="blueGradient"
              boxShadow="none"
              className="save-as-draft-btn"
            >
              Save as Drafit
            </CustomButton>
            <CustomButton
              variant="contained"
              boxShadow="none"
              className="redo-btn"
            >
              <span className="btn-label">Redo</span>
              <Image src={redoIcon} alt="" width={20} height={8} />
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </PrivateLayout>
  );
};

export default SettingsPage;
