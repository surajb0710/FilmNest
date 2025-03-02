import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p>Last Updated: March 2025</p>
      <p className="mt-4">
        Welcome to FilmNest! By using our portfolio site, you agree to the
        following terms and conditions.
      </p>
      <h2 className="text-2xl font-semibold mt-4">1. Use of Service</h2>
      <p>
        This portfolio showcases film projects and personal work. You may browse
        the content, but any unauthorized reproduction or commercial use is
        prohibited.
      </p>
      <h2 className="text-2xl font-semibold mt-4">2. Intellectual Property</h2>
      <p>
        All content, including images and descriptions, are the property of
        FilmNest. You may not use them without permission.
      </p>
      <h2 className="text-2xl font-semibold mt-4">3. Contact</h2>
      <p>
        If you have any questions about these Terms, please contact us at
        contact@filmnest.dev.
      </p>
      <Link to="/privacy" className="text-blue-600 mt-4 inline-block">
        View Privacy Policy
      </Link>
    </div>
  );
};

export default TermsOfService;
