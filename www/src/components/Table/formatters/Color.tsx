import React, { useState } from "react";
import { CustomCellProps } from "./withCustomCell";
import { ChromePicker } from "react-color";

import {
  makeStyles,
  createStyles,
  Grid,
  ButtonBase,
  Popover,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},

    colorIndicator: {
      width: 20,
      height: 20,

      boxShadow: `0 0 0 1px ${theme.palette.text.disabled} inset`,
      borderRadius: theme.shape.borderRadius / 2,
    },
  })
);

export default function Color({ value, onSubmit }: CustomCellProps) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const toggleOpen = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl((s) => (s ? null : e.currentTarget));
  const handleClose = () => setAnchorEl(null);

  const handleChangeComplete = (color) => onSubmit(color);

  return (
    <>
      <Grid
        container
        alignItems="center"
        spacing={1}
        className={classes.root}
        onDoubleClick={toggleOpen}
      >
        <Grid item>
          <ButtonBase
            className={classes.colorIndicator}
            style={{ backgroundColor: value?.hex }}
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen(e);
            }}
          />
        </Grid>

        <Grid item xs>
          {value?.hex}
        </Grid>
      </Grid>

      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        marginThreshold={12}
      >
        <ChromePicker
          color={value?.rgb}
          onChangeComplete={handleChangeComplete}
        />
      </Popover>
    </>
  );
}
