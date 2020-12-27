import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase
} from "./components/headers/light.js";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "images/logo-light.svg";
import serverIllustrationImageSrc from "images/server-illustration-2.svg";
import NewsFeed from "./NewsFeed"
import Grid from '@material-ui/core/Grid';

import {XYPlot, LineSeries, VerticalGridLines,HorizontalGridLines,XAxis,YAxis,HorizontalBarSeries,DiscreteColorLegend} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';


const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
];



const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-144 ml-auto`





 export default function Dashboard(){
    const logoLink = (
        <LogoLink href="/">
          
          SmartDetect
        </LogoLink>
      );
      const navLinks = [

      ];
      return(  
      <div>
      <PrimaryBackgroundContainer>
        <Content2Xl>
          <Header logoLink={logoLink} links={navLinks} />
          
          
        </Content2Xl>
        
      </PrimaryBackgroundContainer>
      <div style={{margin:"30px"}}>
        <Grid container spacing={5} >
          <Grid item xs={5}>
            <NewsFeed/>
          </Grid>
          <Grid item xs={7} alignItems="end" justify="flex-end" direction="column">
            <XYPlot width={700} height={500} xDomain={[0,100]} stackBy="y" yType="ordinal" style={{fontSize:"19px",marginRight:"0px"}}>
            
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <HorizontalBarSeries color="#f50057"  data={[{y: "Corona", x: 40},{y: "protestation", x: 55},{y: "Politic", x: 30} ]} />
              <HorizontalBarSeries data={[{y: "Corona", x: 60},{y: "protestation", x: 45},{y: "Politic", x: 70} ]} />
            </XYPlot>
            
          </Grid>
        </Grid>
      </div>
      
      </div>  )
    
}