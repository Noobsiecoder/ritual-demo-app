import { useState } from "react";
import { DisplayNavgivation } from "./components/context";

import {
  CompanyContentComponent,
  FeaturedProductsComponent,
  FooterComponent,
  HeroContentComponent,
  IntroContentComponent,
  NavigationComponent,
  ProductCategoryComponent,
} from "./components";

const App = (): JSX.Element => {
  const [canDisplay, setCanDisplay] = useState(false);

  return (
    <DisplayNavgivation.Provider value={{ canDisplay, setCanDisplay }}>
      <div className="relative h-screen overflow-x-hidden">
        <NavigationComponent />
        <div
          className={`h-screen space-y-8 md:px-4 xl:px-8 ${
            canDisplay ? "md:opacity-30" : null
          }`}
        >
          <HeroContentComponent />
          <div className="pb-12 space-y-6 md:space-y-12 lg:space-y-16">
            <div className="flex sm:justify-center sm:p-12">
              <ProductCategoryComponent />
            </div>
            <IntroContentComponent />
            <CompanyContentComponent />
            <FeaturedProductsComponent />
          </div>
          <FooterComponent />
        </div>
      </div>
    </DisplayNavgivation.Provider>
  );
};

export default App;
