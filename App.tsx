/**
 * Copyright © 2025 - MJDG
 */

/**
 * Imports
 */
import { Component, ReactNode } from 'react';
import React from 'react';
import { LogBox, StatusBar, StyleSheet } from 'react-native';
import { REM } from './app/styles/scale';
import { NavigableAppContainer } from './app/navigation/NavigableAppContainer';

/**
 * Props
 */
interface Props { }

/**
 * State
 */
interface State { }


/**
 * App Screen
 */
export default class App extends Component<Props, State> {
  /**
   * Constructor
   * @param props
   */
  constructor(props: Props) {
    super(props);

    console.log('App::Constructor');

    LogBox.ignoreLogs(['InteractionManager has been deprecated']);
  } // End of constructor()

  /**
   * on Mount
   */
  public componentDidMount() {
    console.log('App::componentDidMount');
  } // End of componentDidMount()

  /**
   * on UnMount
   */
  public componentWillUnmount() {
    console.log('App::componentWillUnmount');
  } // End of componentWillUnmount()

  // ===================================================================== //
  // ==================== <<<<< Render Methods >>>>> ===================== //
  // ===================================================================== //

  /**
   * Render: Main
   * TODO-4: Configure file formatting (eslint, prettier, custom?)
   * TODO-5: Set up themeing (dark mode, light mode, custom themes?)
   * TODO-6: Android app icons
   * TODO-7: iOS app icons
   * TODO-8: Lottie splash screen animation
   * TODO-9: Update copyright to 2026
   * @returns ReactNode
   */
  public render(): ReactNode {
    return (
      <>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'black'}></StatusBar>
        <NavigableAppContainer />
      </>
    );
  } // End of render()
} // End of class()
// End of file