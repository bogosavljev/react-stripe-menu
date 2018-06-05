import React, { Component } from "react"
import styled from "styled-components"
import Flipper from "../src/Flipper"
import NavbarItem from "../src/Navbar/NavbarItem"
import ProductsDropdown from "../src/DropdownContents/ProductsDropdown"
import DevelopersDropdown from "../src/DropdownContents/DevelopersDropdown"
import {
  TransformOriginTopLeft,
  Caret,
  DropdownBackground
} from "../src/DropdownContainer/Components"

const Navbar = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`

class InvertedChildFLIP extends Component {
  state = { toggled: false }
  render() {
    const dropdownContents = this.state.toggled ? (
      <ProductsDropdown />
    ) : (
      <DevelopersDropdown />
    )
    const dropdown = (
      <TransformOriginTopLeft data-flip-key="dropdown">
        <Caret />
        <DropdownBackground>
          <TransformOriginTopLeft data-inverse-flip-key="dropdown">
            {dropdownContents}
          </TransformOriginTopLeft>
        </DropdownBackground>
      </TransformOriginTopLeft>
    )
    return (
      <div>
        <Flipper flipKey={this.state.toggled} duration={2500}>
          <Navbar>
            <NavbarItem
              title="Initial position"
              onMouseEnter={() => {
                this.setState({ toggled: false })
              }}
            >
              {!this.state.toggled && dropdown}
            </NavbarItem>
            <NavbarItem
              title="Toggled position"
              onMouseEnter={() => {
                this.setState({ toggled: true })
              }}
            >
              {this.state.toggled && dropdown}
            </NavbarItem>
          </Navbar>
        </Flipper>
      </div>
    )
  }
}

export default InvertedChildFLIP