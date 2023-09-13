import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput,  Provider, Portal, DatePicker } from 'react-native-paper';

const DatePickerr = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            label="Select Date"
            value={selectedDate ? selectedDate.toLocaleDateString('en-US') : ''}
            onFocus={() => setDatePickerVisible(true)}
          />
        </View>
        <Portal>
          <DatePicker
            visible={isDatePickerVisible}
            onDismiss={() => setDatePickerVisible(false)}
            date={selectedDate ? selectedDate : new Date()}
            onConfirm={(date) => {
              setSelectedDate(date);
              setDatePickerVisible(false);
            }}
          />
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  inputContainer: {
    marginVertical: 10,
  },
});

export default DatePickerr;
