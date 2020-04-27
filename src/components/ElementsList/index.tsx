import React, { FC } from "react";

import { List, Element } from "./styles";

interface ElementType {
  label: string;
  id: number | string;
}

interface Props {
  title: string;
  elements: ElementType[];
  onClick?: (id: number | string) => void;
}

const ElementsList: FC<Props> = ({ title, elements, onClick }) => (
  <>
    {title}
    <List>
      {!!elements.length &&
        elements.map(el => (
          <Element
            key={el.id}
            onClick={onClick ? () => onClick(el.id) : undefined}
          >
            {el.label}
          </Element>
        ))}
    </List>
  </>
);

export default ElementsList;
