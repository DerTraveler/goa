import React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "@material-ui/core/Grid";

import Photo from "./Photo";

export const photo = {
  thumbnail: "http://placeimg.com/320/240/any"
};

storiesOf("Photo", module).add("default", () => (
  <Grid container>
    <Photo photo={photo} />
  </Grid>
));
