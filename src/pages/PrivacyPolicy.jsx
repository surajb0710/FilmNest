import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>Last Updated: March 2025</p>
      <p className="mt-4">
        Your privacy is important to us. This policy explains how we handle any
        data collected.
      </p>
      <h2 className="text-2xl font-semibold mt-4">1. Information We Collect</h2>
      <p>
        FilmNest does not actively collect user data. However, analytics tools
        may track general usage patterns.
      </p>
      <h2 className="text-2xl font-semibold mt-4">2. How We Use Information</h2>
      <p>
        Any data collected is used solely for improving the portfolio
        experience.
      </p>
      <h2 className="text-2xl font-semibold mt-4">3. Contact</h2>
      <p>For privacy-related inquiries, reach out to contact@filmnest.dev.</p>
      <Link to="/terms" className="text-blue-600 mt-4 inline-block">
        View Terms of Service
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
