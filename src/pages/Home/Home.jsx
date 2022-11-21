import React from "react";
import styles from './Home.module.scss'


export class Home extends React.PureComponent {

    render() {
        return <div className={styles.main}>
            <h1>Welcome</h1>
            <p>This is a questionnaire application for performing tests. Select the test you are interested in on the panel on the right</p>
            <p>Later, a function will appear here to add your own polls. Keep an eye on the changes</p>
        </div>
    }
}