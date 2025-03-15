import React from 'react';
import Navi from '@/app/components/MedcinePage/M_Navigateur';
import Parag from '@/app/components/MedcinePage/M_Parag';
import Titre from '@/app/components/MedcinePage/M_Titre';
import Bande from '@/app/components/MedcinePage/M_Bande';
import LesCarreau from '@/app/components/MedcinePage/M_LesCarreau';


const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Composant Navigateur (En-tête, liste et bouton "Get Started") */}
      <Navi>
        /</Navi>

      {/* La paragraphe de medecine avec le rectangle */}
      <Parag>

      </Parag>

      {/* Le titre de cette page */}
      <Titre>

      </Titre>

      {/* La bordure en bas */}
      <Bande>

      </Bande>
      
      {/* Les 4 rectangle avec leur continue */}
      <LesCarreau>

      </LesCarreau>
    </div>
  );
};

export default Page;

