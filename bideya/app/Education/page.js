import React from 'react';
import Bande from '@/app/components/EducationPage/ED_Bande';
import Navi from '@/app/components/EducationPage/ED_Navigateur';
import Parag from '@/app/components/EducationPage/ED_Parag';
import Titre from '@/app/components/EducationPage/ED_Titre';
import Cadre from '@/app/components/EducationPage/ED_LesCadres';


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
      {/* les 4 cadres et leur contenu */}
      <Cadre>
        
      </Cadre>

      
    </div>
  );
};

export default Page;


