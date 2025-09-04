"use client";

function FormHeader({ onCancel, contact }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 px-4 py-6">
      <div className="max-w-2xl mx-auto flex items-center">
        <button
          onClick={onCancel}
          className="text-white hover:text-gray-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1 className="flex-1 text-2xl font-bold text-white text-center">
          {contact ? 'Edit Contact' : 'Add New Contact'}
        </h1>
      </div>
    </div>
  );
}

export default FormHeader;