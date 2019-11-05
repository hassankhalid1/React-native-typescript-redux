import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface MovieCardProps {
  data: any;
  deleteItem: () => void;
  editItem: () => void;
}

const MovieCard: React.SFC<MovieCardProps> = props => {
  const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: `${POSTER_PATH}${props.data.poster_path}`}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.nameContainer}>
        <Text>
          <Text style={styles.text}>{props.data.title}</Text>
          <Text style={styles.rating}> {`  ${props.data.vote_average}`}</Text>
        </Text>
        <Text>
          <Text style={styles.date}>{props.data.release_date}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            props.editItem();
          }}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            props.deleteItem();
          }}>
          <Text style={styles.buttonText}>delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieCard;
