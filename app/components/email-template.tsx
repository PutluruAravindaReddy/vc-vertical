import * as React from 'react';

export const EmailTemplate = () => (
  <div className="font-sans">
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Computer Vision Lab Newsletter</h2>
      <p className="text-gray-700 mb-4">
        Dear Subscriber,
      </p>
      <p className="text-gray-700 mb-4">
        Thank you for subscribing to the Computer Vision Lab newsletter at SRM University. Here's our latest update:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-800">New Research: Explore our recent advancements in image processing algorithms.</li>
        <li className="text-gray-800">Events: Join us for an upcoming webinar on deep learning in computer vision.</li>
        <li className="text-gray-800">Publications: Read our latest papers on object recognition and scene understanding.</li>
      </ul>
      <p className="text-gray-700 mb-4">
        Stay tuned for more exciting updates from our lab!
      </p>
      <p className="text-gray-700">
        Best regards,<br />
        The Computer Vision Lab Team<br />
        SRM University
      </p>
      <p className="text-sm text-gray-600 mt-4">
        You are receiving this email because you subscribed to the Computer Vision Lab newsletter. To unsubscribe, please click <a href="#" className="text-blue-600 hover:underline">here</a>.
      </p>
    </div>
  </div>
);

