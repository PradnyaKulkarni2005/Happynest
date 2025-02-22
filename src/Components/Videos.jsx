// import React,{useEffect,useState} from 'react'
// // useeffect is a hook that allows to run side effects like fetching data, setting timers or performing any 
// // usestate - react hook used for adding state variables to the functional components

// import stories from '../../../data/stories.json'
// import music from '../../../data/songs.json'

// export default function Videos({section,language,category}) {
//   // it initializes state variable filteredStories using useState hook , and the state is initially set to empty array
//   //setFilteredStories-function used to update the state
//   const [filteredSection,setFilteredSection]=useState([]);
// // The code inside the useeffect will be executed after the component is rendered for the first time and The empty array [] as the second argument to useEffect means that the effect will only run once
//   useEffect(()=>{
//     // filter method is applied on stories to check the condition for each story and if the condition meets it is stored in filtered aray
//     if(section=='music'){
//     const filtered=music.filter(
//       (section)=>music.language === language && music.category===category
//     );
// }
// else{
//     const filtered=stories.filter(
//         (section)=>story.language === language && story.category===category
//       ); 
// }
//     // updating of state filteredStories with filtered array
//     setFilteredSection(filtered);
//   },[]);


  
//   return (
//     <div>
//         <div>
//           {/* If length of filteredstories is 0 then gives msg 
//           else maps through the array 
//           Mapping - filtered story will display div containing the yt video */}
//           {filteredSection.length === 0 ? (
//             <p>No videos found for the selected category and language</p>
//           ):(
//             filteredSection.map((h,index)=>(
//               <div key={index}>
//               <iframe width="560"
//                 height="315" src={section.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen></iframe> </div>
//             ))
//           )}
//         </div>
//     </div>
//   )
// }


import React from 'react';
import { useLocation } from 'react-router-dom';

function Videos() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const section = queryParams.get('section');
  const language = queryParams.get('language');
  const category = queryParams.get('category');

  return (
    <div>
      <h2>Videos Page</h2>
      <p>Section: {section}</p>
      <p>Language: {language}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default Videos;
