import React from "react";
import styled from "styled-components";

import { Icon } from "component";

const Separation = styled.div({
  marginTop: 4,
});

const Button = styled.button({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: 48,
  marginTop: 16,
  marginBottom: 16,
  border: "none",
  outline: "none",
  alignItems: "center",
  backgroundColor: "transparent",
});

interface Props {
  src: string;
  title: string;
}

class SideMenuButton extends React.Component<Props> {
  static defaultProps = {
    src: "",
    title: "",
  };

  render() {
    return (
      <Button>
        <Icon src={this.props.src} />
        <Separation />
        <label>{this.props.title}</label>
      </Button>
    );
  }
}

export default SideMenuButton;
