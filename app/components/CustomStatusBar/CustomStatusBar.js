import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const CustomStatusBar = props => {
    return (
        <View
            style={[
                styles.statusBar,
                { backgroundColor: props.backgroundColor }
            ]}
        >
            <StatusBar translucent barStyle={props.barStyle} {...props} />
        </View>
    );
};

export default CustomStatusBar;

CustomStatusBar.propTypes = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.string
};

CustomStatusBar.defaultProps = {
    barStyle: 'light-content'
};
