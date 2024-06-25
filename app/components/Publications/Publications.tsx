import PublicationsList from "./PublicationsList/PublicationsList";
import PatentsList from "./PatentsList/PatentsList";
import BooksList from "./BooksList/BooksList";
import CertificateCoursesList from "./CertificateCoursesList/CertificateCoursesList";
import FDPSTTPWorkshopsList from "./FDPSTTPWorkshopsList/FDPSTTPWorkshopsList";
import ResearchProposalsList from "./ResearchProposalsList/ResearchProposalsList";
import ResearchOutcomesList from "./ResearchOutcomesList/ResearchOutcomesList";



const publications = [
  {
    title: "Optical biosensor based cancer cell detection using optimized machine learning model with quantum computing",
    authors: ["G. Balamurugan", "C. Annadurai", "I. Nelson", "K. Nirmala Devi", "A. Sheryl Oliver", "S. Gomathi"],
    journal: "Optical and Quantum Electronics",
    year: 2024,
    link: "https://doi.org/10.1007/s11082-023-05684-x",
  },
  {
    title: "Effective load balancing approach in cloud computing using Inspired Lion Optimization Algorithm",
    authors: ["Kaviarasan R", "Balamurugan G", "Kalaiyarasan R", "Venkata Ravindra Reddy Y"],
    journal: "e-Prime - Advances in Electrical Engineering, Electronics and Energy",
    volume: "6",
    year: 2023,
    pages: "100326",
    ISSN: "2772-6711",
    link: "https://doi.org/10.1016/j.prime.2023.100326",
  },
  {
    title: "Object Detection Using a YOLOv4 Model in Video Surveillance",
    authors: ["G. Balamurugan", "V. Arulalan", "V. Premanand"],
    conference: "2023 4th International Conference on Smart Electronics and Communication (ICOSEC)",
    location: "Trichy, India",
    year: 2023,
    pages: "9-14",
    doi: "10.1109/ICOSEC58147.2023.10275864",
  },
  {
    title: "Long-Term Traffic Flow Prediction using Spatio temporal Data",
    authors: ["Sahayaraj", "Kishore Anthuvan", "G. Balamurugan", "Arulalan, V", "Ragunthar, T"],
    year: 2023,
    SSRN: "https://ssrn.com/abstract=4628386",
    DOI: "http://dx.doi.org/10.2139/ssrn.4628386",
  },
  {
    title: "FishRNFuseNET: development of heuristic-derived recurrent neural network with feature fusion strategy for fish species classification",
    authors: ["Bhanumathi, M.", "Arthi, B."],
    journal: "Knowledge and Information Systems",
    year: 2023,
  },
  {
    title: "Review of the effectiveness of machine learning based phishing prevention systems",
    authors: ["Jishnu KS", "Arthi B"],
    journal: "AIP Conf. Proc. 2917",
    year: 2023,
    volume: "2917",
    pages: "050006",
  },
  {
    title: "Neural Network Collation: A Comparative Study on Novel Image-based Malware classification through Neural Network",
    authors: ["Kavitha, P. M.", "Muruganantham, B."],
    journal: "International Journal of Intelligent Systems and Applications in Engineering",
    year: 2023,
    volume: "11",
    number: "10s",
    impactFactor: 0.9,
    SNIP: 0.56,
  },
  {
    title: "Panoramic Video Surveillance: An Analysis of Burglary Detection Based on YOLO Framework in Residential Areas",
    authors: ["Pavithra.S", "B. Muruganantham"],
    journal: "Journal of Computer Science",
    volume: "19",
    number: "11",
    year: 2023,
    pages: "1345-1358",
    date: "2 October 2023",
    impactFactor: 0.94,
    SNIP: 1.376,
  },
  {
    title: "Real-Time GPU-Accelerated Driver Assistance System",
    authors: ["Ravi, P.", "Shukla, A.", "Muruganantham, B."],
    journal: "Lecture Notes in Electrical Engineering",
    volume: "1066 LNEE",
    year: 2023,
    pages: "821–834",
  },
  {
    title: "Skin cancer classification using improved transfer learning model‐based random forest classifier and golden search optimization",
    authors: ["M. Vidhyalakshmi", "Dr. M. Kanchana"],
    journal: "International Journal of Imaging Systems and Technology, Wiley",
    year: 2023,
    impactFactor: 3.3,
    SNIP: 0.931,
    date: "2.11.2023",
    link: "https://onlinelibrary.wiley.com/journal/10981098",
  },
  {
    title: "Remote Sensing-based Scene Classification by Feature Fusion and Extraction with Ensemble Classifier Employing Machine Learning Approaches",
    authors: ["Arulmurugan, R.", "Kaviarasan", "Parimala Garnepudi", "M. Kanchana", "D. Kothandaraman", "C.H. Sandeep"],
    journal: "Journal, IOS Press",
    year: 2023,
    DOI: "10.3233/JIFS-235109",
    pages: "1-13",
    impactFactor: 2.0,
    SNIP: 0.638,
    date: "27.11.2023",
  },
  {
    title: "Classification of skin disease using a novel hybrid flash butterfly optimization from dermoscopic images",
    authors: ["M. Vidhyalakshmi", "Dr. M. Kanchana"],
    journal: "Neural Computing & Applications",
    year: 2023,
    DOI: "10.1007/s00521-023-09011-z",
    impactFactor: 6.0,
    SNIP: 1.825,
    date: "12.12.2023",
  },
  {
    title: "An Intelligent deep learning based capsule network model for human detection in indoor surveillance videos",
    authors: ["S. Ushasukanya", "T.Y.J. Nagamalleswari", "M. Karthikeyan", "C. Jayavarthini"],
    journal: "Soft computing",
    year: 2023,
    pages: "1-11",
    DOI: "10.1007/s00500-023-09443-8",
    impactFactor: 4.1,
  },
  {
    title: "Importance of Machine Vision Framework with Nondestructive Approach for Fruit Classification and Grading : Review",
    authors: ["Mukesh Kumar Tripathi", "Baswaraj", "Selvam", "Neelam Sharma", "Geetha. K"],
    journal: "International Journal on recent and innovation Trends in Computing and Communication",
    volume: "11",
    number: "10",
    DOI: "https://doi.org/10.17762/ijritcc.v11i10.8616",
    date: "2 Nov 2023",
  },
  {
    title: "Prediction of Influenza A Cases in Tropical Climate Country using Deep Learning Model",
    authors: ["M. S. Abd Rahim", "F. Yakub", "M. Omar", "R. Abd Ghani", "I. Dhamanti", "S. Sivakumar"],
    conference: "IEEE 2nd National Biomedical Engineering Conference (NBEC)",
    location: "Melaka, Malaysia",
    year: 2023,
    pages: "188-193",
    DOI: "10.1109/NBEC58134.2023.10352612",
  },
  {
    title: "Deep multi-convolutional stacked capsule network fostered human gait recognition from enhanced gait energy image",
    authors: ["Nithyakani, P.", "M. Ferni Ukrit"],
    journal: "Signal, Image and Video Processing",
    year: 2023,
    pages: "1-8",
  },
  {
    title: "Customer Churn Prediction using Machine Learning",
    authors: ["Samiksha Upadhyay", "Rajalakshmi. M"],
    conference: "14th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
    location: "IIT Delhi, India",
    year: 2023,
    pages: "1-7",
    DOI: "10.1109/ICCCNT56998.2023.10307748",
    // date: "2023",
  },
];


