import React from "react";
import styled from "styled-components";

const Img = styled.img({
  paddingTop: "25%",
});

interface Props {
  src: string;
}

class Icon extends React.Component<Props> {
  static defaultProps = {
    src: "",
  };

  render() {
    return <Img src={this.props.src} />;
  }
}

export default Icon;
