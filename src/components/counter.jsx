import React from "react";
import { Button, Icon } from "semantic-ui-react";

export const Counter = () => {
  const [number, setNumber] = React.useState(0);

  const incre = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <Button animated="vertical">
        <Button.Content hidden>Shop</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
      <Button
        content="Click Here"
        onClick={() => incre()}
        color="google plus"
      />
    </div>
  );
};