const patents = [
  {
    title: "Development of Machine Learning Approach for Gesture Recognition in IoT-Enabled Human-Computer Interaction",
    journal: "Intellectual Property Rights",
    applicationNumber: "202311065051",
    date: "13/10/2023",
    faculty: "Dr. G. Balamurugan"
  },
  {
    title: "Robotics System for the Detection of Lead Element Absorption In Agricultural Soil through IoT",
    journal: "Intellectual Property Rights",
    applicationNumber: "202311065051",
    date: "03/11/2023",
    faculty: "Dr. G. Balamurugan"
  },
  {
    title: "Enhanced Yolov7 and Deepsort: A powerful Duo for human detection and tracking in Residential security cameras",
    dateOfFiling: "10.10.2023",
    publicationDate: "20.10.2023",
    applicationNumber: "202341068062 A",
    faculty: "S. Pavithra, Dr. B. Muruganantham"
  },
  {
    title: "IoT Enabled Hemoglobin Analyzer",
    dateOfGrant: "08/12/13",
    faculty: "Dr. K. Alice"
  },
  {
    title: "Intelligent Wireless Network Repeater Using IoT",
    designNumber: "391364-001",
    dateOfGrant: "13.10.2023",
    faculty: "Dr. M. Kanchana"
  },
  {
    title: "Device for Teaching Braille Language to the Blind Student",
    designNumber: "397425-001",
    dateOfGrant: "27.12.2023",
    faculty: "Dr. A. Devipriya"
  },
  {
    title: "A Bi-Modal System for Personal Identification and a Method Thereof",
    dateOfGrant: "06/12/2023",
    patentOffice: "Intellectual Property, India, Government of India",
    faculty: "Dr. M. Rajalakshmi, Dr. Annapurani.K"
  }
];


