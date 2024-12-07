import React from "react";

const FormPreview = ({ headerImage, questions = [] }) => {
    return (
        <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Form Preview</h2>

            {/* Header Image */}
            {headerImage && (
                <div className="mb-4 flex justify-center">
                    <img
                        src={headerImage}
                        alt="Form Header"
                        className="max-w-full h-48 rounded-lg shadow-md object-cover"
                    />
                </div>
            )}

            {/* Questions */}
            {questions.length === 0 ? (
                <p className="text-gray-500 italic text-center">
                    No questions to preview.
                </p>
            ) : (
                questions.map((q) => (
                    <div
                        key={q.id}
                        className="bg-gray-50 border border-gray-300 p-4 rounded-lg shadow-md mb-4"
                    >
                        <h3 className="text-lg font-bold text-gray-800">
                            {q.type} Question
                        </h3>
                        <p className="text-gray-600 mt-2">
                            {q.content.text || "No content provided yet."}
                        </p>
                        {q.imageUrl && (
                            <div className="mt-4 flex justify-center">
                                <img
                                    src={q.imageUrl}
                                    alt="Question"
                                    className="max-w-full h-32 rounded-lg shadow-md object-contain"
                                />
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default FormPreview;
