import React from 'react';
import Home from "./Home/Home";
import About from "./About/About";
import Book from "./Book/Book";

export type ScreenProps = {
  screen_name: string;
};

export type Screen = {
  component: React.FC<ScreenProps>;
  alreadyRendered: boolean;
  props: ScreenProps;
};

export const TOTAL_SCREENS: Screen[] = [
  {
    component: Home,
    alreadyRendered: false,
    props: {
      screen_name: "Home",
    },
  },
  {
    component: About,
    alreadyRendered: false,
    props: {
      screen_name: "About",
    },
  },
  {
    component: Book,
    alreadyRendered: false,
    props: {
      screen_name: "Book",
    },
  },
];

export const GET_SCREEN_INDEX = (screen_name: string) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].props.screen_name === screen_name) return i;
  }

  return -1;
};
