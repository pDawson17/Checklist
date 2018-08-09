import React, { Component } from "react";
import {
  Input,
  Background,
  Section,
  IconButton,
  RainbowButton
} from "../components/common";
import { Text, FlatList, AsyncStorage, View } from "react-native";
export default class HomePage extends Component {
  state = {
    temp: "",
    newInput: false,
    id: 1,
    data: []
  };

  componentDidMount() {
    this.retrievedData();
  }
  componentDidUpdate() {
    //save notes on update
    this.saveData();
  }

  async retrievedData() {
    try {
      const retrievedData = await AsyncStorage.getItem("1234");
      const item = JSON.parse(retrievedData);
      const id = await AsyncStorage.getItem("NUM_ELEM");
      this.setState({ data: item, id: id });
      //return item;
    } catch (error) {
      console.log("error");
    }
  }
  async saveData() {
    if (!(this.state.data === null)) {
      try {
        await AsyncStorage.setItem("1234", JSON.stringify(this.state.data));
        await AsyncStorage.setItem("NUM_ELEM", this.state.id);
      } catch (error) {
        console.log("error 2");
      }
    }
  }

  deleteNote(item) {
    let list = this.state.data;
    let index = -1;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === item.id) {
        index = i;
        break;
      }
    }

    list.splice(index, 1);

    this.setState({
      data: list,
      id: this.state.id
    });
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.itemStyle}>
        <IconButton
          iconName="check"
          size={40}
          onPress={() => this.deleteNote(item)}
        />
        <Text style={styles.itemTextStyle}> {item.value} </Text>
        <Text style={{ color: "#DFC97A", fontSize: 20 }}>
          {item.date.substring(4, 10)}
        </Text>
      </View>
    );
  };
  //10.0.1.1:8081
  displayInput = () => {
    if (this.state.newInput) {
      return (
        <Input
          value={this.state.temp}
          onChangeText={value => this.setState({ temp: value })}
          onPress={() =>
            this.setState({
              newInput: false,
              id: this.state.id + 1,
              data: this.state.data.concat([
                {
                  id: String(this.state.id),
                  value: this.state.temp,
                  date: Date()
                }
              ])
            })
          }
        />
      );
    }
  };

  render() {
    return (
      <Background>
        <Section>
          <Text style={styles.headerStyle}>Checklist</Text>
        </Section>
        <Section style={{ flex: 2 }}>
          <FlatList
            style={styles.contentStyle}
            renderItem={this._renderItem}
            data={this.state.data}
            keyExtractor={item => item.id}
            extraData={this.state}
          />
        </Section>
        {this.displayInput()}
        <Section>
          <IconButton
            iconName="plus-square"
            size={80}
            onPress={() => this.setState({ newInput: true, temp: "" })}
          />
        </Section>
      </Background>
    );
  }
}

const styles = {
  headerStyle: {
    backgroundColor: "#80B2BE",
    color: "#262A2C",
    fontSize: 40,
    borderRadius: 100,
    padding: 20
  },
  contentStyle: {
    alignSelf: "stretch",
    flex: 2
  },
  itemTextStyle: {
    fontSize: 40,
    color: "white"
  },
  itemStyle: {
    flexDirection: "row",
    backgroundColor: "#707070",
    borderBottomColor: "#262A2C",
    borderBottomWidth: 1.5
  }
};
