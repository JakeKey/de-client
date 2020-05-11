import React from "react";
import colors from "styles/colors";

import {
  AttachIcon,
  ExitIcon,
  BulbIcon,
  ChatIcon,
  HumanIcon,
  CloseIcon,
  CheckIcon,
  IconProps,
  SendIcon,
  ReportsIcon,
  NotesIcon,
  PlusIcon,
  MinusIcon,
  EditIcon,
  ChevronDownIcon,
  ErrorCircleIcon,
  SuccessCircleIcon,
  UserIcon,
  MaterialIcon
} from "./Icons";

export type IconName =
  | "attach"
  | "exit"
  | "bulb"
  | "chat"
  | "human"
  | "close"
  | "check"
  | "send"
  | "notes"
  | "reports"
  | "plus"
  | "minus"
  | "edit"
  | "chevronDown"
  | "errorCircle"
  | "successCircle"
  | "user"
  | "material";

interface Props {
  type: IconName;
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
  disabled?: boolean;
}

const ICON_SIZE = "22";

const Icon: React.FC<Props & Partial<IconProps>> = ({
  type,
  color = colors.dark_gray,
  width = ICON_SIZE,
  height = ICON_SIZE,
  disabled = false,
  ...props
}) => {
  const params = { width, height, color, disabled };

  return {
    attach: <AttachIcon {...params} {...props} />,
    exit: <ExitIcon {...params} {...props} />,
    bulb: <BulbIcon {...params} {...props} />,
    chat: <ChatIcon {...params} {...props} />,
    human: <HumanIcon {...params} {...props} />,
    close: <CloseIcon {...params} {...props} />,
    check: <CheckIcon {...params} {...props} />,
    send: <SendIcon {...params} {...props} />,
    notes: <NotesIcon {...params} {...props} />,
    reports: <ReportsIcon {...params} {...props} />,
    plus: <PlusIcon {...params} {...props} />,
    minus: <MinusIcon {...params} {...props} />,
    edit: <EditIcon {...params} {...props} />,
    chevronDown: <ChevronDownIcon {...params} {...props} />,
    errorCircle: <ErrorCircleIcon {...params} {...props} />,
    successCircle: <SuccessCircleIcon {...params} {...props} />,
    user: <UserIcon {...params} {...props} />,
    material: <MaterialIcon {...params} {...props} />
  }[type];
};

export default Icon;
