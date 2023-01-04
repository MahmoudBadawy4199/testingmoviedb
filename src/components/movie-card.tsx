//React
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// Libraries
import { moderateScale, verticalScale } from 'react-native-size-matters';
// API
import { getImageLink } from '../api/TheMovieDB';
// Types
import { MovieDetailsType } from '../types';
// Utils
import Colors from '../utils/Colors';

type CardPropsType = {
    movieItem: MovieDetailsType;
    onCardClick: (movieID: number) => void;
};

const MovieCard = ({ movieItem, onCardClick }: CardPropsType) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => onCardClick(movieItem.id)}
            style={styles.cardContainerStyle}
        >
            {/* Background Poster Image */}
            <Image
                source={{ uri: getImageLink(movieItem.poster_path) }}
                style={styles.imageStyle}
            />

            {/* Rating Container */}
            <View style={styles.ratingContainerStyle}>
                {/* Rating Text */}
                <Text style={styles.ratingTextStyle}>{movieItem.vote_average}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MovieCard;

const styles = StyleSheet.create({
    cardContainerStyle: {
        height: verticalScale(300),
        width: '48%',
        borderRadius: moderateScale(10),
        overflow: 'hidden',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'stretch',
        zIndex: -2,
    },
    ratingContainerStyle: {
        width: moderateScale(40),
        height: verticalScale(40),
        backgroundColor: Colors.black,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: moderateScale(10),
    },
    ratingTextStyle: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: Colors.accent,
    },
});
