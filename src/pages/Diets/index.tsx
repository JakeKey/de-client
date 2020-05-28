import React, { FC, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { connect, ConnectedProps } from "react-redux";

import { DIETS_ROUTE } from "config";
import api from "utils/api";
import { DietsResponse } from "utils/api/types";
import { setNotification } from "store/actions";
import { notificationTypes } from "utils/constants";

import NewDiet from "./NewDiet";
import CurrentDiets from "./CurrentDiets";

const connector = connect(null, { setNotification });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Diets: FC<PropsFromRedux> = ({ setNotification }) => {
  const [diets, setDiets] = useState<DietsResponse>([]);
  const [newDietView, setNewDietView] = useState(false);

  const getDiets = async () => {
    try {
      const result: AxiosResponse<DietsResponse> = await api(DIETS_ROUTE, {
        method: "GET"
      });

      if (!!result && !!result.data && !!result.data.length)
        setDiets(result.data);
      else setNewDietView(true);
    } catch (err) {
      setNotification({ code: err.code, type: notificationTypes.error });
    }
  };

  useEffect(() => {
    getDiets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefetchDiets = async () => {
    await getDiets();
    setNewDietView(false);
  };

  return newDietView ? (
    <NewDiet
      closeNewDietView={() => setNewDietView(false)}
      anyDiets={!!diets.length}
      handleRefetchDiets={handleRefetchDiets}
    />
  ) : (
    <CurrentDiets diets={diets} openNewDietView={() => setNewDietView(true)} />
  );
};

export default connector(Diets);
