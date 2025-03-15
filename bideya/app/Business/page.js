import React from 'react';
import Bande from '@/app/components/BusinessPage/B_Bande';
import Navi from '@/app/components/BusinessPage/B_Navigateur';
import Parag from "@/app/components/BusinessPage/B_Parag";
import Titre from '@/app/components/BusinessPage/B_Titre';
import Cadre from '@/app/components/BusinessPage/B_LesCadres';

const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>


      {/* Composant Bande (Bande en bas de la page) */}
      <Bande>

      </Bande>
      {/* Composant Navigateur (En-tête, liste et bouton "Get Started") */}
      <Navi>

      </Navi>
      {/* la paragraphe de business */}
      <Parag>

      </Parag>
      {/* Le titre */}
      <Titre>

      </Titre>
      {/* les 4 cadres */}
      <Cadre>
        
      </Cadre>

    </div>
  );
};
export default Page;

