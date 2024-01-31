import React from "react";

type Props = { sum: number };

function Header({ sum }: Props) {
  return <h1>{"Sum: " + sum}</h1>;
}

export default Header;
