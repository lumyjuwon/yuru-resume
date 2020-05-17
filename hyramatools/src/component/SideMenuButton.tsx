import React, { CSSProperties } from "react";
import styled from "styled-components";

import { Icon } from "component";

const Separation = styled.div({
  marginTop: 4,
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
      <button style={styles.container}>
        <Icon src={this.props.src} />
        <Separation />
        <text>{this.props.title}</text>
      </button>
    );
  }
}

const styles: { [key: string]: CSSProperties } = {
  container: {
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
  },
};

export default SideMenuButton;
