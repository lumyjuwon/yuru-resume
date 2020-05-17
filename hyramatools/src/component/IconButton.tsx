import React from "react";
import styled from "styled-components";

import { Icon } from "component";

const Button = styled.button({
  width: "40px",
  height: "40px",
  display: "flex",
  flexDirection: "column",
  border: "none",
  outline: "none",
  justifyItems: "center",
  alignItems: "center",
  backgroundColor: "transparent",
});

interface Props {
  src: string;
  size: number;
}

class IconButton extends React.Component<Props> {
  static defaultProps: Props = {
    src: "",
    size: 24,
  };

  render() {
    if (this.props.src.length === 0) {
      return null;
    }

    return (
      <Button>
        <Icon src={this.props.src} />
      </Button>
    );
  }
}

export default IconButton;
