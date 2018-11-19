import React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "@material-ui/core/Grid";

import Photo from "./Photo";

export const photo = "http://placeimg.com/640/480/any";

storiesOf("Photo", module).add("default", () => (
  <Grid container>
    <Photo src={photo} />
  </Grid>
));
