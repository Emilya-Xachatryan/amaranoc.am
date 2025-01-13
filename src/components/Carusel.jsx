import React, { useMemo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import { image1, image2, image3, image4,image5,image6,image7, image8, image9, image10, image11, image12} from '../Class';
import "../style/Carusel.css"
import "../style/Gallery.css"




const carouselItems = [
  { label: 'Առանձնատներ', icon: 'home.svg', link: '/homes' },
  { label: 'Frame houses', icon: 'frame_house.svg', link: '/frame-houses' },
  { label: 'Տնակներ', icon: 'cabins.svg', link: '/cabins' },
  { label: 'Փակ լողավազան', icon: 'close_pool.svg', link: '/closed-pool' },
  { label: 'Աղմուկից հեռու', icon: 'far_from_noise.svg', link: '/far-from-noise' },
  { label: 'Շքեղ տեսարան', icon: 'view.svg', link: '/luxury-view' },
  { label: 'Պահանջված', icon: 'nobel.svg', link: '/popular' },
  { label: 'Լճի ափին', icon: 'along_lake.svg', link: '/lake-side' },
  { label: 'Գետի ափին', icon: 'along_river.svg', link: '/river-side' },
  { label: 'Տաղավար', icon: 'pavilion.svg', link: '/pavilion' },
  { label: 'Հյուրանոցներ', icon: 'hotel.svg', link: '/hotels' },
  { label: 'Դիզայն', icon: 'designed.svg', link: '/design' },
  { label: 'Նոր', icon: 'new.svg', link: '/new' },
  { label: 'Բնակարաններ', icon: 'house.svg', link: '/apartments' },
];

const CarouselItem = React.memo(({ label, icon, onClick }) => {
  return (
    <div className="group cursor-pointer flex flex-col items-center space-y-2 min-w-max" onClick={onClick}>
      <div className="bg-secondary" style={{ 
        maskImage: `url(https://api.amaranoc.am/${icon})`, 
        maskRepeat: 'no-repeat', 
        maskPosition: 'center center', 
        maskSize: 'cover', 
        width: '40px', 
        height: '40px' 
      }}></div>
      <p className="text-secondary text-sm max-sm:text-[12px] whitespace-nowrap">{label}</p>
      <div className="w-8 h-[3px] rounded-[3px] duration-100 bg-transparent group-hover:bg-secondary/5"></div>
    </div>
  );
});

const Carousel = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  const memoizedItems = useMemo(() => carouselItems, []);

  const handleItemClick = (item) => {
    console.log("Clicked item:", item);
    if (item.label === 'Առանձնատներ') {
      // console.log("Setting selected items for Առանձնատներ...");
      setSelectedItem([image1, image2, image3]); //  "Առանձնատներ" images
    } else if (item.label === 'Frame houses') {
      // console.log("Setting selected items for Frame houses...");
      setSelectedItem([image4, image5, image6]); // "Frame houses" images
    }  else if (item.label === 'Տնակներ') {
      // console.log("Setting selected items for Տնակներ...");
      setSelectedItem([image7, image8, image9]); // "Տնակներ" images
    }else if (item.label === 'Փակ լողավազան') {
      // console.log("Setting selected items for Փակ լողավազան...");
      setSelectedItem([image10, image11, image12]); // "Փակ լողավազան" images
    }
    else {
      setSelectedItem(null);
    }
  };

  return (
    <div>
      <div className="carousel snap-mandatory flex overflow-auto hide-scrollbar space-x-10">
        {memoizedItems.map(item => (
          <div className="carousel-item !w-max" key={item.label}>
            <CarouselItem
              label={item.label}
              icon={item.icon}
              onClick={() => handleItemClick(item)}  
            />
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="details-container mt-4 p-4 border border-gray-300">
          <div className="carousel-details">
            {selectedItem.map((detail, index) => (
              <div key={index} className="detail-item mb-4">
                <img src={detail.imageUrl} alt={`Detail ${index}`} className="w-full h-auto mb-2" />
                <p><strong>Description:</strong> {detail.description}</p>
                <p><strong>Price (Day):</strong> {detail.priceDay}</p>
                <p><strong>Price (Night):</strong> {detail.priceNight}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
