import React from "react";
import FeatureCard from "./FeatureCard/FeatureCrad";

export default function Focuses() {
  const cardData = [
    {
      imageUrl: './img/features/research-1.jpeg',
      title: 'Research and Innovation',
      description: 'Visual Computing labs often aim to advance the state of the art in computer graphics, computer vision, and related fields for developing new algorithms, techniques, and technologies for creating, processing, and understanding visual data.',
    },
    {
      imageUrl: './img/features/education-training.jpg',
      title: 'Education and Training',
      description: 'Visual computing lab provides a space for students and researchers to gain hands-on experience in visual computing through courses, workshops, and training programs to educate and prepare future professionals in this field.',
    },
    {
      imageUrl: './img/features/technology_develpoment.jpeg',
      title: 'Technology Development',
      description: 'Visual computing labs work on developing software tools, frameworks, and hardware systems to support various applications, such as 3D modeling, virtual reality, augmented reality, and image analysis.',
    },
    {
      imageUrl: './img/features/industry-collboration.webp',
      title: 'Industry Collaboration',
      description: 'Visual Computing Lab collaborates with industry partners, applying research findings for practical applications and effective technology transfer. This collaboration bridges academia and industry, ensuring the impactful implementation of our advancements.',
    },
    {
      imageUrl: './img/features/application-development.webp',
      title: 'Application Development',
      description: 'Labs focus on creating real-world applications of visual computing, such as video games, simulation environments, medical imaging systems, or augmented reality applications for industries like education, healthcare, and entertainment.',
    },
    {
      imageUrl: './img/features/cross-platfrom.jpeg',
      title: 'Cross-disciplinary Collaboration',
      description: 'Visual computing often intersects with other fields, such as artificial intelligence, machine learning, and robotics to facilitate collaboration and interdisciplinary research to address complex problems that require a combination of expertise.',
    },
    {
      imageUrl: './img/features/publishing-dismentation.jpg',
      title: 'Publishing and Dissemination',
      description: 'The lab often strives to publish their research findings in academic journals and conferences to contribute to the global knowledge base and make their work accessible to the wider community.',
    },
    {
      imageUrl: './img/features/ux-design.jpeg',
      title: 'User Experience (UX) Design',
      description: 'This lab concentrates on improving the user experience by studying how humans interact with visual content and developing user interfaces, user-centered designs, and usability testing methodologies.',
    },
    {
      imageUrl: './img/features/computer-vision.jpeg',
      title: 'Computer Vision',
      description: 'The lab is more geared towards computer vision, it may aim to develop algorithms and systems that can automatically interpret and understand visual data from images and videos for applications like object recognition, surveillance, and autonomous vehicles.',
    },
    {
      imageUrl: './img/features/image-video.jpg',
      title: 'Image and Video Processing',
      description: 'The lab concentrates on image and video processing techniques to enhance or manipulate visual data for various purposes, including improving image quality, compression, and restoration.',
    },
    {
      imageUrl: './img/features/ethical-social.jpeg',
      title: 'Ethical and Social Considerations',
      description: 'Visual computing labs also consider the ethical implications of the work, including privacy issues, bias in algorithms, and the impact of visual computing on society.',
    },
  ];
  

  return (
    <>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-white py-6">
        
        <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">Particularly</span>, our recent lab focus on studying
        </h2>
    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {cardData.map((data, index) => (
        <FeatureCard key={index} {...data} />
      ))}
    </div>
    </div>
    </>
  );

}


