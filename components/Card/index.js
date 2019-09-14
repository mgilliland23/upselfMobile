import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Animated,
    Easing,
} from 'react-native';

const styles = StyleSheet.create({
    click: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    container: {
        marginTop: 10,
        flex: 1,
    }
});

// let value = false;
showingE = [null, false, false, false, false, false, false, false, false, false, false, false, false]; //state[0] is not considered
move = [0, 0];
moveid = [0, 0];
click = 0;
animate = true;

function checkstatus(values) {
    if (click % 2 == 0) {
        if (move[0] == move[1] && move[0] != 0) {
            console.log("keep open");
            return true;
        }
        else {
            console.log("RESET!!!");
            cleantiles(moveid[0], moveid[1], values);
            return false;
        }
    }
    console.log("keep open");
    return true;
}


function moveupdate(imageUri, id) {
    move.push(imageUri);//this.props.imageUri
    move.shift();
    moveid.push(id);//this.props.id
    moveid.shift();
}

function cleantiles(move0, move1, value) {
    animate = false;
    setTimeout(function () {
        showingE[move0] = false;
        showingE[move1] = false;
        value.action(showingE);
        animate = true;
    }, 300);
}




export default class Card extends Component {

    // static navigationOptions = {
    //     headerStyle: {
    //         backgroundColor: '#6bccf3',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // };


    constructor(props) {
        super(props);
        this.state = {
            showing: false
        };
    }

    render() {

        return (
            <View style={styles.container}>
                {
                    // Pass any View or Component inside the curly bracket.
                    // Here the ? Question Mark represent the ternary operator.

                    (this.props.showme == false) ? (
                        // (state[this.props.imageUri] == false && showing[this.props.imageUri] == false) ? (
                        <TouchableOpacity
                            // onPress={() => this.setState({ isHidden: true })}
                            // onPress={() => alert("test1")}
                            onPress={() => [
                                // this.setState({ showing: true }),
                                (animate == true) ? (
                                    click++ ,
                                    showingE[this.props.id] = true,
                                    this.props.action(showingE),
                                    moveupdate(this.props.imageUri, this.props.id),
                                    console.log(move),
                                    console.log(moveid),
                                    console.log(click),
                                    checkstatus(this.props)
                                ) :
                                    (
                                        null
                                    ),


                                // checkifwin(),
                                // delayaction2(this.props.imageUri, this.props.id).then(function (value) { this.props.action(showingE) }),

                                // delayaction(this.props.imageUri, this.props.id),

                                // this.props.actionTimer(showingE),
                                // .then(function (value) {

                                // })
                                // this.props.action(showingE),
                                // cleantiles(),
                                // this.props.showme = true,
                                // console.log(showingE[this.props.id]),
                                // console.log(showingE),
                                // console.log(this.props.id),
                                // state[this.props.imageUri] == true,
                                // console.log(this.props.imageUri),
                                // console.log(state[this.props.imageUri]),
                                // console.log(move),
                                // console.log(moveid),
                                // console.log(click),
                                // checktiles(this.props.imageUri)
                                // console.log(this)
                                // console.log(state),
                                // console.log(showing)
                                // matchmsg(),
                                // cleantiles(),
                                // checktiles(),
                                // (click % 2 == 0) ? this.props.action(showingE, true) : this.props.action(showingE, false),
                                // console.log(showingE),
                                // console.log(this),
                                // this.forceUpdate(),
                            ]}
                            // onPress={() =>
                            //     this.setState({
                            //         isHidden: false
                            //     })
                            // }
                            // onPress={() => this.setState({ isHidden: true })}
                            // onPress={() => this.props.action(true)}
                            style={styles.click} >
                            <Image
                                style={[styles.click]}
                                source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                    )
                        :
                        (
                            <TouchableOpacity
                                // onPress={() => this.setState({ isHidden: false })}
                                // onPress={() => alert("test2")}
                                // onPress={() => value = false}
                                onPress={() => [
                                    // this.setState({ showing: false }),
                                    // showingE[this.props.id] = false,
                                    // console.log(showingE),
                                    // this.forceUpdate()
                                ]}
                                // onPress={() => this.setState({ isHidden: false })}
                                // onPress={() => this.props.action(false)}
                                style={styles.click}>
                                <Image
                                    style={[styles.click]}
                                    source={this.props.imageUri}
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>
                        )
                }

            </View>
        )


    }

}
