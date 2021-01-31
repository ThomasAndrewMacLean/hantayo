import React from 'react';
import { BackgroundImage, T } from '.';
import * as Styles from './HomePage.styles';

type PropsType = {};
const HomePage = ({}: PropsType) => {
  return (
    <Styles.HomePageWrapper className="grid-container">
      <div className="box a">
        <BackgroundImage imageKey="image-1">
          <></>
        </BackgroundImage>
      </div>
      <div className="box b">
        <div className="content">
          <h2>
            <T translationKey="home-1-title"></T>
          </h2>
          <T translationKey="home-1-text"></T>
        </div>
      </div>
      <div className="box c">
        <BackgroundImage imageKey="image-2">
          <></>
        </BackgroundImage>
      </div>
      <div className="box d">
        <BackgroundImage imageKey="image-3">
          <></>
        </BackgroundImage>
      </div>
      <div className="box e">
        <div className="content">
          <h2>
            <T translationKey="home-2-title"></T>
          </h2>
          <T translationKey="home-2-text"></T>
        </div>
      </div>
      <div className="box f">
        <BackgroundImage imageKey="image-4">
          <></>
        </BackgroundImage>
      </div>
      <div className="box g">
        <div className="content">
          <h2>
            <T translationKey="home-3-title"></T>
          </h2>
          <T translationKey="home-3-text"></T>
        </div>
      </div>
      <div className="box h">
        <BackgroundImage imageKey="image-5">
          <></>
        </BackgroundImage>
      </div>
      <div className="box i">
        <BackgroundImage imageKey="image-6">
          <></>
        </BackgroundImage>
      </div>
      <div className="box j">
        <BackgroundImage imageKey="image-7">
          <></>
        </BackgroundImage>
      </div>
      <div className="box k">
        <div className="content">
          <h2>
            <T translationKey="home-4-title"></T>
          </h2>
          <T translationKey="home-4-text"></T>
        </div>
      </div>
      <div className="box l">
        <BackgroundImage imageKey="image-8">
          <></>
        </BackgroundImage>
      </div>
      <div className="box m">
        <BackgroundImage imageKey="image-9">
          <></>
        </BackgroundImage>
      </div>
      <div className="box n">
        <BackgroundImage imageKey="image-10">
          <></>
        </BackgroundImage>
      </div>
    </Styles.HomePageWrapper>
  );
};

export default HomePage;
