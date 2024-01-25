import React, { useContext, useEffect, useState } from "react";

import MenuRutas from "../../../../components/MenuRutas/MenuRutas";
import { SelectedRouteItems } from "../SelectedRouteItems/SelectedRouteItems";
import { AddProfileRoute } from "../AddProfileRoute/AddProfileRoute";

import style from "./AssociateRoutes.module.css";

const AssociateRoutes = () => {

    return (
    <section className={style.Section}>
      <hr></hr>
      <MenuRutas />
      <SelectedRouteItems />
      <hr></hr>
      <AddProfileRoute/>
    </section>
  );
};

export default AssociateRoutes;
