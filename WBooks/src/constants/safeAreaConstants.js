import { StatusBar, Platform } from 'react-native';

const ADDITIONAL_PADDING = 40;
const IOS_STATUS_BAR_HEIGHT = 20;
const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : IOS_STATUS_BAR_HEIGHT;
export const TOP_PADDING = STATUS_BAR_HEIGHT + ADDITIONAL_PADDING;
