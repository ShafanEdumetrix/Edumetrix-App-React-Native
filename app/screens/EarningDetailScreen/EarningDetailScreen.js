import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar/Toolbar';

class EarningDetailScreen extends Component {
    constructor(props){
        super(props);
        this.state={
        };
    }


    backPress = () => {
        this.props.navigation.pop(); 
       };

    onDrawerPress=()=>{
        const { navigation } = this.props;
        navigation.openDrawer();
    }

    render() {
        const {item} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Toolbar onDrawerPress={this.onDrawerPress}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.subView}>
                        <Text style={styles.textHead}>Like Counter</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.text}>Total Likes</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.total_likes}</Text>
                        </View>
                    </View>
                    <View style={styles.itemPaidView}>
                        <Text style={styles.text}> Paid Likes</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.paid_likes}</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.text}>Life Time Earning Coin</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.life_time_earning_coins_by_likes}</Text>
                        </View>
                    </View>
                    <View style={styles.itemPaidView}>
                        <Text style={styles.text}>Payable Likes</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.payable_likes}</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.text}>Payable Coins</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.payable_coins}</Text>
                        </View>
                    </View>
                    <View style={styles.subView}>
                        <Text style={styles.textHead}>Referal Counter</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.text}>Total Referals</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.total_refferals}</Text>
                        </View>
                    </View>
                    <View style={styles.itemPaidView}>
                        <Text style={styles.text}>Paid Referals</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.paid_referals}</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.text}>Life Time Earning Coin</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.life_time_earning_coins_by_referrals}</Text>
                        </View>
                    </View>
                    <View style={styles.itemPaidView}>
                        <Text style={styles.text}>Payable Referal</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.payable_refferals}</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.text}>Payable Coins</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.payable_coins}</Text>
                        </View>
                    </View>
                    <View style={styles.subView}>
                        <Text style={styles.textHead}>Daily Login Bonus</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.text}>Total Coins</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.total_coins}</Text>
                        </View>
                    </View>
                    <View style={styles.itemPaidView}>
                        <Text style={styles.text}>Paid Coins</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.paid_coins}</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.text}>Payable Coins</Text>
                        <View style={styles.countView}>
                            <Text style={styles.textLike}>{item.payable_coins}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.backView} onPress={()=>{this.props.navigation.pop()}}>
                        <Text style={styles.backText}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

EarningDetailScreen.propTypes = {
    navigation: PropTypes.func,
    navigateToSignUp: PropTypes.func
};

export default EarningDetailScreen;
