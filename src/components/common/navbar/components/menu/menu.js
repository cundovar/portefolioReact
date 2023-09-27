import { Avatar, DropdownMenu, Flex,Text } from "@radix-ui/themes";
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className="navbar-menu  flex  items-start ">
      <div className="navbar-menu-2 flex items-end justify-end ">
        <ul className=" menu flex  items-start justify-end space-x-3">
          <NavLink to="/">
            <li>
              <h5 className="move-line">Accueil</h5>
            </li>
          </NavLink>

          <NavLink to="/portfolio">
            <li>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger >
                  <Flex align="center" className="move-line"
                  
                  
                  
                  >
                  <h5  style={{marginRight:"0",paddingRight:"5px"}} >Portfolio</h5>
                  <FontAwesomeIcon icon={faCaretDown} style={{color: "#e2e5e9", margin:"0"}} />

                  </Flex>
                  
                </DropdownMenu.Trigger>
                <DropdownMenu.Content >
                <Text as="div" className="bg-gray-300">

                  <DropdownMenu.Item  >
                    <Flex gap="3">
                     <Avatar size="1"
                             radius="full"
                             fallback="R"
                             src="./images/magicieuse.PNG"/>

                    <NavLink to="/portfolio">
                      <h6 >Projets</h6>
                    </NavLink>
                    </Flex>
                  </DropdownMenu.Item>




                  <DropdownMenu.Separator />

                  <DropdownMenu.Item>
                    <Flex gap="3">
                     <Avatar size="1"
                             radius="full"
                             fallback="R"
                             src="./images/dashboard.PNG"/>
                    <NavLink to="/creation">
                      <h6 >Gabarits</h6>
                    </NavLink>
                    </Flex>
                  </DropdownMenu.Item>

                </Text>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <h5 className="move-line">Contact</h5>
            </li>
          </NavLink>
        </ul>

        <div className="button-circle"></div>
      </div>
    </div>
  );
};

export default Menu;
