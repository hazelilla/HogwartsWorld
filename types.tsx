import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
  OnBoarding: undefined;
  Home: undefined;
  Wizards: undefined;
  Spells: undefined;
  Ingredients: undefined;
};

export type ScreenProp = NativeStackScreenProps<StackParamList>;