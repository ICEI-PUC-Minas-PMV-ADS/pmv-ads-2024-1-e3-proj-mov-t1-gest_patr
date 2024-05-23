import AsyncStorage from '@react-native-async-storage/async-storage';

const onRequest = async (url, options) => {
  const token = await AsyncStorage.getItem('eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh');
  if (token) {
    if (!options.headers) {
      options.headers = {};
    }
    options.headers.Authorization = `Bearer ${token}`;
  }
  return { url, options };
};

const fetchWithInterceptor = async (url, options) => {
  const { url: modifiedUrl, options: modifiedOptions } = await onRequest(url, options);
  return fetch(modifiedUrl, modifiedOptions);
};

export default fetchWithInterceptor;
