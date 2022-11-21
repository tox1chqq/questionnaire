import React from "react";
import styles from './Layout.module.scss'

export class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className={styles.container}>
            <nav className={styles.navbar}>
                <h3>Questionnaire</h3>
            </nav>
            <div className={styles.questions}>
                 <h3>Topics</h3>
            </div>
            <div className={styles.main}>{this.props.children}</div>
        </div>
    }
}