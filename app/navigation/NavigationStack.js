import { createStackNavigator, createDrawerNavigator, createAppContainer,createSwitchNavigator } from 'react-navigation';

import Login from 'app/screens/Login';
import SignUp from 'app/screens/SignUp';
import SignUpDetailsScreen from 'app/screens/SignUpDetailsScreen';
import SignUpImageScreen from 'app/screens/SignUpImageScreen';
import HomeScreen from 'app/screens/HomeScreen';
import EditProfileScreen from 'app/screens/EditProfileScreen';
import EditPostScreen from 'app/screens/EditPostScreen';
import FindFriendsScreen from 'app/screens/FindFriendsScreen';
import ChatScreen from 'app/screens/ChatScreen';
import ChatDetailScreen from 'app/screens/ChatDetailScreen';
import EarningScreen from 'app/screens/EarningScreen';
import EarningDetailScreen from 'app/screens/EarningDetailScreen';
import EarningPaymentDetailsScreen from 'app/screens/EarningPaymentDetailsScreen';
import ProfileScreen from 'app/screens/ProfileScreen';
import ResetPasswordScreen from 'app/screens/ResetPasswordScreen';
import StudentFeedScreen from 'app/screens/StudentFeedScreen';
import DisclaimerScreen from 'app/screens/DisclaimerScreen';
import TermsOfServicesScreen from 'app/screens/TermsOfServicesScreen';
import PrivacyPolicyScreen from 'app/screens/PrivacyPolicyScreen';
import CommentsListScreen from 'app/screens/CommentsListScreen';
import MyHomeScreen from 'app/screens/MyHomeScreen';
import NotificationScreen from 'app/screens/NotificationScreen';
import ProfileListScreen from 'app/screens/ProfileListScreen';
import FollowersListPage from 'app/screens/FollowersListPage';
import FollowingListPage from 'app/screens/FollowingListPage';
import NotificationFollowerScreen from 'app/screens/NotificationFollowerScreen';
import AdminVerificationPendingScreen from 'app/screens/AdminVerificationPendingScreen';
import AboutUsScreen from 'app/screens/AboutUsScreen';
import PostDetailScreen from 'app/screens/PostDetailScreen';
import Metrics from '../config/metrics';
import DrawerComponent from '../components/DrawerComponent';
import PreLoader from 'app/screens/PreLoader';


const DrawerHomeApp = createDrawerNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        EditProfileScreen: {
            screen: EditProfileScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        }, 
        EditPostScreen: {
            screen: EditPostScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        }, 
        FindFriendsScreen: {
            screen: FindFriendsScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        StudentFeedScreen: {
            screen: StudentFeedScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        ChatScreen: {
            screen: ChatScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        ChatDetailScreen: {
            screen: ChatDetailScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        EarningScreen: {
            screen: EarningScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        EarningDetailScreen: {
            screen: EarningDetailScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        EarningPaymentDetailsScreen: {
            screen: EarningPaymentDetailsScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },  
        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        CommentsListScreen: {
            screen: CommentsListScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        MyHomeScreen: {
            screen: MyHomeScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        NotificationScreen: {
            screen: NotificationScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        DisclaimerScreen: {
            screen: DisclaimerScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        TermsOfServicesScreen: {
            screen: TermsOfServicesScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        PrivacyPolicyScreen: {
            screen: PrivacyPolicyScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        ProfileListScreen: {
            screen: ProfileListScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        NotificationFollowerScreen: {
            screen: NotificationFollowerScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        FollowersListPage: {
            screen: FollowersListPage,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        FollowingListPage: {
            screen: FollowingListPage,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        PostDetailScreen: {
            screen: PostDetailScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
    },
    {
        initialRouteName: "HomeScreen",
        drawerWidth: Metrics.screenWidth - 70,
        drawerPosition: 'left',
        contentComponent: DrawerComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }
);

const DrawerStack = createStackNavigator(
    {
        DrawerHomeApp: {
            screen: DrawerHomeApp,
            navigationOptions: { header: null, gesturesEnabled: false }
        }
    }
  );

  const LoginStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        SignUpDetailsScreen: {
            screen: SignUpDetailsScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        SignUpImageScreen: {
            screen: SignUpImageScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        EditProfileScreen: {
            screen: EditProfileScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        ResetPasswordScreen: {
            screen: ResetPasswordScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        DisclaimerScreen: {
            screen: DisclaimerScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        TermsOfServicesScreen: {
            screen: TermsOfServicesScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        PrivacyPolicyScreen: {
            screen: PrivacyPolicyScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        AboutUsScreen: {
            screen: AboutUsScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        AdminVerificationPendingScreen:{
            screen: AdminVerificationPendingScreen,
            navigationOptions: { header: null, gesturesEnabled: false }
        }
    },
  );

  const switchNavigator = createSwitchNavigator(
    {
      PreLoader: PreLoader,
      DrawerStack: DrawerStack,
      Login: LoginStack
    },
    { headerMode: "none", initialRouteName: "PreLoader" }
  );

  const App = createAppContainer(switchNavigator);

  export default App;


