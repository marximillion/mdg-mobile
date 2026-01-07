/**
 * Copyright (c) MJDG 2025.
 */

/**
 * Imports
 */
import Button from '../common/Button';
import { Component, ReactNode } from 'react';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../assets/images';
import { RouteProp } from '@react-navigation/native';
import ScreenContainer from '../common/ScreenContainer';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/StackParamList';
import { REM } from '../../styles/scale';

/**
 * Props
 */
interface Props {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
  route: RouteProp<StackParamList, 'Home'>;
}

export interface HomeProps {
  colorScheme?: string;
}

/**
 * State
 */
interface State { }

export default class HomeScreen extends Component<Props, State> {
  /**
   * Constructor
   *
   * @param props
   */
  constructor(props: Props) {
    console.log('HomeScreen::constructor');

    super(props);

    this.state = {};
  } // End of constructor()

  /**
   * on Mount
   */
  public componentDidMount(): void {
    console.log('HomeScreen::componentDidMount');
  } // End of componentDidMount()

  /**
   * on UnMount
   */
  public componentWillUnmount(): void {
    console.log('HomeScreen::componentWillUnmount');
  } // End of componentWillMount()

  // ===================================================================== //
  // ================== <<<<< Navigation Methods >>>>> =================== //
  // ===================================================================== //

  /**
   * Navigation: Info
   * - Navigate to info screen
   */
  private navigateInfo = () => {
    console.log('HomeScreen::navigateInfo');
    const { navigation } = this.props;
    navigation.navigate('Info');
  }; // End of navigateInfo()

  /**
   * Navigation: Practice
   * - Navigate to practice screen
   */
  private navigatePractice = () => {
    console.log('HomeScreen::navigatePractice');
    const { navigation } = this.props;
    navigation.navigate('Practice');
  }; // End of navigatePractice()

  /**
   * Navigation: Movie
   * - Navigate to movie screen
   */
  private navigateMovie = () => {
    console.log('HomeScreen::navigateMovie');
    const { navigation } = this.props;
    navigation.navigate('Movie');
  }; // End of navigateMovie()

  /**
   * Navigation: Game Splash
   * - Navigate to game splash screen
   */
  private navigateGameSplash = () => {
    console.log('HomeScreen::navigateGameSplash');
    const { navigation } = this.props;
    navigation.navigate('GameSplash');
  }; // End of navigateGameSplash()

  // ======================================================================= //
  // ===================== <<<<< Render Methods >>>>> ====================== //
  // ======================================================================= //

  /**
   * Render: Home Screen
   *
   * @returns ReactNode
   */
  public render(): ReactNode {
    console.log('HomeScreen::render');
    return (
      <ScreenContainer withImageBackground={true}>
        <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <ImageBackground style={styles.bannerContainer} resizeMode='contain' source={images.logo_v1} />
          <ImageBackground style={styles.bannerContainer} resizeMode='contain' source={images.logo_v2} />
          <ImageBackground style={styles.bannerContainer} resizeMode='contain' source={images.logo_v3} />

          <Button
            styleText={'sm'}
            title={'WELCOME'}
            type={'primary'}
            onPress={this.navigateInfo}
          />
          <Button
            styleText={'std'}
            title={'Practice Screen'}
            type={'wide'}
            onPress={this.navigatePractice}
          />
          <Button
            styleText={'lg'}
            title={'Movie Screen'}
            type={'text-only'}
            onPress={this.navigateMovie}
          />
          <Button
            styleText={'lg'}
            title={'2025 Barangay Christmas Feud'}
            type={'wide'}
            onPress={this.navigateGameSplash}
            style={styles.familyFeudButton}
          />

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

          {/* TODO: Create an ImageTile (withOptions if its pressable) */}
          <View style={styles.imageTile}>
            <Image
              source={images.mdg_bald}
              style={GlobalStyles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.imageTile}>
            <Image
              source={images.ec_yellow_comic}
              style={GlobalStyles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.imageTile}>
            <Image
              source={images.mdg_bald}
              style={GlobalStyles.image}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </ScreenContainer>
    );
  } // End of render()
} // End of class

// ======================================================================= //
// ===================== <<<<< StyleSheets >>>>> ====================== //
// ======================================================================= //

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 5,
    // flex: 1,
    // flexGrow: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  bannerContainer: {
    // backgroundColor: 'beige',
    borderRadius: 1 * REM,
    // borderWidth: 2,
    height: 8 * REM,
    width: '100%',
  },

  imageTile: {
    // backgroundColor: 'white',
    borderRadius: 50,
    // borderWidth: 5,
    height: 500,
    marginHorizontal: 20,
    marginVertical: 5,
    overflow: 'hidden',
  },
  familyFeudButton: {
    backgroundColor: 'red',
    borderWidth: 3,
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
});
