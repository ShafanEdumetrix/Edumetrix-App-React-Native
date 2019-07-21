import React, { Component } from 'react';
import { View, Text, TouchableOpacity,FlatList } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar/Toolbar';

class EarningPaymentDetailsScreen extends Component {
    constructor(props){
        super(props);
        this.state={
        };
    }

    backPress = () => {
        this.props.navigation.goBack(this.props.navigation.state.key);
    };


    onDrawerPress=()=>{
        const { navigation } = this.props;
        navigation.openDrawer();
    }


    ListHeaderComponent=()=>{
        return(
            <View style={styles.headingView}>
                <Text style={styles.text}>Date</Text>
                <Text style={styles.text}>Amount(EMC)</Text>
                <Text style={styles.text}>Status</Text>
            </View>
        )
    }


renderItem=({item})=>{
    return(
        <View style={item.status_name=='Pending'?styles.pendingView:styles.payedView}>
        <Text style={styles.text}>{item.added_date}</Text>
        <Text style={styles.text}>{item.amount}</Text>
        <Text style={item.status_name=='Pending'?styles.pendingText:styles.payedText}>{item.status_name}</Text>
    </View>
    )
}


    render() {
        return (
            <View style={styles.container}>
                <Toolbar onDrawerPress={this.onDrawerPress}/>
                {this.props.data.length ==0?
                    <View style={styles.loader}>
                    <Text style={styles.noData}>NO DATA AVAILABLE</Text>
                    </View>
                 :<FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    extraData={this.state}
                    keyExtractor={(item, index) => item + index}
                    ListHeaderComponent={this.ListHeaderComponent}
                    showsVerticalScrollIndicator={false}
                    sh
                />}
                <TouchableOpacity style={styles.backView} onPress={this.backPress}>
                    <Text style={styles.backText}>
                            Back
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

EarningPaymentDetailsScreen.propTypes = {
    navigation: PropTypes.func,
    navigateToSignUp: PropTypes.func
};

export default EarningPaymentDetailsScreen;
