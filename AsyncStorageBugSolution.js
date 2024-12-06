import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      console.warn('Data not found for key:', key);
      return null; //Explicitly return null
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null; // Handle errors gracefully
  }
};

export { storeData, getData };