const books = [
    {
      chapterTitle: "A Survey on Privacy Preserving and Trust Building Techniques of Blockchain-Based Systems",
      authors: ["G. Balamurugan", "Amit Kumar Tyagi", "Richa"],
      bookTitle: "Privacy Preservation and Secured Data Storage in Cloud Computing",
      editors: ["Lakshmi D.", "Amit Kumar Tyagi"],
      publisher: "IGI Global",
      publicationYear: 2023,
      pages: "430-457",
      link: "https://doi.org/10.4018/979-8-3693-0593-5.ch019"
    },
    {
      chapterTitle: "Feature Engineering and Selection Approach Over Malicious Image",
      authors: ["P. M. Kavitha", "B. Muruganantham"],
      bookTitle: "Data Engineering and Data Science: Concepts and Applications",
      publisher: "Scopus Indexed",
      publicationYear: 2023,
      pages: "173-193",
      DOI: "10.1002/9781119841999",
      link: "https://doi.org/10.1002/9781119841999"
    }
];

const certificateCourses = [
  {
    courseName: "Fundamentals of Augmented Reality & Virtual Reality",
    faculty: ["Dr.M.Kanchana"],
    completionDate: "Dec 2023",
    platform: "Udemy",
    duration: "19 hours"
  },
  {
    courseName: "Deep Learning for Image Classification in Python with CNN",
    faculty: ["S. Sivakumar"],
    completionDate: "Dec 2023",
    platform: "Udemy"
  },
  {
    courseName: "Java for Beginners – Learn all the basics of Java",
    faculty: ["S. Sivakumar"],
    completionDate: "Dec 2023",
    platform: "Udemy"
  },
  {
    courseName: "Fundamentals of Augmented Reality & Virtual Reality (101)",
    faculty: ["Dr. Aruna M", "Dr. Arthi B"],
    completionDate: "15 Dec 2023",
    platform: "Udemy"
  },
  {
    courseName: "Python for Computer Vision with OpenCV and Deep Learning",
    faculty: ["Dr. Arthi B", "Dr. Aruna M"],
    completionDate: "1 Dec 2023",
    platform: "Udemy"
  },
  {
    courseName: "Introduction to Image Generation",
    faculty: ["Geetha. K"],
    completionDate: "Google cloud",
    platform: "Google Cloud"
  },
  {
    courseName: "Introduction to Philosophy",
    faculty: ["Dr.A.Devipriya"],
    completionDate: "31.10.2023",
    platform: "Coursera"
  },
  {
    courseName: "Search Engines for Web and Enterprise Data",
    faculty: ["Dr.A.Devipriya"],
    completionDate: "09.11.2023",
    platform: "Coursera"
  },
  {
    courseName: "C++ Programming for Beginners (2023)",
    faculty: ["Dr. Snehasish Ghosh"],
    completionDate: "25/12/2023",
    platform: "Udemy",
    duration: "19 hours"
  },
  {
    courseName: "Introduction to Augmented Reality and AR Core",
    faculty: ["Dr. Sindhuja M"],
    completionDate: "Coursera",
    platform: "Coursera",
    Duration: "4 weeks"
  },
  {
    courseName: "Fundamentals of Augmented Reality and Virtual Reality",
    faculty: ["Dr. Sindhuja M"],
    completionDate: "Udemy",
    platform: "Udemy"
  }
];

