// @flow
export const getGreatingTimeText = (): string => {
  const hours = new Date().getHours();
  console.log('hours ===', hours);
  if (hours >= 5 && hours < 12) {
    return 'Good Morning';
  } else if (hours >= 12 && hours < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};
