// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import '../../../data/songs.json';

// export default function Videos() {
//   const [searchParams] = useSearchParams();
//   const [filteredStories, setFilteredStories] = useState([]);

//   // Extract query parameters
//   const section = searchParams.get('section');
//   const language = searchParams.get('language');
//   const category = searchParams.get('category');

//   useEffect(() => {
//     // Assuming `stories` is imported and contains your data
//     const filtered = stories.filter(
//       (story) =>
//         story.section === section &&
//         story.language === language &&
//         story.category === category
//     );
//     setFilteredStories(filtered);
//   }, [section, language, category]);

//   return (
//     <div>
//       {filteredStories.length === 0 ? (
//         <p>No videos found for the selected section, language, and category</p>
//       ) : (
//         filteredStories.map((story, index) => (
//           <div key={index}>
//             <iframe
//               width="560"
//               height="315"
//               src={story.url}
//               frameBorder="0"
//               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
