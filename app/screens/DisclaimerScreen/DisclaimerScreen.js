import React, { Component } from 'react';
import { ScrollView, Text,TouchableOpacity ,View,SafeAreaView} from 'react-native';
import styles from './styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppStyles from '../../config/styles';

class DisclaimerScreen extends Component {
    constructor(props){
        super(props);
        this.state={
        };
    }

    backPress = () => {
        this.props.navigation.goBack(this.props.navigation.state.key);
    };


      render() {        
          return (
              <SafeAreaView>
              <ScrollView style={styles.container}>
                <CustomStatusBar backgroundColor={AppStyles.color.COLOR_TRANSP}barStyle="dark-content" />
                <View style={styles.heading}>
                <Text style={styles.headingText}>Disclaimer</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                    The information contained in this website is for general information purposes only. The information is provided by EduMetrix.io and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.{"\n"}
                    In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arise out of, or in connection with, the use of this website.{"\n"}
                    Through this website you are able to link to other websites which are not under the control of EduMetrix.io. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.{"\n"}
                    Every effort is made to keep the website up and running smoothly. However, EduMetrix.io takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.{"\n"}
                    EduMetrix.io is located at –{"\n"}
                    Address: 63,4th cross,Vysya Bank Coloney, Arekere, Bangalore, 560068{"\n"}
                    Email: support@edumetrix.io{"\n"}
                    Website: www.eduemtrix.io
                 </Text>
                 </View>
                 <TouchableOpacity style={styles.saveView} 
                    onPress={this.backPress}>
                        <Text style={styles.saveText}>BACK</Text>
                    </TouchableOpacity>
              </ScrollView>
              </SafeAreaView>
          );
      }
}


export default DisclaimerScreen;
