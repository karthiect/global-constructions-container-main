// import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/image';

// export const NotFound = () => {
//   const navigate = useNavigate();
//   return (
//     <div 
//       className="h-screen w-full flex items-center justify-center bg-white cursor-pointer"
//       onClick={() => navigate('/')}
//     >
//       <img 
//         src={notFoundImg} 
//         alt="Page Not Found - 404" 
//         className="w-full h-full object-cover md:object-contain"
//       />
//     </div>
//   );
// };

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-white">
      <img
        src={IMAGES?.Notfound}
        alt="Not Found Image"
        className="h-full w-1/2 mx-auto sm:w-full bg-white object-contain"
      />
    </div>
  );
};

export default NotFound;

