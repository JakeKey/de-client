import React from "react";
import uuid from "react-uuid";

import { NotificationsListTypes } from "store/types";

import { Wrapper } from "./styles";
import Notification from "./Notification";

const Notifications: React.FC<{ notifications: NotificationsListTypes[] }> = ({
  notifications
}) => (
  <Wrapper>
    {notifications.map(({ notification }) => (
      <Notification
        key={uuid()}
        code={notification.code}
        type={notification.type}
      />
    ))}
  </Wrapper>
);

export default Notifications;
