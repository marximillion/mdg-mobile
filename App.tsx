/**
 * Copyright © 2025 - MJDG
 */

/**
 * Imports
 */
import { Component, ReactNode } from 'react';
// import { NavigableAppContainer } from './app/navigation/NavigableAppContainer';
import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalStyles } from './app/styles/GlobalStyles';
import { REM } from './app/styles/scale';

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
   * TODO-1: Create ScreenContainer (Need to implement SafeArea for consistent screen styling)
   * TODO-2: Set up navigation (NavigableAppContainer & StackParamList)
   * TODO-3: Remove render logic from here and move into its own screen component
   * TODO-4: Configure file formatting (eslint, prettier, custom?)
   * TODO-5: Set up themeing (dark mode, light mode, custom themes?)
   * TODO-6: Android app icons
   * TODO-7: iOS app icons
   * TODO-8: Lottie splash screen animation
   * @returns ReactNode
   */
  public render(): ReactNode {
    return (
      <SafeAreaView style={[GlobalStyles.safeAreaView, styles.safeAreaContainer]}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'black'}
        ></StatusBar>
        <ImageBackground style={styles.bannerContainer} resizeMode='contain' source={require('./app/assets/logo-transparent.png')} />
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.contentTitle}>
              <Text style={styles.h}>H</Text>
              <Text style={styles.a}>A</Text>
              <Text style={styles.p}>P</Text>
              <Text style={styles.p}>P</Text>
              <Text style={styles.y}>Y</Text>
              <Text style={styles.space}> </Text>
              <Text style={styles.b}>B</Text>
              <Text style={styles.i}>I</Text>
              <Text style={styles.r}>R</Text>
              <Text style={styles.t}>T</Text>
              <Text style={styles.h}>H</Text>
              <Text style={styles.d}>D</Text>
              <Text style={styles.a}>A</Text>
              <Text style={styles.y}>Y</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView >
    );
  } // End of render()
} // End of class()
// End of file

// ===================================================================== //
// ====================== <<<<< StyleSheet >>>>> ======================= //
// ===================================================================== //

const styles = StyleSheet.create({
  /**
   * Containers
   */
  safeAreaContainer: {
    backgroundColor: '#f5e1e1'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 1.5 * REM,
    overflow: 'hidden'
  },
  bannerContainer: {
    // backgroundColor: 'beige',
    borderRadius: 1 * REM,
    // borderWidth: 2,
    height: 6 * REM,
    width: '100%',
  },

  /**
   * Text
   */
  contentTitle: {
    backgroundColor: '#0c1b7d',
    borderWidth: 3,
    borderRadius: 1.5 * REM,
    fontSize: 50,
    textAlign: 'center'
  },
  h: {
    color: '#FF6347', // Tomato color
    fontWeight: 'bold',
    fontSize: 45,
  },
  a: {
    color: '#32CD32', // LimeGreen color
    fontSize: 50,
  },
  p: {
    color: '#1E90FF', // DodgerBlue color
    fontSize: 55,
  },
  y: {
    color: '#FFD700', // Gold color
    fontSize: 60,
    fontStyle: 'italic',
  },
  space: {
    fontSize: 40, // Same size for spacing
  },
  b: {
    color: '#8A2BE2', // BlueViolet color
    fontSize: 55,
    fontWeight: '600',
  },
  i: {
    color: '#FF1493', // DeepPink color
    fontSize: 50,
  },
  r: {
    color: '#FF4500', // OrangeRed color
    fontSize: 50,
    fontWeight: 'bold',
  },
  t: {
    color: '#ADFF2F', // GreenYellow color
    fontSize: 55,
  },
  d: {
    color: '#00BFFF', // DeepSkyBlue color
    fontSize: 55,
  },
})