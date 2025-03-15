import React from 'react';
import Navi from '@/app/components/categorie/c_navigateur';
import Titre from '@/app/components/categorie/c_titre';
import Categories from '@/app/components/categorie/c_categorie';
import Def from '@/app/components/categorie/c_lesDefinitions';


const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Composant Navigateur (En-tête, liste et bouton "Get Started") */}
      <Navi>
        /</Navi>
      {/* Le titre + stor by */}
      <Titre>

      </Titre>
      {/* Les 4 catégories */}
      <Categories>
        
      </Categories>
      {/* Les definitions de chaque catégories */}
      <Def>
        
      </Def>
      

     
    </div>
  );
};

export default Page;
