import React, { useState } from "react";

const QuestionEditor = ({ question, updateQuestion, removeQuestion }) => {
    const [content, setContent] = useState(question.content);

    const handleContentChange = (e) => {
        const updatedContent = { ...content, text: e.target.value };
        setContent(updatedContent);
        updateQuestion(question.id, { ...question, content: updatedContent });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            updateQuestion(question.id, { ...question, imageUrl: reader.result });
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">{question.type} Question</h3>
            <textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                placeholder="Enter your question text here..."
                value={content.text || ""}
                onChange={handleContentChange}
            ></textarea>
            <label className="block font-medium mb-2">Upload Image (Optional):</label>
            <input
                type="file"
                onChange={handleImageUpload}
                className="block border border-gray-300 rounded-lg p-2 mb-4"
            />
            {question.imageUrl && (
                <div className="mb-4">
                    <img
                        src={question.imageUrl}
                        alt="Question Preview"
                        className="w-full max-h-40 object-cover rounded-lg shadow-sm"
                    />
                </div>
            )}
            <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md"
                onClick={() => removeQuestion(question.id)}
            >
                Remove Question
            </button>
        </div>
    );
};

export default QuestionEditor;
