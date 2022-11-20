import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
import { RidesBackground } from "../../features/restaurants/components/rides.styles";
import { RidesContainer } from "../../features/restaurants/components/rides.styles";
import { RidesButton } from "../../features/restaurants/components/rides.styles";
import { Spacer } from "../../components/spacer/spacer.component";
import { List, Avatar  } from "react-native-paper";
// import {x  reateStackNavigator();

export const RestaurantsNavigator = () => {

 

  return (
    <RidesBackground>


<SafeArea>
<RidesContainer>
      <List.Section>
      <RidesButton
            mode="contained"
            // onPress={() => navigation.navigate("Login")}
        >
            One-off ride
        </RidesButton>
        <Spacer size="large">
        <RidesButton
            mode="contained"
            // onPress={() => navigation.navigate("Login")}
        >
            Schedule a ride
        </RidesButton>
        </Spacer>
        <Spacer size="large">
        <RidesButton
            mode="contained"
            // onPress={() => navigation.navigate("Rides")}
        >
            Rides viewer
        </RidesButton>
        </Spacer>
        {/* <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        /> */}
      </List.Section>
      </RidesContainer> 
    </SafeArea>



      {/* <RidesContainer>
        <RidesButton
            mode="contained"
            // onPress={() => navigation.navigate("Login")}
        >
            Create a ride
        </RidesButton>
        <Spacer size="large">
        <RidesButton
            mode="contained"
            // onPress={() => navigation.navigate("Login")}
        >
            Schedule a ride
        </RidesButton>
        </Spacer>
      </RidesContainer> */}

    </RidesBackground>



    // <RestaurantStack.Navigator
    //   headerMode="none"
    //   screenOptions={{
    //     ...TransitionPresets.ModalPresentationIOS,
    //   }}
    // >
    //   <RestaurantStack.Screen
    //     name="Restaurants"
    //     component={RestaurantsScreen}
    //   />
    //   <RestaurantStack.Screen
    //     name="RestaurantDetail"
    //     component={RestaurantDetailScreen}
    //   />
    // </RestaurantStack.Navigator>
  );
};