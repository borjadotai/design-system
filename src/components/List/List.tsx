import React, { JSXElementConstructor, ReactElement } from 'react';
import { ListProps } from './List.types';
import ListItem from './ListItem';

function List({ ordered, children }: ListProps) {
  if (ordered)
    return (
      <ol className="list-inside list-decimal">
        {React.Children.map(children, (child) =>
          React.cloneElement(child as ReactElement<any, string | JSXElementConstructor<any>>, { ordered }),
        )}
      </ol>
    );
  return <ul className="list-outside list-none">{children}</ul>;
}

List.Item = ListItem;

export default List;
