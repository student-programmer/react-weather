import React from 'react';
import { ThisDay } from './components/ThisDay/ThisDay';
import s from './Home.module.scss';
type Props = {};

export const Home = (props: Props) => {
    return (
        <div className={s.home}>
            <ThisDay />
        </div>
    );
};
