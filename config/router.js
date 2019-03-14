import {createStackNavigator} from "react-navigation";

import HomeScreen from '../screens/HomeScreen';
import CountryPickerScreen from '../screens/CountryPickerScreen';
import CityPickerScreen from '../screens/CityPickerScreen'

export default router = createStackNavigator({
    Home: HomeScreen,
    CountryPicker: CountryPickerScreen,
    CityPicker: CityPickerScreen
  },
  {
    initialRouteName: "Home"
  }
);
