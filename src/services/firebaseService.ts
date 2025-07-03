
import { ref, set, get } from 'firebase/database';
import { ref as storageRef, uploadString, getDownloadURL } from 'firebase/storage';
import { database, storage } from '../lib/firebase';
import { cvData } from '../data/cvData';

export class FirebaseService {
  // Upload CV data to Firebase Realtime Database
  static async uploadCVData() {
    try {
      const cvRef = ref(database, 'cvData');
      await set(cvRef, cvData);
      console.log('CV data uploaded successfully');
      return true;
    } catch (error) {
      console.error('Error uploading CV data:', error);
      return false;
    }
  }

  // Get CV data from Firebase Realtime Database
  static async getCVData() {
    try {
      const cvRef = ref(database, 'cvData');
      const snapshot = await get(cvRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No CV data found');
        return null;
      }
    } catch (error) {
      console.error('Error getting CV data:', error);
      return null;
    }
  }

  // Upload profile image as Base64 to Firebase Storage
  static async uploadProfileImage(base64Image: string, fileName: string = 'profile-image.jpg') {
    try {
      const imageRef = storageRef(storage, `images/${fileName}`);
      
      // Upload the Base64 string
      const snapshot = await uploadString(imageRef, base64Image, 'base64');
      
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      console.log('Image uploaded successfully. Download URL:', downloadURL);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  }

  // Update profile image URL in database
  static async updateProfileImageURL(imageURL: string) {
    try {
      const profileImageRef = ref(database, 'cvData/personalInfo/profileImage');
      await set(profileImageRef, imageURL);
      console.log('Profile image URL updated successfully');
      return true;
    } catch (error) {
      console.error('Error updating profile image URL:', error);
      return false;
    }
  }
}
