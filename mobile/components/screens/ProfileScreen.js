import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBackground} />
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('./Images/profilepic.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName} onPress={() => alert('Profile!!')}>
          STEVEN HERE
        </Text>
      </View>

      <View style={styles.recentlyViewedContainer}>
        <Text style={styles.recentlyViewedTitle}>Recently Viewed Bathroom</Text>
      </View>

      <View style={styles.settingContainer}><TouchableOpacity>
        <Text style={styles.settingTitle}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registeredContainer}>
        <Text style={styles.registeredTitle}>Registered Date: 04/04/2023</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#743EA7',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -70,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  profileName: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
  },
  recentlyViewedContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '90%',
    padding: 20,
    paddingBottom: 10,
    shadowOpacity: 0.8,
    shadowColor: '#743EA7',
    borderRadius: 10,
    elevation: 15,
    marginTop: 20,
    marginBottom: 40,
  },
  recentlyViewedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  settingContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '90%',
    padding: 20,
    paddingBottom: 10,
    shadowOpacity: 0.8,
    shadowColor: '#743EA7',
    borderRadius: 10,
    elevation: 15,
    marginTop: 20,
    marginBottom: 40,
  },
  settingTitle: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    padding: 20,
  },
  registeredContainer: {
    alignItems: 'center',
  },
  registeredTitle: {
    fontSize: 20,
    padding: 20,
  },
});

export default ProfileScreen;
