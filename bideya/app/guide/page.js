import React from 'react';
import Navi from '@/app/components/LeGuide/G_Navigateur';
import Rguide from '@/app/components/LeGuide/G_Rguide';
import BRech from '@/app/components/LeGuide/G_BRech';
import LesRectangle from '@/app/components/LeGuide/G_LesRectangles';
import Bande from '@/app/components/LeGuide/G_Bande';

const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Composant Navigateur (En-tête, liste et bouton "Get Started") */}
      <Navi>
        /</Navi>

      {/* Composant R_guide (Rectangle "Guide" et texte "Guide") */}
      <Rguide>

      </Rguide>

      {/* Composant BRech (Barre de recherche, phrase centrée et ligne "SUGGESTION") */}
      <BRech>
      </BRech>

      {/* Composant LesRectangle (4 rectangles avec leur contenu) */}
      <LesRectangle>

      </LesRectangle>

      {/* Composant Bande (Bande en bas de la page) */}
      <Bande>

      </Bande>
    </div>
  );
};
export default Page;
