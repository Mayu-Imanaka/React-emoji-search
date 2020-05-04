import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
    render() {
        return (
            <header className="component-header">
                <img
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
                    alt=""
                    width="32"
                    height="32" />
                Emoji Search
                <img
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
                    alt=""
                    width="32"
                    height="32" />
            </header>
        );
    }
}