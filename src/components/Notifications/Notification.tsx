import React, { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import usePrefix from "utils/usePrefix";
import { notificationTypes } from "utils/constants";
import { NotificationsTypes } from "store/types";
import { setNotification } from "store/actions";
import colors from "styles/colors";

import Icon from "components/Icons";

import { ButtonClose, Container, Message, IconBox, IconStyled } from "./styles";

const connector = connect(null, { setNotification });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Notification: FC<PropsFromRedux & NotificationsTypes> = ({
  code,
  type,
  setNotification
}) => {
  const NOTIFICATIONS_PREFIX = "Notifications";
  const t = usePrefix(NOTIFICATIONS_PREFIX);

  const clearCode = () => setNotification();

  const isError = type === notificationTypes.error;

  useEffect(() => {
    // eslint-disable-next-line no-magic-numbers
    setTimeout(() => clearCode(), 3000);
    return clearTimeout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container alignItems="center">
      <IconBox>
        <IconStyled
          type={isError ? "errorCircle" : "successCircle"}
          color={isError ? colors.error : colors.success}
          width="24"
          height="24"
        />
      </IconBox>
      <Message>
        <p>
          {code
            ? t(code) === `${NOTIFICATIONS_PREFIX}.${code}`
              ? t("GENERAL_ERROR")
              : t(code)
            : isError
            ? t("GENERAL_ERROR")
            : t("GENERAL_SUCCESS")}
        </p>
      </Message>
      <ButtonClose onClick={clearCode}>
        <Icon type={"close"} width="24" height="24" />
      </ButtonClose>
    </Container>
  );
};

export default connector(Notification);
