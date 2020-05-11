import React, { FC } from "react";

import { ListContainer, Element } from "./styles";
import Icon, { IconName } from "components/Icons";

interface ElementType {
  label: string;
  id: number | string;
}

interface Props {
  title: string;
  elements: ElementType[];
  icon?: IconName;
  iconColor?: string;
  onClick?: (id: number | string) => void;
}

const List: FC<Props> = ({ title, elements, icon, iconColor, onClick }) => (
  <>
    {title}
    <ListContainer>
      {!!elements.length &&
        elements.map(el => (
          <Element
            key={el.id}
            onClick={onClick ? () => onClick(el.id) : undefined}
          >
            {el.label}
            {icon && <Icon type={icon} color={iconColor} />}
          </Element>
        ))}
    </ListContainer>
  </>
);

export default List;
