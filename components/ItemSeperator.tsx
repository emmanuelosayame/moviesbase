import { View, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

//const setWidth = (w) => (width / 100) * w;

const ItemSeperator = ({ height, width }: any) => {
  return <View style={{ width: width, height, backgroundColor: 'red' }} />;
};

ItemSeperator.defaultProps = {
  height: 0,
  width: 0,
};

export default ItemSeperator;
