"use client";

function home_header({ totalContacts = 0, activeContacts = 0, corporateContacts = 0, weeklyContacts = 0, onAddContact, onViewContacts }) {
  return (
    <div className="relative min-h-[500px] bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-32 h-32 rounded-full border-2 border-white"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border-2 border-white"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full border border-white"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-16">
        {/* Badge */}
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm font-medium">Professional Contact Management</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Business<br />
          Contact Hub
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Instantly capture and manage every business connection. From that
          perfect tea shop to corporate partnerships - never lose a valuable
          contact again.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            onClick={onAddContact}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Contact
          </button>
          <button
            onClick={onViewContacts}
            className="bg-transparent hover:bg-white/10 text-white border border-white/50 hover:border-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View All Contacts
          </button>
        </div>
      </div>
    </div>
  );
}

export default home_header;