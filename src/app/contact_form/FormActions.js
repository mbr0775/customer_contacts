"use client";

function FormActions({ onCancel }) {
  return (
    <div className="flex gap-4">
      <button
        type="submit"
        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        Save Contact
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
      >
        Cancel
      </button>
    </div>
  );
}

export default FormActions;