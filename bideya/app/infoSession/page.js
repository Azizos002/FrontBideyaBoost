import React from 'react';

import Info from '@/app/components/homePage/infoSession';
import Navi from '@/app/components/EngineeringPage/EN_Navigateur';

import Bande from '@/app/components/homePage/bandeInfo';

const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* La bordure en bas */}
      
    
      {/* Le navigateur en haut */}
      <Navi>

      </Navi>
      {/*Le cadre avec la paragraphe */}
     <Info/>
  

      
    </div>
  );
};

export default Page;