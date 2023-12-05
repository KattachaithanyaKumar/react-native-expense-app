import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

const chartData = [0, 0, 0, 100, 0, 0, 0];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const gotoIncome = () => {
    navigation.navigate("Income");
  };
  const gotoExpense = () => {
    navigation.navigate("Expense");
  };

  console.log(chartData);
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.balanceBox}>
          <Text style={styles.balanceTitle}>Account Balance</Text>
          <Text style={styles.balance}>₹0</Text>
        </View>
        <View style={styles.statBox}>
          <View style={[styles.stat, styles.income]}>
            <View style={styles.icon}>
              <Ionicons name="arrow-down-outline" size={26} color={"#00A86B"} />
            </View>
            <View>
              <Text style={styles.thin}>Income</Text>
              <Text style={styles.bold}>₹0</Text>
            </View>
          </View>
          <View style={[styles.stat, styles.expense]}>
            <View style={styles.icon}>
              <Ionicons name="arrow-up-outline" size={26} color={"#FD3C4A"} />
            </View>
            <View>
              <Text style={styles.thin}>Expence</Text>
              <Text style={styles.bold}>₹0</Text>
            </View>
          </View>
          <Pressable style={styles.button} onPress={toggleModal}>
            <Text style={styles.buttonText}>Add Record</Text>
          </Pressable>
        </View>

        <View style={styles.chart}>
          <LineChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [{ data: chartData }],
            }}
            width={Dimensions.get("window").width}
            height={220}
            yAxisLabel="₹"
            chartConfig={{
              backgroundColor: "#FFF",
              backgroundGradientFrom: "#FFF",
              backgroundGradientTo: "#FFF",
              color: () => "#7F3DFF",
              labelColor: (opacity = 1) => "#91919F",
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#91919F",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <Text style={styles.chartTitle}>This Week</Text>
        </View>
        <View style={styles.blank}></View>
        <Modal isVisible={isVisible} backdropColor="#7F3DFF">
          <View style={styles.modal}>
            <Pressable
              style={[styles.modalButton, styles.income]}
              onPress={gotoIncome}
            >
              <View style={styles.modalIcon}>
                <Ionicons
                  name="arrow-down-outline"
                  size={26}
                  color={"#00A86B"}
                />
              </View>
              <Text style={styles.bold}>Income</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, styles.expense]}
              onPress={gotoExpense}
            >
              <View style={styles.modalIcon}>
                <Ionicons name="arrow-up-outline" size={26} color={"#FD3C4A"} />
              </View>
              <Text style={styles.bold}>Expense</Text>
            </Pressable>
            <Pressable onPress={toggleModal} style={styles.modalCloseButton}>
              <Text style={{ fontWeight: "600", color: "#fff" }}>Cancel</Text>
            </Pressable>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
  },
  balanceBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    paddingBottom: 24,
    gap: 8,
  },
  balanceTitle: {
    fontWeight: "200",
    fontSize: 18,
  },
  balance: {
    fontWeight: "900",
    fontSize: 38,
  },
  statBox: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    paddingBottom: 14,
  },
  stat: {
    width: "85%",
    paddingHorizontal: 18,
    paddingVertical: 18,
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 28,
    elevation: 8,
  },
  income: {
    backgroundColor: "#00A86B",
  },
  expense: {
    backgroundColor: "#FD3C4A",
  },
  icon: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
  },
  thin: {
    fontSize: 14,
    fontWeight: "400",
    color: "#FFF",
  },
  bold: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "900",
  },
  button: {
    backgroundColor: "#7F3DFF",
    padding: 16,
    width: "85%",
    borderRadius: 18,
    elevation: 8,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600",
  },
  chart: {
    marginTop: 16,
  },
  chartTitle: {
    textAlign: "center",
    borderRadius: 16,
  },
  blank: {
    height: 100,
  },
  modal: {
    backgroundColor: "#FFF",
    position: "absolute",
    bottom: 0,
    // height: 100,
    width: "100%",
    borderRadius: 16,
    padding: 12,
    gap: 8,
  },
  modalButton: {
    padding: 18,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalCloseButton: {
    alignItems: "center",
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#7F3DFF",
  },
  modalIcon: {
    backgroundColor: "#FFF",
    padding: 6,
    borderRadius: 8,
  },
});
