import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './CustomSkeletonRecipe.styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const CustomSkeletonRecipe = () => {
  console.log('NhiNTY5 CustomSkeletonRecipe RENDER');
  return (
    <SkeletonPlaceholder>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.setItemNews}>
          <Image style={styles.imageNews} />
          <Text style={styles.itemName}></Text>
          <Text style={styles.itemPrice}></Text>
        </View>
        <View style={styles.setItemNews}>
          <Image style={styles.imageNews} />
          <Text style={styles.itemName}></Text>
          <Text style={styles.itemPrice}></Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.setItemNews}>
          <Image style={styles.imageNews} />
          <Text style={styles.itemName}></Text>
          <Text style={styles.itemPrice}></Text>
        </View>
        <View style={styles.setItemNews}>
          <Image style={styles.imageNews} />
          <Text style={styles.itemName}></Text>
          <Text style={styles.itemPrice}></Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.setItemNews}>
          <Image style={styles.imageNews} />
          <Text style={styles.itemName}></Text>
          <Text style={styles.itemPrice}></Text>
        </View>
        <View style={styles.setItemNews}>
          <Image style={styles.imageNews} />
          <Text style={styles.itemName}></Text>
          <Text style={styles.itemPrice}></Text>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default CustomSkeletonRecipe;
