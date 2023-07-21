import React, { FC } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useScrollSection } from "react-scroll-section";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import styles from "assets/jss/pages/settingsPageStytles";
const useStyles = makeStyles(styles);

interface Props {
	cell: any;
}

const SectionLink: FC<Props> = (props) => {

	const { cell } = props;
	const classes = useStyles();

	const section = useScrollSection(cell.id);

  return (
    <div>
      <Link
        underline="none"
        variant="button"
        className={clsx(classes.menuItem, {
          // [classes.activeMenu]: tab === cell.title
          ['selected-section']: section.selected
        })}
        // onClick={() => setTab(cell.title)}
        onClick={section.onClick}
      >
        <Image src={cell.icon ?? ''} alt="" width={cell.width ?? 0} height={cell.height ?? 0} />
        <Typography variant="body1">{cell.title}</Typography>
      </Link>
    </div>
  );
};

export default SectionLink;
