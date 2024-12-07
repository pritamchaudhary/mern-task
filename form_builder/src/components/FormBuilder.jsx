import React, { useState } from "react";
import QuestionEditor from "./QuestionEditor";
import HeaderImageUploader from "./HeaderImageUploader";
import FormPreview from "./FormPreview";
import axios from "axios";

const FormBuilder = () => {
    const [questions, setQuestions] = useState([]);
    const [headerImage, setHeaderImage] = useState("");
    const [formTitle, setFormTitle] = useState("");

    const addQuestion = (type) => {
        const newQuestion = { id: Date.now(), type, content: {}, imageUrl: "" };
        setQuestions([...questions, newQuestion]);
    };

    const updateQuestion = (id, updatedQuestion) => {
        setQuestions(questions.map((q) => (q.id === id ? updatedQuestion : q)));
    };

    const removeQuestion = (id) => {
        setQuestions(questions.filter((q) => q.id !== id));
    };

    const handleSubmit = async () => {
        const formData = {
            title: formTitle,
            headerImage,
            questions,
        };

        try {
            const response = await axios.post("http://localhost:5000/api/forms", formData);
            alert("Form submitted successfully!");
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Please try again.");
        }
    };

    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen py-12 px-6">
            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
                {/* Header */}
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                    🛠️ Create Your Form
                </h1>

                {/* Form Title */}
                <div className="mb-8">
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                        Form Title
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter a title for your form..."
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                    />
                </div>

                {/* Header Image Uploader */}
                <div className="mb-6">
                    <HeaderImageUploader setHeaderImage={setHeaderImage} />
                    {headerImage && (
                        <div className="mt-4 rounded-md overflow-hidden shadow-md">
                            <img
                                src={headerImage}
                                alt="Header Preview"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    )}
                </div>

                {/* Add Question Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg transition-all"
                        onClick={() => addQuestion("Categorize")}
                    >
                        Add Categorize Question
                    </button>
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-lg transition-all"
                        onClick={() => addQuestion("Cloze")}
                    >
                        Add Cloze Question
                    </button>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg shadow-lg transition-all"
                        onClick={() => addQuestion("Comprehension")}
                    >
                        Add Comprehension Question
                    </button>
                </div>

                {/* Questions List */}
                <div className="space-y-6">
                    {questions.length === 0 ? (
                        <p className="text-center text-gray-500 italic">
                            No questions added yet.
                        </p>
                    ) : (
                        questions.map((question) => (
                            <div
                                key={question.id}
                                className="border border-gray-300 rounded-lg p-6 shadow-md bg-gray-50"
                            >
                                <QuestionEditor
                                    question={question}
                                    updateQuestion={updateQuestion}
                                    removeQuestion={removeQuestion}
                                />
                            </div>
                        ))
                    )}
                </div>

                {/* Submit Button */}
                <div className="mt-10">
                    <button
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg shadow-md text-lg transition-all"
                        onClick={handleSubmit}
                    >
                        🚀 Submit Form
                    </button>
                </div>

                {/* Form Preview */}
                <FormPreview headerImage={headerImage} questions={questions} />
            </div>
        </div>
    );
};

export default FormBuilder;
