// import React, { useState } from 'react';
// import './Workarticles.scss'; // CSS 파일 임포트

// export default function Workarticles() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(workarticles.length / itemsPerPage);

//   const startIdx = (currentPage - 1) * itemsPerPage;
//   const currentItems = workarticles.slice(startIdx, startIdx + itemsPerPage);

//   return (
//     <section>
//       <h2>Work Articles</h2>

//       <ul>
//         {currentItems.map(({ id, title, date }) => (
//           <li key={id}>
//             <h3>{title}</h3>
//             <small>{date}</small>
//           </li>
//         ))}
//       </ul>

//       <div className="pagination">
//         {/* 이전 */}
//         <button
//           onClick={() => setCurrentPage(prev => prev - 1)}
//           disabled={currentPage === 1}
//         >
//           &lt;
//         </button>

//         {/* 페이지 번호 */}
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
//           <button
//             key={num}
//             onClick={() => setCurrentPage(num)}
//             className={num === currentPage ? 'active' : ''}
//           >
//             {num}
//           </button>
//         ))}

//         {/* 다음 */}
//         <button
//           onClick={() => setCurrentPage(prev => prev + 1)}
//           disabled={currentPage === totalPages}
//         >
//           &gt;
//         </button>
//       </div>
//     </section>
//   );
// }
