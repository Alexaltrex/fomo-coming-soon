import React from 'react';
import style from "./App.module.scss";
import {Header} from "../A1_Header/Header";
import {LeftPanel} from "../A2_LeftPanel/LeftPanel";
import {Route, Routes} from "react-router-dom";
import {EnterCode} from "../P0_EnterCode/EnterCode";
import {Leader} from "../P1_Users/Leader";
import {User} from "../P1_Users/User";
import {Phase3User} from "../P1_Users/Phase3User";
import {Phase3Leader} from "../P1_Users/Phase3Leader";
import {Lines} from "../_common/Lines/Lines";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <div className={style.main}>
                <LeftPanel/>
                <div className={style.content}>
                    <Lines count={6} className={style.linesMobile}/>
                    <Lines count={13} className={style.linesDesktop}/>
                    <div className={style.contentInner}>
                        <Routes>
                            <Route path='/' element={<EnterCode/>}/>
                            <Route path='/user' element={<User/>}/>
                            <Route path='/leader' element={<Leader/>}/>
                            <Route path='/phase3User' element={<Phase3User/>}/>
                            <Route path='/phase3Leader' element={<Phase3Leader/>}/>
                        </Routes>
                    </div>

                </div>

            </div>
        </div>
    );
}

