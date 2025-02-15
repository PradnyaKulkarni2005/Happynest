// import React,{useEffect,useState} from 'react'

// import music from '../../../data/Songs/englishsongs.json'
// export default function Videos({language,category}) {
   
//   const [filteredStories,setFilteredStories]=useState([]);
//   useEffect(()=>{
//     const filtered=music.filter(
//       (story)=>music.language === language && music.category===category
//     );
//     setFilteredStories(filtered);
//   },[language,category]);
//   return (
//     <div>
//       <div>
//           {/* If length of filteredstories is 0 then gives msg 
//           else maps through the array 
//           Mapping - filtered story will display div containing the yt video */}
//           {filteredStories.length === 0 ? (
//             <p>No videos found for the selected category and language</p>
//           ):(
//             filteredStories.map((music,index)=>(
//               <div key={index}>
//               <iframe width="560"
//                 height="315" src={music.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen></iframe> </div>
//             ))
//           )}
//         </div>

      
//     </div>
//   )
// }
