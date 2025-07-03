
import { useState, useEffect } from 'react';
import { FirebaseService } from '../services/firebaseService';
import { cvData as defaultCVData } from '../data/cvData';

export const useFirebaseCV = () => {
  const [cvData, setCVData] = useState(defaultCVData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCVData();
  }, []);

  const loadCVData = async () => {
    try {
      setLoading(true);
      const firebaseData = await FirebaseService.getCVData();
      
      if (firebaseData) {
        setCVData(firebaseData);
      } else {
        // If no data in Firebase, upload the default data
        await FirebaseService.uploadCVData();
        setCVData(defaultCVData);
      }
    } catch (err) {
      setError('Failed to load CV data');
      console.error('Error loading CV data:', err);
    } finally {
      setLoading(false);
    }
  };

  const uploadProfileImage = async (base64Image: string) => {
    try {
      setLoading(true);
      
      // Upload image to Firebase Storage
      const imageURL = await FirebaseService.uploadProfileImage(base64Image);
      
      if (imageURL) {
        // Update the image URL in the database
        await FirebaseService.updateProfileImageURL(imageURL);
        
        // Update local state
        setCVData(prev => ({
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            profileImage: imageURL
          }
        }));
        
        return imageURL;
      }
      return null;
    } catch (err) {
      setError('Failed to upload profile image');
      console.error('Error uploading profile image:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    cvData,
    loading,
    error,
    uploadProfileImage,
    reloadData: loadCVData
  };
};
