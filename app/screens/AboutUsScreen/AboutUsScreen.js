import React, { Component } from 'react';
import { ScrollView, Text,TouchableOpacity ,View,SafeAreaView} from 'react-native';
import styles from './styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppStyles from '../../config/styles';

class AboutUsScreen extends Component {
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
                <Text style={styles.headingText}>About Us</Text>
                <Text style={styles.headingText}>Overview</Text>
                
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                  With an aim to help the requirements of students towards knowledge gain by creating a decentralized EduMetrix System. This is done by using the advantages provided by the architecture of a closed decentralized ecosystem. We at EduMetrix will ensure effective communication and interaction between them. Through this method, we will help connect Students, Project innovation, and Subject Experts.
                 </Text>
                 </View>
                 <View style={styles.heading}>
                <Text style={styles.headingText}>Advisors</Text> 
                <Text style={styles.headingText}>Jishnu Chandran</Text>  
                <Text style={styles.headingText}>GLOBAL MARKETING ADVSIOR </Text>               
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                  Jishnu Chandran is a world renowned marketer and an advanced crypto advisor and investor. With more than 3 years of experience in digital marketing Jishnu Chandran has become an expert at driving growth in any business, especially in blockchain related ventures.
                </Text>
                 </View>
                 <View style={styles.heading}>
                <Text style={styles.headingText}>Suchismita Priyadarshinee</Text>  
                <Text style={styles.headingText}>GLOBAL MARKETING ADVSIOR </Text>               
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                  Suchismita Priyadarshinee is having more than 4 years of solid experience in the Analysis, Design and Development of Blockchain Technology Projects. Strong technical background mixed with excellent analytical skills made her one of the top crypto advisor in US.
                </Text>
                 </View>
                 <View style={styles.heading}>
                <Text style={styles.headingText}>Palakondarayudu Uppu</Text>  
                <Text style={styles.headingText}>GLOBAL MARKETING ADVSIOR </Text>               
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                  Palakondarayudu Uppu have morethan 2 years of experience in blockchain technologies cryptocurrency investments, ICO, hyperledger fabric,Blockchain as Platform services. 4 years of experience in IT industry working on web development, mobile development.
                  </Text>
                 </View>
                 <View style={styles.heading}>
                <Text style={styles.headingText}>Rishabh Anand</Text>  
                <Text style={styles.headingText}>GLOBAL MARKETING ADVSIOR </Text>               
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                  Rishabh Anand is known to be the youngest cryptocurrency miner in India, starting to mine at the age of 16. He has diversified skills in the blockchain, investment, finance & tech sector. He is known countrywide for his contributions to the initial blockchain projects that emerged in the country. He has worked with all of the first, top & most successful blockchain projects from India, as well as with top marketing startups in the country.
                </Text>
                 </View>
                 <View style={styles.heading}>
                <Text style={styles.headingText}>Fahad PK</Text>  
                <Text style={styles.headingText}>INSTITUTIONAL INVESTMENT ADVISOR</Text>               
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                  Fahad PK is well known Investor and Investment advisor in Kuwait, KSA and other GCC Countries. He owns multiple business across GCC. He has done Multi Million Fund raises for retail sector. 10 years of industrial experience in investment market made him get recognised all over Middle East.                </Text>
                 </View>
                 <View style={styles.heading}>
                <Text style={styles.headingText}>Team</Text>
                <Text style={styles.headingText}>Muhammed Shafan</Text>
                <Text style={styles.headingText}>FOUNDER & CHEIF EXECUTIVE OFFICER</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                  Muhammed Shafan is a serial entrepreneur and Founder & Cheif Executive Officer of EduMetrix, founder and renowned crypto investment advisor. He founded and launched another successful company Bidspire in the past. Prior to that he mastered the financial industry through high ranked jobs for close to a half decade. Muhammed Shafan is considered one of the top advisors for the blockchain industry from India.
                </Text>
                 </View>
                 <View style={styles.heading}>
                <Text style={styles.headingText}>Vishnu Chandran</Text>
                <Text style={styles.headingText}>CHEIF OPERATIONS OFFICER</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                  Vishnu Chandran is an entrepreneur & Cheif Operations Officer of EduMetrix, He leads the customer care team and overlooks support quality and customer satisfaction at all stages of the process. He has a history in the investment banking industry and excels in many sectors. His vast knowledge enables him to combine knowledge from all the departments.
                </Text>
                 </View>
                 <View style={styles.heading}>
                <Text style={styles.headingText}>Mounika Thumati</Text>
                <Text style={styles.headingText}>CHIEF TECHNICAL OFFICER</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                  Mounika Thumati is the technical leader at SoftTech. She has more than 3 years experience of building and leading effective development teams (up to 50 developers). She developed successful proven high load projects with multi-million daily active audience. She is also a crypto expert with more than 2 years of experience in blockchain.
                </Text>
                 </View>
                 <View style={styles.heading}>
                <Text style={styles.headingText}>Shruti Kodilkar</Text>
                <Text style={styles.headingText}>CHIEF MARKETING OFFICER
</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>
                  Shruti Kodilkar is the marketing leader at Croma. She is one of the brightest minds in marketing who helped turn Assetz Properties into one of the biggest player on the market.  Her savvy technical knowledge combined with her natural creative instinct has lead to measurable results which prove her abilities.                </Text>
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


export default AboutUsScreen;
