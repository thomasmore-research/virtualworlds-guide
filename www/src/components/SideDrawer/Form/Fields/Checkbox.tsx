import React from "react";
import { Controller } from "react-hook-form";
import { IFieldProps } from "../utils";

import {
  makeStyles,
  createStyles,
  ButtonBase,
  FormControlLabel,
  Switch,
  SwitchProps as MuiSwitchProps,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonBase: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor:
        theme.palette.type === "light"
          ? "rgba(0, 0, 0, 0.09)"
          : "rgba(255, 255, 255, 0.09)",
      padding: theme.spacing(9 / 8, 1, 9 / 8, 1.5),

      width: "100%",
      display: "flex",
      textAlign: "left",
    },

    formControlLabel: {
      margin: 0,
      width: "100%",
      display: "flex",
    },

    label: {
      flexGrow: 1,
      whiteSpace: "normal",
    },
  })
);

export interface ICheckboxProps
  extends IFieldProps,
    Omit<MuiSwitchProps, "name"> {
  label?: React.ReactNode;
  editable?: boolean;
}

export default function Checkbox({
  control,
  docRef,
  label,
  name,
  editable,
  ...props
}: ICheckboxProps) {
  const classes = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      render={({ onChange, onBlur, value }) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.checked);
        };

        const handleClick = () => onChange(!value);

        return (
          <ButtonBase className={classes.buttonBase} onClick={handleClick}>
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  {...props}
                  checked={value}
                  onChange={handleChange}
                  onBlur={onBlur}
                  disabled={editable === false}
                />
              }
              label={label}
              labelPlacement="start"
              classes={{ root: classes.formControlLabel, label: classes.label }}
            />
          </ButtonBase>
        );
      }}
    />
  );
}
