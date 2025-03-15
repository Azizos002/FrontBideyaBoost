import React from 'react';
import Bande from '@/app/components/EngineeringPage/EN_Bande';
import Cadre from '@/app/components/EngineeringPage/EN_LesCarreeaux';
import Navi from '@/app/components/EngineeringPage/EN_Navigateur';
import Parag from '@/app/components/EngineeringPage/EN_Paragraphe';
import Titre from '@/app/components/EngineeringPage/EN_Titre';


const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* La bordure en bas */}
      <Bande>

      </Bande>
      {/* Le navigateur en haut */}
      <Navi>

      </Navi>
      {/*Le cadre avec la paragraphe */}
      <Parag>

      </Parag>
      {/*Le titre*/}
      <Titre>

      </Titre>
      {/*les 4 carré avec leur contenu*/}
      <Cadre>
        
      </Cadre>



      
    </div>
  );
};

export default Page;
