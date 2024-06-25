
import FacultyCard from "./FacultyCard/FacultyCard";

export default function Faculty() {
  const FacultyData = [
    // {
    //   imageUrl: "./img/faculty/Sabhanayagham.jpg",
    //   name: "Dr. Sabhanayagham T",
    //   description: "AI & ML, Neural Networks, Computer Vision, Cellular Automata, Cryptography",
    //   role: "Deputy Controller of Examinations",
    //   Learnmore: "https://www.srmist.edu.in/faculty/dr-t-sabhanayagham/"
    // },
    {
      imageUrl: "./img/faculty/Dr.G.NIRANJANA.jpg",
      name: "Dr. Niranjana G",
      description: "Image Processing, Pattern Recognition, Neural Networks, and Wireless Networks",
      role: "Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-g-niranjana/"
    },
    {
      imageUrl: "./img/faculty/Minumam.jpg",
      name: "Dr. Minu R I",
      description: "Computer vision, Internet of Thing and AI ML",
      role: "Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-r-i-minu/"
    },
    {
      imageUrl: "./img/faculty/Vijayakumaransir.jpg",
      name: "Dr. C. Vijayakumaran",
      description: "Computer Vision, Blockchain, IoT, and Quantum Computing",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-c-vijayakumaran/"
    },
    {
      imageUrl: "./img/faculty/Dr. P. Murali-.jpg",
      name: "Dr. Murali P",
      description: "Cryptography, Watermarking, and Cloud Security",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-p-murali-2/"
    },
    {
      imageUrl: "./img/faculty/aruna_mam.jpg",
      name: "Dr. Aruna M",
      description: "AI / ML , Computer Vision and IoT",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-m-aruna/"
    },
    {
      imageUrl: "./img/faculty/arthi_mam.jpg",
      name: "Dr. Arthi B",
      description: "Software Engineering, Artificial Intelligence, Machine Learning and IOT",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-b-arthi/"
    },
    {
      imageUrl: "./img/faculty/umamaheshwarimam.jpeg",
      name: "Dr. Uma Maheswari KM",
      description: "Cloud Scheduling & Resource Allocation, Deep Learning and Data Mining",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/k-m-uma-maheswari/"
    },
    {
      imageUrl: "./img/faculty/muruganathamsir.jpeg",
      name: "Dr. Muruganantham B",
      description: "Data warehousing, Service Oriented Architecture, IOT, ML and Deep Learning",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-b-muruganantham/"
    },
    {
      imageUrl: "./img/faculty/sreekumarsir.jpg",
      name: "Dr. Sreekumar K",
      description: "Wireless Sensor Networks, Machine Learning and IoT",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-k-sreekumar/"
    },
    {
      imageUrl: "./img/faculty/ramamoorthy.jpeg",
      name: "Dr. Ramamoorthy S",
      description: "Cloud Virtualization, Cloud Security, Sentimental Analysis and IOT",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-s-ramamoorthy/"
    },
    {
      imageUrl: "./img/faculty/jothi kumar.jpeg",
      name: "Dr. Jothi Kumar C",
      description: "IoT, M2M, Distributed Network, WSN/MANET, Ad hoc Network and Optimization Technique",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-c-jothi-kumar/"
    },
    {
      imageUrl: "./img/faculty/Dr.Baranidharan.jpg",
      name: "Dr. Baranidharan B",
      description: "Machine Learning, Internet of Things and Wireless Sensor Networks",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-b-baranidharan/"
    },
    {
      imageUrl: "./img/faculty/vinoth_kumar.jpg",
      name: "Dr. V. Vinoth Kumar",
      description: "Industrial Biotechnology",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-v-vinoth-kumar/"
    },
    {
      imageUrl: "./img/faculty/madhavanp.jpg",
      name: "Dr. Madhavan P",
      description: "Mobile Adhoc Networks, Sensor Networks, Cryptographic Algorithms and Image Processing",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-p-madhavan/"
    },
    {
      imageUrl: "./img/faculty/kanchanasir.jpeg",
      name: "Dr. Kanchana M",
      description: "Image Processing, Data Mining, Deep learning, AI & ML, Network Security",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-m-kanchana/"
    },
    {
      imageUrl: "./img/faculty/b-sivakumar.jpg",
      name: "Dr. Sivakumar B",
      description: "Machine Learning, IoT, Cloud Computing, Artificial Intelligence and Deep learning",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-b-sivakumar/"
    },
    {
      imageUrl: "./img/faculty/padeepmohankumar.jpeg",
      name: "Dr. Pradeep Mohankumar K",
      description: "Network Security and Cloud Computing",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-k-pradeep-mohan-kumar/"
    },
    {
      imageUrl: "./img/faculty/babusir.jpg",
      name: "Dr. Babu S",
      description: "Wireless Sensor Networks, IOT, Cloud Computing and Software Quality Metrics",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-s-babu/"
    },
    {
      imageUrl: "./img/faculty/kanishkamam.jpg",
      name: "Dr. Kanisha B",
      description: "Machine Learning, Speech Recognition, Artificial Intelligence and Computing Vision",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-b-kanisha/"
    },
    {
      imageUrl: "./img/faculty/s-sivakumarsir.png",
      name: "Dr. Sivakumar S",
      description: "Aircraft landing gears, Aircraft structures and Aircraft maintenance",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-s-sivakumar/"
    },
    {
      imageUrl: "./img/faculty/selvarajsir.jpg",
      name: "P.Selvaraj",
      description: "AI & ML, IoT and Cognitive Networks",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-p-selvaraj/"
    },
    {
      imageUrl: "./img/faculty/saravanansir.png",
      name: "Dr. Saravanan P",
      description: "AI & ML, Analytics, Internet Banking & ERP, Information Security and Cyber Security, Supply Chain",
      role: "Associate Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/p-saravanan/"
    },
    {
      imageUrl: "./img/faculty/Velmurugansir.jpg",
      name: "Dr. Velmurugan P",
      description: "Software Testing, IoT, Bigdata, Machine Learning and Image Processing",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-p-velmurugan/"
    },
    {
      imageUrl: "./img/faculty/saranya-pmam.png",
      name: "Dr. Saranya P",
      description: "Medical Image processing, Deep learning, AI ML and Wireless Sensor Networks",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/ms-p-saranya/"
    },
    {
      imageUrl: "./img/faculty/sivakumarsir.jpg",
      name: "Dr T K SIVAKUMAR",
      description: "Network Security and Wireless Application Protocol",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/t-k-sivakumar/"
    },
    {
      imageUrl: "./img/faculty/jayavarthinimam.jpeg",
      name: "Dr. Jayavarthini C",
      description: "Computer vision, Deep Learning and Medical Imaging",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/c-jayavarthini/"
    },
    {
      imageUrl: "./img/faculty/sibiAmaran.jpg",
      name: "Dr. Sibi Amaran",
      description: "Computer Vision and Wireless Sensor Networks",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/mr-sibi-amaran/"
    },
    {
      imageUrl: "./img/faculty/ranjanimam.jpg",
      name: "Ms. Ranjani M",
      description: "Deep Learning and Networking",
      role: "Assistant Professor",
      Learnmore: ""
    },
    {
      imageUrl: "./img/faculty/nithyakanimam.jpg",
      name: "Ms. Nithyakani P",
      description: "Pattern Recognition, Computer vision, AI ML, Deep Learning and Image Processing",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/p-nithyakani/"
    },
    {
      imageUrl: "./img/faculty/rajalakshmimam.jpg",
      name: "Dr. Rajalakshmi M",
      description: "Biometrics, Network Security, Computer Networks, Image processing, Machine learning and Deep learning",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/m-rajalakshmi/"
    },
    {
      imageUrl: "./img/faculty/saravanan.jpg",
      name: "Dr. Saravanan S",
      description: "Natural Language Processing, Neural Networks and Data Mining",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/s-saravanan/"
    },
    {
      imageUrl: "./img/faculty/Vaidhehi_Profile.jpg",
      name: "Mrs. M.Vaidhehi",
      description: "Computer Vision, Data mining and Big data",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/m-vaidhehi/"
    },
    {
      imageUrl: "./img/faculty/karthikeyansir.jpg",
      name: "Dr. Karthikeyan M",
      description: "Computer Vision, Deep Learning and Internet of Things",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/m-karthikeyan/"
    },
    {
      imageUrl: "./img/faculty/S-S-Saranaya.jpg",
      name: "Dr. Saranya S S",
      description: "Computer Architecture, Network Security and Operating System",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/s-s-saranya/"
    },
    {
      imageUrl: "./img/faculty/maranancy.jpg",
      name: "Mrs. Maria Nancy A",
      description: "Deep Learning, Explainable AI and Computer Vision.",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/ms-a-maria-nancy/"
    },
    {
      imageUrl: "./img/faculty/kiruthikamam.jpg",
      name: "Dr. Kiruthika Devi S",
      description: "Visual Computing , Deep Learning , Machine Learning and Image Processing",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/ms-s-kiruthika-devi/"
    },
    {
      imageUrl: "./img/faculty/sindhujamam.jpg",
      name: "Dr. Sindhuja M",
      description: "Nature Inspired Computing, Wireless Networks, Deep Learning and Data Structures",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-sindhuja-m/"
    },
    {
      imageUrl: "./img/faculty/kishoreantuvunusir.jpg",
      name: "Dr. Kishore Anthuvan Sahayaraj K",
      description: "Computer Vision, Time Series Forecasting",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-k-kishore-anthuvan-sahayaraj/"
    },
    {
      imageUrl: "./img/faculty/Dr.K.Alice-New.jpg",
      name: "Dr. Alice K",
      description: "Deep Learning, Machine Learning and Image Processing",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-k-alice/"
    },
    {
      imageUrl: "./img/faculty/muthukumaransir.png",
      name: "Dr. Muthu Kumaran A M J",
      description: "Software Reliability and Machine Learning",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/a-m-j-muthu-kumaran/"
    },
    {
      imageUrl: "./img/faculty/geethamam.jpg",
      name: "Dr. Geetha K",
      description: "DBMS, Multimedia databases, AI, Spatial Data Mining, IOT in Agriculture",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-k-geetha/"
    },
    {
      imageUrl: "./img/faculty/devipriyamam.jpg",
      name: "Dr. Devipriya A",
      description: "Artificial Intelligence, Machine Learning, Deep Learning, IOT, Big Data Analytics",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-a-devipriya/"
    },
    {
      imageUrl: "./img/faculty/Dr.G.Balamurugansir.jpg",
      name: "Dr. Balamurugan G",
      description: "Artificial Intelligence, Video Processing",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/mr-g-balamurugan/"
    },
    {
      imageUrl: "./img/faculty/suganiyamam.jpg",
      name: "Dr. Suganiya M",
      description: "Artificial Intelligence, Machine Learning, Signal Processing and Image Processing",
      role: "Assistant Professor",
      Learnmore: "https://www.srmist.edu.in/faculty/dr-m-suganiya/"
    },
  ];
  
  

  return (
    <>
      <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-white py-6">
          <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
            Faculty
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {/* Card */}

          {FacultyData.map((data, index) => (
            <FacultyCard key={index} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}
