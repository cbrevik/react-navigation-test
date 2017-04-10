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

class ThatView extends Component {
    static navigationOptions = {
        title: 'ThatView'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text onPress={() => navigate('ThisView')}>Go to other view</Text>
            </View>
        );
    }
}

export default ThatView;