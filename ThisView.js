import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

class ThisView extends Component {
    static navigationOptions = {
        title: 'ThisView'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text onPress={() => navigate('ThisView')}>Go to same view</Text>
                <Text onPress={() => navigate('ThatView')}>Go to other view</Text>
            </View>
        );
    }
}

export default ThisView;