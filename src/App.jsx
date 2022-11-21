import React from "react";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components";
import {Home, Question} from "./pages";


export class App extends React.Component {

    render() {
        return <Layout>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/questions' element={<Question/>}/>
            </Routes>
        </Layout>
    }
}