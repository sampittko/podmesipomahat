import { LINKS } from '../../../../config/transitions';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../config/routes';
import React from 'react';
import Step from './Step';

const steps = [(
    <span>
      Kliknite na tlačidlo <Link to={ROUTES.VYBERTE_VASE_MESTO} className={`${LINKS} text-green underline hover:text-black`}>Pomôžte mi</Link> a zavolajte nám na <span className="text-blue">telefónne číslo</span> príslušné k vášmu mestu, alebo nám pošlite <span className="text-blue">elektronický formulár</span>
    </span>
  ), (
    <span>
      Definujte produkty, ktoré potrebujete
    </span>
  ), (
    <span>
      Z príslušného tel. č. dostanete <span className="text-blue">telefonicky</span> alebo <span className="text-blue">SMS správou</span> informáciu o dobrovoľníkovi, ktorý nákup či lieky doručí
    </span>
  ), (
    <span>
      Po jeho príchode sa vám preukáže <span className="text-blue">občianskym preukazom</span> (pokojne ho k preukázaniu vyzvite)
    </span>
  ), (
    <span>
      Naši dobrovoľníci budú mať na viditeľnom mieste pripnutý <span className="text-blue">odznak <span className="uppercase">poďme si pomáhať!</span></span>
    </span>
  ), (
    <span>
      V prípade vyzdvihnutia liekov poskytnite dobrovoľníkovi <span className="text-blue">kartičku poistenca</span> a <span className="text-blue">recept</span> na daný liek
    </span>
  ), (
    <span>
      Nakúpime za vás / Vyzdvihneme lieky
    </span>
  ), (
    <span>
      Odovzdáme vám nákup / lieky
    </span>
  ), (
    <span>
      Nákup / lieky si preberiete <span className="text-blue">pred</span> vchodom do domu, alebo bytovky
    </span>
  ), (
    <span>
      Uhradíte platbu za nákup / lieky (vždy vám poskytneme <span className="text-blue">nákupný blok</span>)
    </span>
  ), (
    <span>
      Chráňte sa a buďte zodpovední
    </span>
  )
];

const Procedure = () =>
  <div className="grid xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-6 font-futura-medium text-lg text-left">
    <div className="xl:col-span-2 lg:col-span-2 md:hidden sm:hidden xs:hidden"/>
    <div className="col-span-3 sm:col-span-2 xs:col-span-2">
      <ol>
        {steps.map((step, i) => (
          <Step
            number={i + 1}
            className={i >= 5 ? 'md:hidden lg:hidden xl:hidden' : ''}
            key={`procedure-step-${i}-col-1`}
          >
            {step}
          </Step>
        ))}
      </ol>
    </div>
    <div className="col-span-3 sm:hidden xs:hidden">
      <ol>
        {steps.map((step, i) => (
          i >= 5 && (
            <Step
              number={i + 1}
              key={`procedure-step-${i}-col-2`}
            >
              {step}
            </Step>
          ))
        )}
      </ol>
    </div>
    <div className="xl:col-span-2 lg:col-span-2 md:hidden sm:hidden xs:hidden" />
  </div>;

export default Procedure;