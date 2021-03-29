import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";

export const SideMenu = () => {
    return (
        <Menu mode='vertical' className={styles['side-menu']}>
            {sideMenuList.map((m, index) => (
                <Menu.SubMenu
                    key={`side-menu-${index}`}
                    title= {<span><GifOutlined />{m.title}</span>}
                >
                    {m.subMenu.map((sm, smindex) => (
                        <Menu.Item
                            key={`side-menu-${smindex}`}
                            title= {<span><GifOutlined />{sm.title}</span>}
                        >

                        </Menu.Item>
                    ))}
                </Menu.SubMenu>
            ))}
        </Menu>
    )
}