const fdpsttpWorkshops = [
  {
    title: "National Workshop on DEEP LEARNING FOR HEALTHCARE IMAGE ANALYSIS (DLHIA)",
    organizers: ["Dr.G.Balamurugan"],
    startDate: "01st November 2023",
    endDate: "03rd November 2023",
    location: "SRMIST, KTR",
    // link: "https://example.com/national-workshop-dlhia"
  },
  {
    title: "Workshop on DEEP LEARNING FOR HEALTHCARE IMAGE ANALYSIS",
    organizers: ["S. Sivakumar"],
    startDate: "1st October 2023",
    endDate: "3rd October 2023",
    location: "SRMIST, KTR",
    // link: "https://example.com/workshop-dlhia"
  },
];

const researchProposals = [
  {
    title: "Heart Disease Detection Model for COVID Based Infirmity on Pre and Post COVID Observations",
    authors: ["Muruganantham, B"],
    scheme: "State University Research Excellence (SERB SURE)"
  },
  {
    title: "SERB-Smart Parking System",
    authors: ["Dr.K.Alice", "Dr. Sindhuja M"],
    scheme: "SERB-Smart Parking System"
  },
  {
    title: "Multilayered Adaptive fused features with AI Firefly Optimization for Multi-label Chest X-Ray Pathologies",
    authors: ["Dr.M.Kanchana"],
    scheme: "SERB State University Research Excellence (SERB- SURE)"
  },
];

const researchOutcomes= [
  {
    initiative: "Visual Computing Research Community (VCRC)",
    initiators: ["Dr. M. Aruna", "Dr. B. Arthi"],
    activities: ["Hackathons", "Webinars", "Workshops for Students and Faculty"]
  },

];


const PublicationsPage: React.FC = () => {
  return (
    <div className=" max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-1 mx-auto p-8 mb-5">
      <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] sm:py-3 dark:text-white py-0">
        <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
          Publications
        </span>
      </h2>

      <PublicationsList publications={publications} />

      <h2 className="text-xl text-gray-800 font-bold lg:text-[2rem]  py-0">
        Details of Patents
      </h2>
      <PatentsList patents={patents} />

      <h2 className="text-xl text-gray-800 font-bold lg:text-[2rem]  py-0">
        Details of Books/Book chapters
      </h2>
      <BooksList books={books} />

      <h2 className="text-xl text-gray-800 font-bold lg:text-[2rem]  py-0">
        Details of Certificate courses
      </h2>
      <CertificateCoursesList courses={certificateCourses} />

      <h2 className="text-xl text-gray-800 font-bold lg:text-[2rem]  py-0">
        FDP/STTP/Workshop organized
      </h2>
      <FDPSTTPWorkshopsList events={fdpsttpWorkshops} />

      <h2 className="text-xl text-gray-800 font-bold lg:text-[2rem]  py-0">
        Research Proposals
      </h2>
      <ResearchProposalsList proposals={researchProposals} />

      <h2 className="text-xl text-gray-800 font-bold lg:text-[2rem]  py-0">
        Research Outcomes
      </h2>
      <ResearchOutcomesList outcomes={researchOutcomes} />
    </div>
  );
};

export default PublicationsPage;
