
import React, { useState } from 'react';
import { Upload, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFirebaseCV } from '@/hooks/useFirebaseCV';

const AdminPanel: React.FC = () => {
  const [base64Image, setBase64Image] = useState('');
  const [uploading, setUploading] = useState(false);
  const { uploadProfileImage, reloadData } = useFirebaseCV();

  const handleImageUpload = async () => {
    if (!base64Image.trim()) {
      alert('Please enter a Base64 image string');
      return;
    }

    setUploading(true);
    const imageURL = await uploadProfileImage(base64Image);
    
    if (imageURL) {
      alert('Profile image uploaded successfully!');
      setBase64Image('');
    } else {
      alert('Failed to upload image. Please try again.');
    }
    setUploading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-md">
      <h3 className="text-lg font-semibold mb-4">Admin Panel</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Profile Image (Base64)
          </label>
          <textarea
            value={base64Image}
            onChange={(e) => setBase64Image(e.target.value)}
            placeholder="Enter Base64 encoded image..."
            className="w-full h-32 border rounded px-3 py-2 text-sm"
          />
        </div>
        
        <div className="flex gap-2">
          <Button
            onClick={handleImageUpload}
            disabled={uploading}
            className="flex-1 bg-purple-600 hover:bg-purple-700"
          >
            {uploading ? (
              <RefreshCw className="animate-spin mr-2" size={16} />
            ) : (
              <Upload className="mr-2" size={16} />
            )}
            Upload Image
          </Button>
          
          <Button
            onClick={reloadData}
            variant="outline"
            className="flex-1"
          >
            <RefreshCw className="mr-2" size={16} />
            Reload Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
