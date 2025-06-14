import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";
import React, { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Login from "./pages/Login";
import bannerImage from './banner.jpg'; // Adjust the path based on where banner.jpg is located in src.

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const articles = [
    {
      id: "1",
      title: "Welcome to the Site",
      author: "Erystle",
      body: "At Coffee Corner, we invite you to slow down and savor the art of storytelling. This site is your cozy nook to explore articles, journals, and poems that reflect life’s moments—big and small. Whether you’re here to be inspired, to learn, or to simply enjoy the written word, you’re in the right place. Like a warm cup of coffee, our content is crafted to provide comfort, spark creativity, and bring people together. So sit back, relax, and let’s share stories that warm the soul. Welcome to Coffee Corner—where every word is brewed to perfection. ☕"
    },
    {
      id: "2",
      title: "Warmth of a Morning Brew",
      author: "KapeIsLayp",
      body: "There’s magic in the morning’s first sip., A quiet ritual, a moment of bliss. The aroma that lifts, the taste that soothes. Coffee whispers, “Today, you can move.” A simple act, yet deeply profound, In the morning’s brew, peace is found."
    },
    {
      id: "3",
      title: "Brewing Creativity: How Coffee Fuels Life",
      author: "EME",
      body: "There’s something about the aroma of freshly brewed coffee that awakens more than just your senses—it stirs the soul. For writers, poets, and artists, coffee has long been a muse. The act of sipping from a warm cup becomes a rhythm that aligns thoughts, while the gentle caffeine kick sparks creativity. Imagine this: a quiet café corner, the hum of soft chatter in the background, a notebook open, and a steaming mug by your side. In such moments, inspiration often flows like the coffee itself—rich, warm, and full of flavor. Whether it's the comfort of the ritual or the mental clarity it brings, coffee becomes more than a beverage; it becomes a companion in the creative process. So, next time you find yourself staring at a blank page, try brewing a cup. Your masterpiece might just be a sip away."
    },
{
  id: "4",
  title: "The World in a Cup: Exploring Different Kinds of Coffee",
  author: "Erystle Ulet",
  body: `
Coffee isn't just a drink; it's an experience, a story told in flavors, aromas, and rituals. Around the globe, coffee takes on unique forms that reflect the culture and traditions of its origin. In Italy, espresso stands out as a concentrated shot of rich coffee, forming the base for many beloved drinks like lattes and cappuccinos, known for its bold flavor and velvety crema. Turkey offers Turkish coffee, a thick, unfiltered brew made in a cezve, often sweetened and spiced with cardamom for an intense and aromatic profile. In Vietnam, the famous egg coffee blends robusta coffee, egg yolk, and condensed milk into a creamy, dessert-like treat. Australia and New Zealand share the smooth and balanced flat white, made with espresso and micro-foamed milk, celebrated for its velvety texture. Mexico brings us Café de Olla, a traditional coffee brewed with cinnamon and piloncillo, offering a sweet and spiced aroma. Ethiopia, often considered the birthplace of coffee, features elaborate coffee ceremonies where the brew is infused with spices like cloves and cardamom, making it a cultural centerpiece. The United States popularized cold brew, known for its smooth and mellow flavor, steeped in cold water for an extended period to create a refreshing choice. Lastly, Indonesia offers the unique and expensive Kopi Luwak, made from beans processed through the digestive tract of civets, resulting in a distinct flavor. Each coffee type offers a glimpse into its homeland's traditions, showing us that coffee is more than a beverage—it’s a global connector. Which one will you try next?`,
},


  ];

  return (
    <div className="App">
      <BrowserRouter>
        {/* Banner */}
        <div className="banner">
          <img
            src={bannerImage}
            alt="Site Banner"
            className="banner-image"
          />
        </div>

        {/* Navigation */}
        {authenticated && (
          <nav>
            <h1>My Articles</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        )}

        {/* Routes */}
        <Routes>
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
          <Route
            path="/"
            element={
              authenticated ? (
                <Home articles={articles} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/about"
            element={authenticated ? <About /> : <Navigate to="/login" />}
          />
          <Route
            path="/contact"
            element={authenticated ? <Contact /> : <Navigate to="/login" />}
          />
          <Route
            path="/articles/:urlId"
            element={authenticated ? <Article articles={articles} /> : <Navigate to="/login" />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
