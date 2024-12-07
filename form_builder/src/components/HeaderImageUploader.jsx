import React from "react";

const HeaderImageUploader = ({ setHeaderImage }) => {
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setHeaderImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
                Upload Header Image
            </label>
            <input
                type="file"
                className="border border-gray-300 rounded-lg p-2 w-full"
                onChange={handleImageUpload}
            />
        </div>
    );
};

export default HeaderImageUploader;
